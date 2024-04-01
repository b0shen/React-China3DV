import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Chip, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HostCardLine = ({ host, chiplable }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/forum?name=大会报告");
  };
  return (
    <TableRow>
      <TableCell sx={{ p: 1, width: 20 }}>
        <Avatar
          src={host?.photo_src}
          alt={host?.name ?? "照片待更新"}
          sx={{ width: 50, height: 50, mr: 1 }}
        >
          {host?.name ?? "照片待更新"}
        </Avatar>
      </TableCell>
      <TableCell sx={{ p: 1 }} onClick={onClick}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography>
                <strong>{host?.name ?? "" ?? "信息待更新"}</strong>
              </Typography>
            </Box>
            <Chip
              label={
                <Typography sx={{ fontSize: 15 }}>{chiplable ?? ""}</Typography>
              }
              sx={{
                height: "1.4rem",
                lineHeight: "1.4rem",
                mr: 1,
                mt: 0.2,
              }}
            />
          </Box>
          <Typography color={"#555555"}>{host?.organization ?? ""}</Typography>
          <Typography color={"#555555"}>{host?.title ?? ""}</Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default HostCardLine;
