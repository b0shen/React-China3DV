import { Box, Divider, Typography } from "@mui/material";
import NmCardLine from "./NmCardLine";

const ScheduleTable = ({ session }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1, pl: 1 }}>
          <Typography>
            <strong>大会日程</strong>
          </Typography>
        </Box>
        <Box sx={{ pr: 2 }}>
          <Typography>
            <strong>时间</strong>
          </Typography>
        </Box>
      </Box>
      <Divider />
      {session.meetings.map((report, index) => (
        <div key={index}>
          <NmCardLine report={report} />
          <Divider />
        </div>
      ))}
    </Box>
  );
};

export default ScheduleTable;
