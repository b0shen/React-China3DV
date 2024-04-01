import { IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavButton = ({ icon, label, href, navOpt }) => {
  navOpt = navOpt ? navOpt : {};
  const navigate = useNavigate();

  const onClick = () => {
    if (href) {
      navigate(href, navOpt);
    }
  };
  return (
    <IconButton size="large" color="inherit" onClick={onClick}>
      <Stack direction={"row"}>
        {icon}
        <Typography>{label}</Typography>
      </Stack>
    </IconButton>
  );
};

export default NavButton;
