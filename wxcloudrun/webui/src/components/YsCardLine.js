import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Chip, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const YsCardLine = ({ report }) => {
  const navigate = useNavigate();
  const kms = report.name === "大会开幕式";
  const onClick = () => {
    if (report?.reporter?.name && report.type === "报告") {
      navigate(`/person?name=${report?.reporter?.name}`);
    } else {
      navigate("/forum?name=大会报告");
    }
  };
  return (
    <TableRow>
      <TableCell sx={{ p: 1, width: 20 }}>
        <Avatar
          src={kms ? "./photos/csig.jpg" : report?.reporter?.photo_src}
          alt={report?.reporter?.name ?? "照片待更新"}
          sx={{ width: 50, height: 50, mr: 1 }}
        >
          {kms ? "CSIG YOUTH 2023" : report?.reporter?.name ?? "照片待更新"}
        </Avatar>
      </TableCell>
      <TableCell sx={{ p: 1 }} onClick={onClick}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography>
                <strong>
                  {kms
                    ? "CSIG YOUTH 2023"
                    : report?.reporter?.name +
                        (report?.reporter?.title ?? "") ?? "信息待更新"}
                </strong>
              </Typography>
            </Box>
            <Chip
              label={<Typography>{report.time ?? "时间待更新"}</Typography>}
              sx={{
                height: "1.4rem",
                lineHeight: "1.4rem",
                mr: 1,
                mt: 0.2,
              }}
            />
          </Box>
          {kms ? (
            <Typography color={"#222222"} sx={{ fontSize: 17 }}>
              <strong>{report.name ?? "报告待定"}</strong>
            </Typography>
          ) : (
            <Typography color={"#555555"} sx={{ fontSize: 15 }}>
              {report.name ?? "报告待定"}
            </Typography>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default YsCardLine;
