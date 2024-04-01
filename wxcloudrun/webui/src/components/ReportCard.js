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
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import icons from "../icons";

// 定义一个SpeakerCard组件，接受一个speaker对象作为参数
const ReportCard = ({ report, labels }) => {
  const navigate = useNavigate();
  const reporter = report.reporter;
  const [tabidx, setTabidx] = useState(0);
  const tabdata = [];
  const strReporter = labels?.reporter ?? "讲者介绍";
  if (report.intro) {
    tabdata.push({
      label: "报告简介",
      text: report.intro,
    });
  }
  if (report.reporter?.profile) {
    tabdata.push({
      label: strReporter,
      text: report.reporter.profile,
    });
  }
  const csigflag = report?.forum === "大会报告";
  const reportTextAlign =
    ["餐食", "茶歇", "签到"].findIndex((e) => e === report.type) !== -1
      ? "center"
      : "left";
  const iconsx = { mb: -0.6 };
  const reportIcon = icons.get(report.type, iconsx);
  return (
    <Card sx={{ width: "95%", m: 1, mb: 0.5 }}>
      {report.reporter ? (
        <Box
          sx={{ display: "flex", alignItems: "center", p: 2 }}
          onClick={() =>
            csigflag &&
            report.type === "报告" &&
            navigate(`/person?name=${report.reportor}`)
          }
        >
          <Avatar
            src={reporter.photo_src}
            alt={reporter.name ?? "照片待更新"}
            sx={{ width: 80, height: 80, mr: 2 }}
          >
            {reporter.name ?? "照片待更新"}
          </Avatar>
          <Box>
            <Typography variant="h6" component="div">
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
            <Typography
              variant="h6"
              color="text.primary"
              textAlign={reportTextAlign}
            >
              {reportIcon ? reportIcon : null}
              {reportIcon ? " " : null}
              {report.name ?? "信息待更新"}
            </Typography>
          </Box>
        ) : null}
        {report.note ? (
          <Alert sx={{ pt: 0, pb: 0, pl: 1 }} severity="info">
            {report.note}
          </Alert>
        ) : null}
        {report.time ? (
          <Box>
            <Chip
              label="预定时间"
              size="small"
              sx={{
                height: "1.5rem",
                lineHeight: "1.5rem",
                mr: 1,
              }}
            />
            <Typography color="text.secondary" component={"span"}>
              {report.time ?? "时间待更新"}
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
          <Typography variant="body2" color="text.secondary" component={"span"}>
            {tabdata[tabidx]?.text ?? null}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default ReportCard;
