"use client";
import {
    Box,
    Drawer,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Toolbar,
} from "@mui/material";
import React from "react";
import { useSidebar } from "./SidebarContext";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import CoffeeIcon from "@mui/icons-material/Coffee";

type MenuItem = {
    name: string;
    url: string;
    icon: React.ReactNode;
};
const menuList: MenuItem[] = [
    { name: "自己紹介", url: "/introduction", icon: <BeachAccessIcon /> },
    { name: "資格", url: "/qualification", icon: <CoffeeIcon /> },
    { name: "制作物", url: "/production", icon: <BeachAccessIcon /> },
    { name: "ブログ", url: "/blog", icon: <CoffeeIcon /> },
];

const drawerWidth = 240;

const SideBar = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <Drawer
            open={isSidebarOpen}
            onClose={() => console.log("Drawer closed")}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
                <List>
                    {menuList.map(({ name, url, icon }: MenuItem) => (
                        <ListItem key={name} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <Link href={url} underline="none" color="inherit">
                                    {name}
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideBar;
