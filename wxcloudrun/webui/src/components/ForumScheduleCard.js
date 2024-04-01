import { ExpandLess, Groups2, TravelExplore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ForumScheduleCard = ({ forum }) => {
  const [open, setOpen] = useState(true);
  const locmap = forum?.location?.image_src;
  return (
    <Paper
      sx={{
        padding: 1,
        boxShadow: 2,
      }}
    >
      {/* 使用Typography组件作为标题 */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Groups2 fontSize="large" color="disabled" />
        <Typography variant="h6" align="center" gutterBottom>
          {forum.name}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ m: 1, display: "flex", justifyContent: "space-around" }}>
        <Stack direction={"row"}>
          <Typography>{forum.date}</Typography>
        </Stack>
        <Stack direction={"column"}>
          <Typography>{forum.time}</Typography>
        </Stack>
        <Stack
          color={!locmap ? "#000000" : open ? "#0f4b85" : "#1976d2"}
          direction={"row"}
          onClick={() => setOpen(!open)}
        >
          {!locmap ? null : open ? <ExpandLess /> : <TravelExplore />}
          <Typography>{forum.loc ?? "地点待定"}</Typography>
        </Stack>
      </Box>
      {locmap ? (
        <Collapse in={open}>
          <img
            src={locmap}
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            alt={""}
          />
        </Collapse>
      ) : null}
    </Paper>
  );
};

export default ForumScheduleCard;
