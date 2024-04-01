import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Groups2 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

// 这是一个用于展示论坛网页页面的UI
const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    navigate("/schedule", { replace: true });
  }, [navigate]);
  return (
    <>
      <AppBar
        sx={{
          background: theme.home.bl,
        }}
      >
        <Container sx={{ p: 0 }}>
          <Toolbar sx={{ gap: 1 }}>
            <Groups2 />
            <Typography variant="h6" component="div">
              CSIG·第三届中国三维视觉大会·2024
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container sx={{ p: 0 }}></Container>
    </>
  );
};

export default HomePage;
