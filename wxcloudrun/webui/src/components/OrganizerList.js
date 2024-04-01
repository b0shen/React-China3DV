import React from "react";
import { Paper, Typography, Box, Stack } from "@mui/material";
import OrganizerCard from "./OrganizerCard";

// 这是一个用于展示多位组织者信息卡片的UI
const OrganizerList = ({ organizers, hosts, csigflag }) => {
  const sortRank = (a, b) => {
    return a.rank < b.rank ? -1 : 1;
  };
  organizers.sort(sortRank);
  hosts.sort(sortRank);
  return (
    // 使用Paper组件作为顶部元素
    <Paper
      sx={{
        padding: 1,
        boxShadow: 2,
      }}
    >
      {organizers.length ? (
        <>
          {/* 使用Typography组件作为标题 */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" align="center" gutterBottom>
              {/* 使用PeopleIcon作为图标 */}
              {csigflag ? "大会组织者" : "论坛组织者"}
            </Typography>
          </Box>
          {/* 使用List组件和ListItem组件作为列表的容器 */}
          <Stack gap={1}>
            {/* 使用map方法遍历fakeOrganizerList列表，为每个组织者生成一个OrganizerCard组件 */}
            {organizers.map((organizer) => (
              <OrganizerCard key={organizer.name} organizer={organizer} />
            ))}
          </Stack>
        </>
      ) : null}
      {hosts.length ? (
        <>
          {/* 使用Typography组件作为标题 */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" align="center" gutterBottom>
              {/* 使用PeopleIcon作为图标 */}
              {csigflag ? "大会主持人" : "论坛主持人"}
            </Typography>
          </Box>
          {/* 使用List组件和ListItem组件作为列表的容器 */}
          <Stack gap={1}>
            {/* 使用map方法遍历fakeOrganizerList列表，为每个组织者生成一个OrganizerCard组件 */}
            {hosts.map((host) => (
              <OrganizerCard key={host.name} organizer={host} />
            ))}
          </Stack>
        </>
      ) : null}
    </Paper>
  );
};

export default OrganizerList;
