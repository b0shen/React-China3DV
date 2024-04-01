// 导入React和MUI组件
import React, { useState } from "react";
import {
  Card,
  Typography,
  Avatar,
  Box,
  Stack,
  Tabs,
  Tab,
  Chip,
} from "@mui/material";

// 定义一个SpeakerCard组件，接受一个speaker对象作为参数
const DetailedReportCard = ({ report }) => {
  const reporter = report.reporter;
  const [tabidx, setTabidx] = useState(0);
  const tabdata = [];
  if (report.reporter?.profile) {
    tabdata.push({
      label: "讲者介绍",
      text: report.reporter.profile,
    });
  }
  if (report.intro) {
    tabdata.push({
      label: "报告简介",
      text: report.intro,
    });
  }
  // 返回一个Card组件，展示讲者的信息
  return (
    <Card sx={{ width: "95%", m: 1, mb: 0.5 }}>
      {report.reporter ? (
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Avatar
            src={reporter.photo_src}
            alt={reporter.name ?? "照片待更新"}
            sx={{ width: 120, height: 120, mr: 2 }}
            variant="rounded"
          >
            {reporter.name ?? "照片待更新"}
          </Avatar>
          <Box>
            <Typography variant="h5" component="div">
              {reporter.name ?? "信息待更新"}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {reporter.organization ?? ""}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {reporter.title ?? ""}
            </Typography>
          </Box>
        </Box>
      ) : null}
      <Stack sx={{ gap: 1, m: 1 }}>
        {report.name ? (
          <Box>
            <Typography variant="h5" color="text.primary">
              {report.name ?? "信息待更新"}
            </Typography>
          </Box>
        ) : null}
        {report.time ? (
          <Box>
            <Chip
              label="预定时间"
              size="small"
              sx={{
                height: "1.7rem",
                lineHeight: "1.7rem",
                mr: 1,
              }}
            />
            <Typography color="text.secondary" component={"span"}>
              {report.forumdetail?.date + " " + report.time ?? "时间待更新"}
            </Typography>
          </Box>
        ) : null}
        {report.forumdetail ? (
          <Box>
            <Chip
              label="报告地点"
              size="small"
              sx={{
                height: "1.7rem",
                lineHeight: "1.7rem",
                mr: 1,
              }}
            />
            <Typography color="text.secondary" component={"span"}>
              {report.forumdetail?.loc ?? "地点待更新"}
            </Typography>
          </Box>
        ) : null}
        {tabdata.length ? (
          <Box sx={{ width: "100%" }}>
            <Tabs value={tabidx} onChange={(e, v) => setTabidx(v)}>
              {tabdata.map((td, index) => {
                return (
                  <Tab
                    color="secon"
                    key={index}
                    value={index}
                    label={td.label}
                  />
                );
              })}
            </Tabs>
          </Box>
        ) : null}
        <Box>
          <Typography sx={{ fontSize: "1.1rem" }}>
            {tabdata[tabidx]?.text ?? null}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default DetailedReportCard;
