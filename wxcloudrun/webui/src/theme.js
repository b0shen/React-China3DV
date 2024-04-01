import { createTheme } from "@mui/material";

const bc = {
  home: ["#0b345d", "#115191", "#176ec4"],
  forums: ["#0f2027", "#203a43", "#2c5364"],
  schedule: ["#002929", "#004343", "#007676"],
};

const bl = {
  home: `linear-gradient(to right, ${bc.home[0]}, ${bc.home[1]}, ${bc.home[2]})`,
  forums: `linear-gradient(to right, ${bc.forums[0]}, ${bc.forums[1]}, ${bc.forums[2]})`,
  schedule: `linear-gradient(to right, ${bc.schedule[0]}, ${bc.schedule[1]}, ${bc.schedule[2]})`,
};

const bs = {
  sx1: {
    p: 0.5,
    border: "5px solid",
    borderStyle: "outset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const forums = {
  bc: bc.forums,
  bl: bl.forums,
  forumGroup: {
    header: {
      sx: {
        ...bs.sx1,
        borderRadius: "1rem 1rem 0rem 1rem",
        boxShadow:
          "1px 2px 3px 0px rgba(42, 78, 94, 0.5), inset 1px 2px 3px 0px rgba(42, 78, 94, 0.5)",
        bgcolor: "rgba(0,0,0,0)",
        borderColor: "#4a8ba5",
      },
      color: "#152a33",
    },
    forumCard: {
      sx: {
        ...bs.sx1,
        width: "100%",
        height: "100%",
        minHeight: "4rem",
        borderRadius: "0rem 1rem 0rem 1rem",
        boxShadow: `1px 2px 3px 0px rgba(0, 0, 0, 0.3), inset -1px -1.5px 0px rgb(59, 114, 136), inset 1px 1.5px 2px  rgba(16, 34, 41, 0.5)`,
        backgroundImage: `linear-gradient(300deg, ${bc.forums[0]}, ${bc.forums[1]}, ${bc.forums[2]})`,
        borderColor: "#4a8ba5",
      },
      color: "rgba(255,255,255,0.9)",
    },
  },
};

const schedule = {
  bc: bc.schedule,
  bl: bl.schedule,
  table: {
    cell: {
      sx: {
        p: 1,
        pl: 0.5,
        pr: 0.5,
      },
    },
  },
};

const home = {
  bc: bc.home,
  bl: bl.home,
  forums: {
    sx: {
      ...bs.sx1,
      width: "100%",
      boxShadow: `1px 2px 3px 0px rgba(0, 0, 0, 0.3)`,
      backgroundImage: `linear-gradient(to right, ${bc.forums[2]}, ${bc.forums[1]}, ${bc.forums[1]})`,
      borderColor: "#4a8ba5",
      borderRadius: "1rem",
      height: "auto",
    },
    color: "#eeeeee",
  },
  schedule: {
    sx: {
      ...bs.sx1,
      width: "100%",
      borderRadius: "1rem",
      boxShadow: `1px 2px 3px 0px rgba(0, 0, 0, 0.3)`,
      backgroundImage: `linear-gradient(to right, ${bc.schedule[2]}, ${bc.schedule[1]}, ${bc.schedule[1]})`,
      borderColor: "#008b8b",
    },
    color: "#eeeeee",
  },
};

const theme = createTheme({
  home,
  forums,
  schedule,
});

export default theme;
