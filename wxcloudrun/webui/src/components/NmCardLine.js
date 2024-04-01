import { Box, Chip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NmCardLine = ({ report }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", p: 1 }}
      onClick={() => navigate(`/forum?name=${report.name}`)}
    >
      <Box sx={{ display: "flex" }}>
        <Box color={"#1045a3"} sx={{ flexGrow: 1 }}>
          <Typography>
            <strong>{report?.name ?? "信息待更新"}</strong>
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
      <Typography color={"#555555"} sx={{ fontSize: 15 }}>
        {report.loc ?? "地点待定"}
      </Typography>
    </Box>
  );
};

export default NmCardLine;
