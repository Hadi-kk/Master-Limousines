import { Box, Typography } from "@mui/material";
import React from "react";

const InfoTile = (props: {
    text: String;
    subtext: String;
    variant?: String;
}) => {
    const { text, subtext, variant } = props;
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            py={4}
            width={200}
            height={variant === "long" ? 240 : 200}
            sx={{ backgroundColor: "black" }}
        >
            <Typography variant="h1" fontSize="46px" textAlign="center" py={3}>
                {text}
            </Typography>
            <Typography
                variant="h4"
                fontSize="12px"
                letterSpacing="1.5px"
                textAlign="center"
                width="80px"
            >
                {subtext}
            </Typography>
        </Box>
    );
};

export default InfoTile;
