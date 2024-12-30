"use client";
import { AppBar, Toolbar, Typography, Link, IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from "./SidebarContext";

const NavigationBar = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <IconButton color="inherit" onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    <Link href="/" underline="none" color="white">
                        Aokiju Labo
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
