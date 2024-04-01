import { useTheme } from "@emotion/react";
import { Box, ButtonBase, Table, TableBody, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../api/data";
import DetailedYsCardLine from "./DetailedYsCardLine";

const OcCard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [reports, setReports] = useState([]);
  useEffect(() => {
    data
      .getReportsByForumName("大会报告")
      .then((res) => {
        setReports(res);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <ButtonBase
        onClick={() => navigate(`/forum?name=大会报告`)}
        sx={{
          ...theme.forums.forumGroup.forumCard.sx,
          borderRadius: "1rem 1rem 1rem 1rem",
          backgroundImage: `linear-gradient(300deg, #171a2c, #323a5f)`,
          borderColor: "#4e5993",
          boxShadow: `1px 2px 3px 0px rgba(0, 0, 0, 0.3), inset -1px -1.5px 0px rgb(62, 71, 120), inset 1px 1.5px 2px  rgba(23, 26, 44)`,
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.4rem)",
            color: theme.forums.forumGroup.forumCard.color,
          }}
        >
          大会主旨报告
        </Typography>
      </ButtonBase>
      <Table>
        <TableBody>
          {reports
            .filter((e) => e.type === "报告")
            .map((meeting, index) => {
              return <DetailedYsCardLine key={index} report={meeting} />;
            })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default OcCard;
