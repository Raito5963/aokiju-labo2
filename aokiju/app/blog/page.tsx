import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const PageOne = () => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography color="text.primary">ページ１</Typography>
            </Breadcrumbs>
            <h1>Page1</h1>
        </>
    );
};

export default PageOne;
