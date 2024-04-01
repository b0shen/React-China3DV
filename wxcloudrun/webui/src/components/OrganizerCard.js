import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// 导入People图标组件
// import { PersonSearch, School } from "@mui/icons-material";

// 这是一个用于展示单个组织者的名称和所在单位的UI组件
const OrganizerCard = ({ organizer }) => {
  // 从organizer对象中解构出name和school属性
  const { name, organization } = organizer;
  return (
    // 使用Box组件作为外部容器
    <Stack
      sx={{
        width: "100%",
      }}
      direction={"row"}
    >
      {/* 使用Box组件作为左边的容器 */}
      <Box
        sx={{
          p: 0.5,
          width: "30%",
          borderRadius: "100px 0 0 100px",
          border: "2px solid",
          borderRight: "1px solid",
          bgcolor: "#eef2ff",
          borderColor: "#8d9cc3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 使用PeopleIcon组件显示组织者的图标 */}
        {/* <PersonSearch sx={{ color: "#0e477e" }} /> */}
        {/* 使用Typography组件显示组织者的名称 */}
        <Typography variant="h6">{name}</Typography>
      </Box>
      {/* 使用Box组件作为右边的容器 */}
      <Box
        // 使用sx属性设置Box的样式
        sx={{
          p: 0.5,
          flexGrow: 1,
          borderRadius: "0 100px 100px 0",
          border: "2px solid",
          borderLeft: "1px solid",
          // bgcolor: "#efefef",
          borderColor: "#8d9cc3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0px 0px 9px 0px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* <School sx={{ color: "#0e477e" }} /> */}
        {/* 使用Typography组件显示组织者的所在单位 */}
        <Typography variant="body1">{organization}</Typography>
      </Box>
    </Stack>
  );
};

export default OrganizerCard;
