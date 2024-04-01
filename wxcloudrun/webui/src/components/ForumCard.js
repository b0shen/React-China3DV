import React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ButtonBase, useTheme } from "@mui/material";

// 这是你的小型卡片组件，它接收一个name和一个href参数
export function ForumCard({ forum }) {
  const navigage = useNavigate();
  const theme = useTheme();
  return (
    <ButtonBase
      onClick={() => navigage(`/forum?name=${forum.name}`)}
      sx={theme.forums.forumGroup.forumCard.sx}
    >
      <Typography
        sx={{
          fontSize: "clamp(1rem, 0.818rem + 0.91vw, 1.5rem)",
          color: theme.forums.forumGroup.forumCard.color,
        }}
      >
        {forum.name}
      </Typography>
    </ButtonBase>
  );
}
