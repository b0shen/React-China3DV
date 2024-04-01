import React from "react";
import { Typography, Stack } from "@mui/material";
import { Groups2 } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function HomeHeader() {
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
      <Groups2
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
        CSIG·第三届中国三维视觉大会·2024
      </Typography>
    </Stack>
  );
}
