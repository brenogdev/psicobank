import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemButtonProps
} from "@mui/material";

type SidebarMenusProps = ListItemButtonProps & {
  open: boolean;
  label: string;
  icon:  React.JSX.Element;
};

export const SidebarMenus: React.FC<SidebarMenusProps> = ({
  open,
  label,
  icon,
  ...rest
}) => {
  return (
    <ListItem disablePadding sx={{ display: "block",  }}>
      <ListItemButton
        {...rest}
        sx={{
          minHeight: open ? 45 : 80,
          px: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: open ? "row" : "column",
          gap: 1,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            color: '#8E9EAE'
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
