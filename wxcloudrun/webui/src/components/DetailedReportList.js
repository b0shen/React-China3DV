import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { RecordVoiceOver } from "@mui/icons-material";
import DetailedReportCard from "./DetailedReportCard";

// 这是一个用于展示多位讲者信息卡片的UI
const DetailedReportList = ({ reports }) => {
  return (
    <Box
      sx={{
        pb: 1,
        pt: 1,
        borderRadius: 1,
        border: "2px dashed",
        borderColor: "#8d9cc3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* 使用Typography组件作为标题 */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <RecordVoiceOver fontSize="large" color="disabled" />
        <Typography variant="h6" align="center" gutterBottom>
          {/* 使用ForumIcon作为图标 */}
          {"大会讲者"}
        </Typography>
      </Box>
      <Divider flexItem sx={{ ml: 1, mr: 1 }} />
      {reports.map((report, idx) => (
        <DetailedReportCard key={idx} report={report} />
      ))}
    </Box>
  );
};

export default DetailedReportList;
