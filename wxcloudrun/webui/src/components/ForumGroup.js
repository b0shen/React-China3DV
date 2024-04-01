import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import data from "../api/data";
import { ForumCard } from "./ForumCard";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

// 这是你的容器组件，它使用Grid来实现响应式的布局
export default function ForumGroup({ name }) {
  const theme = useTheme();
  const [forums, setForums] = useState([]);
  useEffect(() => {
    data.getForumsByGroupName(name).then((res) => {
      setForums(res);
    });
  }, [name]);
  return (
    <Grid container spacing={1} sx={{ mt: 0.5, mb: 2 }}>
      <Grid item xs={12}>
        <Box sx={theme.forums.forumGroup.header.sx}>
          <Typography
            variant="h5"
            color={theme.forums.forumGroup.header.color}
            sx={{ textShadow: "1px 2px 3px rgba(42, 78, 94, 0.3)" }}
          >
            {name}
          </Typography>
        </Box>
      </Grid>
      {forums.map((forum, idx, arr) => {
        const len = arr.length;
        var xs;
        if (len === 1) xs = 12;
        else if (len % 3 === 0) xs = 4;
        else if (len % 3 === 1) {
          if (idx < len - 4) xs = 4;
          else xs = 6;
        } else if (len % 3 === 2) {
          if (idx < len - 2) xs = 4;
          else xs = 6;
        }
        return (
          <Grid item xs={xs} key={forum.name}>
            <ForumCard forum={forum} />
          </Grid>
        );
      })}
    </Grid>
  );
}
