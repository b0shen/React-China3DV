import { useState } from "react";
import {
  Alert,
  AlertTitle,
  IconButton,
  List,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import icons from "../icons";

const NotificationPanel = ({ notes, setNotes }) => {
  const notesunread = notes.filter((note) => !note.closed);
  const notesread = notes.filter((note) => note.closed);
  const [tabidx, setTabidx] = useState(0);
  const tabdata = [
    {
      label: `最新通知(${notesunread.length})`,
      data: notesunread,
    },
    {
      label: `已读通知(${notesread.length})`,
      data: notesread,
    },
  ];
  return (
    <Paper>
      <Tabs value={tabidx} onChange={(e, v) => setTabidx(v)}>
        {tabdata.map((td, index) => (
          <Tab key={index} value={index} label={td.label} />
        ))}
      </Tabs>
      <List
        sx={{
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          bgcolor: "background.paper",
          p: 1,
        }}
      >
        {tabidx === 0 && notesunread.length === 0 ? (
          <Typography sx={{ textAlign: "center", color: "#555555" }}>
            没有最新通知
          </Typography>
        ) : null}
        {tabidx === 1 && notesread.length === 0 ? (
          <Typography sx={{ textAlign: "center", color: "#555555" }}>
            没有已读通知
          </Typography>
        ) : null}
        {tabdata[tabidx].data.sort((a, b) => a.id < b.id ? 1 : -1).map((note) => {
          return (
            <Alert
              sx={{ mb: 1 }}
              icon={icons.get(note.type) ?? null}
              key={note.id}
              severity={note.severity ?? "info"}
              onClose={
                !note.closed
                  ? () => {
                      localStorage.setItem(`note-${note.id}-readmark`, true);
                      setNotes(
                        notes.map((n) =>
                          n.id === note.id ? { ...n, closed: true } : n
                        )
                      );
                    }
                  : null
              }
              action={
                note.closed ? (
                  <IconButton
                    color="inherit"
                    onClick={() => {
                      localStorage.removeItem(`note-${note.id}-readmark`);
                      if (notesread.length === 1) {
                        setTabidx(0);
                      }
                      setNotes(
                        notes.map((n) =>
                          n.id === note.id ? { ...n, closed: false } : n
                        )
                      );
                    }}
                  >
                    {icons.get("撤回")}
                  </IconButton>
                ) : null
              }
            >
              {note.title ? (
                <AlertTitle>
                  <div dangerouslySetInnerHTML={{ __html: note.title }} />
                </AlertTitle>
              ) : null}
              {note.text ? (
                <div dangerouslySetInnerHTML={{ __html: note.text }} />
              ) : null}
              {note.time ? (
                <Typography sx={{ pt: 1 }} textAlign={"right"}>
                  {note.time}
                </Typography>
              ) : null}
            </Alert>
          );
        })}
      </List>
    </Paper>
  );
};

export default NotificationPanel;
