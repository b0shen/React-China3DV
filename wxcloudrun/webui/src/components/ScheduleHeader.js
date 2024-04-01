import React from "react";
import { Typography, Stack } from "@mui/material";
import { EventNote } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const ScheduleHeader = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{
        gap: 0.5,
        flexGrow: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <EventNote
        sx={{
          color: theme.home.schedule.color,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: theme.home.schedule.color,
        }}
      >
        会议日程
      </Typography>
    </Stack>
  );
};

export default ScheduleHeader;
