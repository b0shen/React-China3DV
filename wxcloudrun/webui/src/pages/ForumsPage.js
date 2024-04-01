import { useEffect, useState } from "react";
import { AppBar, Toolbar, Container, Box } from "@mui/material";
import ForumGroup from "../components/ForumGroup";
import data from "../api/data";
import { useTheme } from "@emotion/react";
import ForumsHeader from "../components/ForumsHeader";
import GdtxCard from "../components/GdtxCard";
import OcCard from "../components/OcCard";

// 这是一个用于展示论坛网页页面的UI
const ForumsPage = () => {
  const theme = useTheme();

  const [forumGroups, setForumGroups] = useState([]);
  useEffect(() => {
    data.getForumGroups().then((res) => {
      setForumGroups(res);
    });
  }, []);

  return (
    <>
      <AppBar
        sx={{
          background: theme.forums.bl,
        }}
      >
        <Container sx={{ p: 0 }}>
          <Toolbar>
            <ForumsHeader />
          </Toolbar>
        </Container>
      </AppBar>
      {/* 使用Container组件作为页面的内容区域 */}
      <Toolbar />
      <Container sx={{ pt: 2, pb: 5 }}>
        <OcCard />
        <Box sx={{ m: 2 }} />
        {forumGroups.map((fg) => {
          return <ForumGroup key={fg} name={fg} />;
        })}
        <Box sx={{ m: 2 }} />
        <GdtxCard />
      </Container>
    </>
  );
};

export default ForumsPage;
