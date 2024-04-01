import {
  AutoAwesome,
  ContentCopy,
  Email,
  EmojiFoodBeverage,
  FileDownload,
  HowToReg,
  LocalDining,
  PendingActions,
  Undo,
} from "@mui/icons-material";

const get = (name, sx) => {
  const isx = sx ?? {};
  const icons = {
    餐食: <LocalDining sx={isx} />,
    茶歇: <EmojiFoodBeverage sx={isx} />,
    签到: <HowToReg sx={isx} />,
    日程: <PendingActions sx={isx} />,
    复制: <ContentCopy sx={isx} />,
    下载: <FileDownload sx={isx} />,
    撤回: <Undo sx={isx} />,
    邮件: <Email sx={isx} />,
    星星: <AutoAwesome sx={isx} />
  };
  return icons[name] ?? null;
};

const icons = {
  get,
};

export default icons;
