// 导入React MUI组件
import React from "react";
import {
  Typography,
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  AlertTitle,
} from "@mui/material";
import { ExpandMore, PendingActions } from "@mui/icons-material";
import ScheduleTable from "./ScheduleTable";
import CsigReport from "./CsigReport";

// 定义一个子组件，用来显示每个日期的TabPanel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

// 定义一个组件，用来显示会议日程安排页面
function ConferenceSchedule({ schedule, tabidx, setTabidx }) {
  // 定义一个事件处理函数，用来更新状态变量
  const handleChange = (event, newValue) => {
    setTabidx(newValue);
  };
  // 返回一个JSX元素，用来渲染页面
  return (
    <>
      <Tabs value={tabidx} onChange={handleChange} centered>
        {schedule.map((item, index) => (
          <Tab key={index} label={<Typography>{item.date}</Typography>} />
        ))}
      </Tabs>
      {schedule.map((item, index) => (
        <TabPanel key={index} value={tabidx} index={index}>
          {item.sessions.map((session, index) => {
            const csigflag =
              item.date === "12月30日" && session.session === "上午";
            const sessionName = csigflag
              ? session.session + ": 大会主旨报告"
              : session.session;
            // const tabmm = parseInt(item.date.substring(0, 2));
            // const tabdd = parseInt(item.date.substring(3, 5));
            // const now = new Date();
            // let sessionPassed = false;
            // if (session.session === "上午") {
            //   if (now.getHours() >= 13) sessionPassed = true;
            // }
            // if (session.session === "下午") {
            //   if (now.getHours() >= 21) sessionPassed = true;
            // }
            // const shouldExpand =
            //   now.getFullYear() < 2023
            //     ? true
            //     : now.getFullYear() > 2023
            //     ? false
            //     : now.getMonth() + 1 < tabmm
            //     ? true
            //     : now.getMonth() + 1 > tabmm
            //     ? false
            //     : now.getDate() < tabdd
            //     ? true
            //     : now.getDate() > tabdd
            //     ? false
            //     : sessionPassed
            //     ? false
            //     : true;
            return (
              <Accordion key={index} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />} sx={{ mb: 0 }}>
                  <Typography variant="h6">{sessionName}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ mt: 0, pt: 0 }}>
                  {csigflag ? (
                    <>
                      <Alert
                        icon={<PendingActions />}
                        severity="info"
                        sx={{ pb: 0, pt: 0, mb: 0.5 }}
                      >
                        <AlertTitle>
                          入场时间：<strong>07:30 - 08:25</strong>
                        </AlertTitle>
                        报告地点：<strong>大宴会厅 - 广东厅</strong>
                      </Alert>
                      <CsigReport session={session} />
                    </>
                  ) : (
                    <ScheduleTable session={session} />
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </TabPanel>
      ))}
    </>
  );
}

// 导出组件
export default ConferenceSchedule;
