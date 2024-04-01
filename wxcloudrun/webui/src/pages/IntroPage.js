// 这是一个使用基于React的MUI组件的介绍页面的示例代码
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Toolbar,
  AppBar,
  Box,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import { useTheme } from "@emotion/react";
import TravelCard from "../components/TravelCard";
import data from "../api/data";
import NotificationPanel from "../components/NotificationPanel";
import icons from "../icons";

/**
 * 复制内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
function copyToClip(content) {
  var aux = document.createElement("input");
  aux.setAttribute("value", content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

// 定义一个组件
function IntroPage({ notes, setNotes }) {
  const theme = useTheme();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    data.getArticles().then((al) => {
      setArticles(al);
    });
  }, []);
  const articleTypes = [
    "大会通知",
    "大会信息",
    "酒店、导航信息",
    "旅游信息",
    "其他信息",
  ];
  return (
    <>
      <AppBar
        sx={{
          background: theme.home.bl,
        }}
      >
        <Container sx={{ p: 0 }}>
          <Toolbar>
            <HomeHeader />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container>
        <Box sx={{ mt: "1.5rem" }} />
        <Typography variant="h4" align="center">
          中国图象图形学学会
        </Typography>
        <Typography variant="h4" align="center">
          青年科学家会议
        </Typography>
        <Box sx={{ mt: "0.5rem" }} />
        <Typography variant="h6" align="center">
          2023年12月28日至31日 | 广州
        </Typography>
        <NotificationPanel notes={notes} setNotes={setNotes} />
        <Typography
          color={"#222222"}
          sx={{ mt: 1, textAlign: "center" }}
          variant="h6"
        >
          会场地图
        </Typography>
        <img
          src={"./images/loc/locations.jpg"}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          alt={""}
        />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 2,
          }}
        >
          <HandBook />
          <ScheduleApp />
          <CsigPub />
        </Box>
        {articleTypes.map((atype) => {
          const arts = articles.filter((e) => e.group === atype);
          return (
            <div key={atype}>
              {arts.length ? (
                <>
                  <Typography sx={{ mt: 3, textAlign: "center" }} variant="h5">
                    {atype}
                  </Typography>
                  <Grid container spacing={4}>
                    {arts.map((item, index) => (
                      <Grid item xs={12} sm={6} md={4} key={item.title}>
                        <TravelCard data={item} />
                      </Grid>
                    ))}
                  </Grid>
                </>
              ) : null}
            </div>
          );
        })}
        <Toolbar />
      </Container>
    </>
  );
}

export default IntroPage;
function ScheduleApp() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        p: 1,
        gap: 2,
      }}
    >
      <Stack>
        <Typography variant="h6" textAlign={"center"}>
          <strong>会议日程</strong>
        </Typography>
        <Button
          onClick={() => {
            const link =
              "https://prod-6g5nnh0zce8b86b8-1322323920.tcloudbaseapp.com";
            try {
              try {
                navigator.clipboard.writeText(link);
                alert("日程链接已复制");
              } catch {
                copyToClip(link);
                alert("日程链接已复制");
              }
            } catch (error) {
              alert("复制失败，请下载");
            }
          }}
          startIcon={icons.get("复制")}
        >
          复制分享链接
        </Button>
        <img
          src={"./images/qrcode/小程序二维码.png"}
          style={{
            height: "8rem",
            width: "auto",
            objectFit: "cover",
            // boxShadow: `0px 2px 6px 0px rgba(0, 0, 0, 0.5)`,
            display: "block",
          }}
          alt={""}
        />
      </Stack>
      <img
        src={"./images/logo/小程序截图.jpg"}
        style={{
          width: "35%",
          maxWidth: "400px",
          objectFit: "cover",
          boxShadow: `0px 2px 6px 0px rgba(0, 0, 0, 0.5)`,
          display: "block",
        }}
        alt={""}
      />
    </Paper>
  );
}

function HandBook() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        p: 1,
        gap: 2,
      }}
    >
      <Stack>
        <Typography variant="h6" textAlign={"center"}>
          <strong>会议手册</strong>
        </Typography>
        <Button
          onClick={() => window.open("./files/sc.pdf")}
          startIcon={icons.get("下载")}
        >
          下载会议手册
        </Button>
        <img
          src={"./images/qrcode/会议手册二维码.png"}
          style={{
            height: "8rem",
            width: "auto",
            objectFit: "cover",
            // boxShadow: `0px 2px 6px 0px rgba(0, 0, 0, 0.5)`,
            display: "block",
          }}
          alt={""}
        />
      </Stack>
      <img
        src={"./images/logo/会议手册封面.jpg"}
        style={{
          width: "35%",
          maxWidth: "400px",
          objectFit: "cover",
          boxShadow: `0px 2px 6px 0px rgba(0, 0, 0, 0.5)`,
          display: "block",
        }}
        alt={""}
      />
    </Paper>
  );
}

function CsigPub() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        p: 1,
      }}
    >
      <Stack>
        <Typography textAlign={"center"}>
          <strong>中国图象图形学学会</strong>
        </Typography>
        <Typography textAlign={"center"}>长按扫码关注我们</Typography>
        <img
          src={"./images/qrcode/CSIG公众号二维码.png"}
          style={{
            height: "8rem",
            width: "auto",
            objectFit: "cover",
            display: "block",
          }}
          alt={""}
        />
      </Stack>
      <img
        src={"./images/logo/CSIG公众号.jpg"}
        style={{
          width: "35%",
          maxWidth: "400px",
          objectFit: "cover",
          boxShadow: `0px 2px 6px 0px rgba(0, 0, 0, 0.5)`,
          display: "block",
        }}
        alt={""}
      />
    </Paper>
  );
}
