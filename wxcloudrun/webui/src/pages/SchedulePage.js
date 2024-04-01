import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  // Alert,
  // AlertTitle,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import ScheduleHeader from "../components/ScheduleHeader";
import ConferenceSchedule from "../components/ConferenceSchedule";
import data from "../api/data";
//import icons from "../icons";

// 这是一个用于展示论坛网页页面的UI
const SchedulePage = ({ tabidx, setTabidx }) => {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    data
      .getForumSchedule()
      .then((res) => {
        setSchedule(res);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);
  const theme = useTheme();
  // const now = new Date();
  // const showAlert =
  //   now.getFullYear() > 2023
  //     ? false
  //     : now.getMonth() + 1 > 12
  //     ? false
  //     : now.getDate() > 28
  //     ? false
  //     : true;
  return (
    <>
      <AppBar
        sx={{
          background: theme.schedule.bl,
        }}
      >
        <Container sx={{ p: 0 }}>
          <Toolbar sx={{ gap: 1 }}>
            <ScheduleHeader />
          </Toolbar>
        </Container>
      </AppBar>
      {/* 使用Container组件作为页面的内容区域 */}
      <Toolbar />
      <Container sx={{ p: 0, pt: 2 }}>
        <Typography variant="h5" color="#222222" align="center">
          <strong>第三届中国三维视觉大会</strong>
        </Typography>
        {/* <Typography variant="h5" color="#222222" align="center">
          <strong>青年科学家会议</strong>
        </Typography> */}
        {/* <Alert
          icon={icons.get("星星")}
          sx={{ mt: 1, ml: 2, mr: 2 }}
          severity="success"
        >
          <AlertTitle>本次大会已圆满结束，祝大家新年快乐!</AlertTitle>
          <strong>Happy New Year!</strong>
          <br />
          让我们下一届青年科学家会议再会！
        </Alert> */}
        <ConferenceSchedule
          schedule={schedule}
          tabidx={tabidx}
          setTabidx={setTabidx}
        />
      </Container>
    </>
  );
};

export default SchedulePage;
