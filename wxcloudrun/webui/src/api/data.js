import axios from "axios";

const db = {};
const tables = [
  "forum",
  "forum_organizer",
  "forum_host",
  "person",
  "report",
  "location",
  "article",
  "notification",
];
const fetches = tables.map((tbl) => axios.get(`./json/${tbl}.json`));
await Promise.all(fetches)
  .then((res_list) => {
    res_list.map((res, idx) => (db[tables[idx]] = res.data));
  })
  .catch((reason) => console.log(reason));

db.forum.forEach((f) => {
  const oname_list = db.forum_organizer.filter((r) => r.forum === f.name);
  f.organizers = db.person
    .filter((p) => oname_list.findIndex((e) => e.organizer === p.name) !== -1)
    .map((p) => {
      const rank = oname_list.find((e) => e.organizer === p.name)?.rank;
      return { ...p, rank };
    });
  const hname_list = db.forum_host.filter((r) => r.forum === f.name);
  f.hosts = db.person
    .map((e) => e)
    .filter((p) => {
      return hname_list.findIndex((e) => e.host === p.name) !== -1;
    })
    .map((p) => {
      const rank = hname_list.find((e) => e.host === p.name)?.rank;
      return { ...p, rank };
    });
  f.reports = db.report.filter((r) => r.forum === f.name);
  f.reports.sort((a, b) => (a.time < b.time ? -1 : 1));
  f.location = db.location.find((l) => l.loc === f.loc);
});
db.report.forEach((r) => {
  r.reporter = db.person.find((p) => p.name === r.reportor);
  r.forumdetail = db.forum.find((f) => f.name === r.forum);
});

const sortAny = (o, a, b) => {
  const ia = o.findIndex((e) => e === a);
  const ib = o.findIndex((e) => e === b);
  return ia < ib ? -1 : 1;
};

// console.log(db)

const getForumDataByName = async (name) => {
  const forum = db.forum
    .filter((f) => f.hide !== 1)
    .find((e) => e.name === name);
  return forum;
};

const getForumGroups = async () => {
  const fg = new Set();
  db.forum
    .filter((f) => f.group !== "主旨报告")
    .filter((f) => f.hide !== 1)
    .forEach((fr) => {
      fr.group && fg.add(fr.group);
    });
  const res = Array.from(fg);
  res.sort((a, b) =>
    sortAny(["基础论坛", "领域论坛", "产业与人才论坛", "Tutorial"], a, b)
  );
  return res;
};

const getForumsByGroupName = async (forumGroupName) => {
  const result = [];
  db.forum
    .filter((f) => f.hide !== 1)
    .forEach((fr) => {
      if (fr.group === forumGroupName) {
        result.push(fr);
      }
    });
  return result;
};

const getForumSchedule = async () => {
  const dates = {};
  db.forum
    .filter((f) => f.group !== "主旨报告")
    .filter((f) => f.hide !== 1)
    .forEach((frow) => {
      if (!(frow.date in dates)) {
        dates[frow.date] = {
          date: frow.date,
          sessions: {},
        };
      }
      const date = dates[frow.date];
      if (!(frow.session in date.sessions)) {
        date.sessions[frow.session] = {
          session: frow.session,
          time: frow.time,
          meetings: {},
        };
      }
      const session = date.sessions[frow.session];
      if (!(frow.name in session.meetings)) {
        session.meetings[frow.name] = {
          ...frow,
          location: db.location.find((r) => r.loc === frow.loc),
        };
      }
    });
  const result = [];
  for (var date in dates) {
    const sessionList = [];
    for (var session in dates[date].sessions) {
      const meetingList = [];
      for (var meeting in dates[date].sessions[session].meetings) {
        meetingList.push(dates[date].sessions[session].meetings[meeting]);
      }
      sessionList.push({
        session: dates[date].sessions[session].session,
        time: dates[date].sessions[session].time,
        meetings: meetingList,
      });
    }
    sessionList.sort((a, b) =>
      sortAny(["早上", "下午", "晚上"], a.session, b.session)
    );
    result.push({
      date: dates[date].date,
      sessions: sessionList,
    });
  }
  result.sort((a, b) => (a.date < b.date ? -1 : 1));
  return result;
};

const getReportsByForumName = async (name) => {
  const reports = db.report.filter((e) => e.forum === name);
  reports.sort((a, b) => (a.time < b.time ? -1 : 1));
  return reports;
};

const getReportsByPersonName = async (name) => {
  const reports = db.report.filter((e) => e.reportor === name);
  reports.sort((a, b) => (a.time < b.time ? -1 : 1));
  return reports;
};

const getArticles = async () => {
  const articles = db.article;
  return articles;
};

const getNotifications = async () => {
  return (
    db.notification.map((note) => {
      return {
        ...note,
        closed: localStorage.getItem(`note-${note.id}-readmark`),
      };
    }) ?? []
  );
};

const data = {
  getForumDataByName,
  getForumsByGroupName,
  getForumGroups,
  getForumSchedule,
  getReportsByForumName,
  getReportsByPersonName,
  getArticles,
  getNotifications,
};

export default data;
