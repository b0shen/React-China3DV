import React from "react";
import { Typography, Stack } from "@mui/material";
import { TableChart } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function ForumsHeader() {
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
      <TableChart
        sx={{
          color: theme.home.forums.color,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: theme.home.forums.color,
        }}
      >
        论坛列表
      </Typography>
    </Stack>
  );
}
