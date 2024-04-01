import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Chip, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DetailedYsCardLine = ({ report }) => {
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
      <TableCell sx={{ p: 1 }}>
        <Avatar
          src={kms ? "./photos/csig.jpg" : report?.reporter?.photo_src}
          alt={report?.reporter?.name ?? "照片待更新"}
          sx={{ width: 100, height: 100, mr: 1 }}
          variant="rounded"
        >
          {kms ? "CSIG YOUTH 2023" : report?.reporter?.name ?? "照片待更新"}
        </Avatar>
      </TableCell>
      <TableCell sx={{ p: 1 }} onClick={onClick}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5">
                <strong>
                  {kms
                    ? "CSIG YOUTH 2023"
                    : report?.reporter?.name +
                        (report?.reporter?.title ?? "") ?? "信息待更新"}
                </strong>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Chip
              label={
                report.forumdetail.date + " " + report.time ?? "时间待更新"
              }
              size="small"
              sx={{
                height: "1.3rem",
                lineHeight: "1.3rem",
                mr: 1,
                mt: 0.2,
              }}
            />
          </Box>
          <Typography color={"#333333"} sx={{ fontSize: 17 }}>
            {report.name ?? "报告待定"}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default DetailedYsCardLine;
