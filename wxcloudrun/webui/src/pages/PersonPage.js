import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Stack,
  ButtonBase,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Memory } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../api/data";
import { useTheme } from "@emotion/react";
import DetailedReportList from "../components/DetailedReportList";

// 这是一个用于展示论坛网页页面的UI
const PersonPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const personName = query.get("name");
  const [reports, setReports] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (personName) {
      data
        .getReportsByPersonName(personName)
        .then((res) => {
          setReports(res);
        })
        .catch((err) => {
          console.warn(err);
          navigate("/forums");
        });
    } else {
      navigate("/forums");
    }
  }, [personName, navigate]);
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
              {"大会讲者页面"}
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
          <ButtonBase
            onClick={() => navigate(`/forum?name=大会报告`, { replace: true })}
            sx={{
              ...theme.forums.forumGroup.forumCard.sx,
              borderRadius: "1rem 1rem 1rem 1rem",
              backgroundImage: `linear-gradient(300deg, #171a2c, #323a5f)`,
              borderColor: "#4e5993",
              boxShadow: `1px 2px 3px 0px rgba(0, 0, 0, 0.3), inset -1px -1.5px 0px rgb(62, 71, 120), inset 1px 1.5px 2px  rgba(23, 26, 44)`,
            }}
          >
            <Typography
              sx={{
                fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.4rem)",
                color: theme.forums.forumGroup.forumCard.color,
              }}
            >
              大会主旨报告
            </Typography>
          </ButtonBase>
          <DetailedReportList reports={reports} />
        </Stack>
      </Container>
    </>
  );
};

export default PersonPage;
