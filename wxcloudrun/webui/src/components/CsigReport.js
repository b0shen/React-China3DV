import { Divider, Table, TableBody, Typography } from "@mui/material";
import YsCardLine from "./YsCardLine";
import { useEffect, useState } from "react";
import data from "../api/data";
import HostCardLine from "./HostCardLine";

const CsigReport = () => {
  const [forum, setForum] = useState({
    organizers: [],
    reports: [],
  });
  useEffect(() => {
    data
      .getForumDataByName("大会报告")
      .then((res) => {
        setForum(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <>
      <Divider sx={{ mt: 1 }}>
        <Typography>
          <strong>主旨报告</strong>
        </Typography>
      </Divider>
      <Table>
        <TableBody>
          {forum?.reports?.map((meeting, index) => {
            return <YsCardLine key={index} report={meeting} />;
          })}
        </TableBody>
      </Table>
      <Divider sx={{ mt: 1.5 }}>
        <Typography>
          <strong>开幕式及大会主持人</strong>
        </Typography>
      </Divider>
      <Table>
        <TableBody>
          {forum?.hosts?.map((host, index) => {
            return (
              <HostCardLine
                key={index}
                host={host}
                chiplable={
                  index === 0 ? "开幕式主持人" : `大会报告主持人${index}`
                }
              />
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default CsigReport;
