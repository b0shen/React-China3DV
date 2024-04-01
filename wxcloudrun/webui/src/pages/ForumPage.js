import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReportList from "../components/ReportList";
import OrganizerList from "../components/OrganizerList";
import { Memory } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../api/data";
import { useTheme } from "@emotion/react";
import ForumScheduleCard from "../components/ForumScheduleCard";

// 这是一个用于展示论坛网页页面的UI
const ForumPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const forumName = query.get("name");
  const newcomer = forumName.substring(0, 8) === "青年学者服务论坛";
  const csigflag = forumName === "大会报告";
  // console.log(forumName)

  const [forumData, setForumDate] = useState({
    title: "",
    organizers: [],
    reports: [],
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (forumName) {
      data
        .getForumDataByName(forumName)
        .then((res) => {
          setForumDate(res);
        })
        .catch((err) => {
          console.warn(err);
          navigate("/forums");
        });
    } else {
      navigate("/forums");
    }
  }, [forumName, navigate]);
  const backcallback = () => {
    // console.log(window.history);
    if (window.history.length <= 2) {
      navigate("/schedule", { replace: true });
    } else {
      navigate(-1);
    }
  };
  return (
    <>
      <AppBar
        sx={{
          background: theme.forums.bl,
        }}
      >
        <Container sx={{ p: 0 }}>
          <Toolbar>
            {/* 使用IconButton组件和ArrowBackIcon组件作为返回按钮 */}
            <IconButton edge="start" color="inherit" onClick={backcallback}>
              <ArrowBackIcon />
            </IconButton>
            {/* 使用Typography组件作为论坛的名称 */}
            <Typography variant="h6" component="div">
              {csigflag ? "大会报告页面" : "论坛详情"}
            </Typography>
            {/* 使用IconButton组件和MemoryIcon组件作为一个科技感的图标 */}
            <Memory />
          </Toolbar>
        </Container>
      </AppBar>
      {/* 使用Container组件作为页面的内容区域 */}
      <Toolbar />
      <Container sx={{ p: 0 }}>
        <Stack sx={{ gap: 2 }}>
          <ForumScheduleCard forum={forumData} />
          {forumData?.organizers?.length || forumData?.hosts?.length ? (
            <OrganizerList
              organizers={forumData.organizers}
              hosts={forumData.hosts}
              csigflag={csigflag}
            />
          ) : null}
          <ReportList
            reports={forumData.reports}
            labels={{
              listLabel: csigflag
                ? "大会讲者"
                : newcomer
                ? "指导专家"
                : "论坛讲者",
              reporter: newcomer ? "指导专家介绍" : "讲者介绍",
            }}
          />
        </Stack>
      </Container>
    </>
  );
};

export default ForumPage;
