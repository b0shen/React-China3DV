import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";
import { EventNote, Home, TableChart } from "@mui/icons-material";
import { Badge } from "@mui/material";

export default function BottomNav({ notes }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const pathlist = ["/schedule", "/forums", "/intro"];
  const value = pathlist.findIndex((e) => e === pathname);
  return (
    <>
      {value >= 0 ? (
        <Box sx={{ pb: 7 }}>
          <CssBaseline />
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                navigate(pathlist[newValue], { replace: true });
              }}
            >
              <BottomNavigationAction label="会议日程" icon={<EventNote />} />
              <BottomNavigationAction label="论坛列表" icon={<TableChart />} />
              <BottomNavigationAction
                label="大会信息"
                icon={
                  <Badge
                    color="error"
                    badgeContent={notes.filter((n) => !n.closed).length}
                    max={10}
                  >
                    <Home color="action" />
                  </Badge>
                }
              />
            </BottomNavigation>
          </Paper>
        </Box>
      ) : null}
    </>
  );
}
