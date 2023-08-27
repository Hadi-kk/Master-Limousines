"use Client";
import { Box, Stack, Typography } from "@mui/material";

const NewsSection = () => {
    const heroStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "left",
        // alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };
    return (
        <>
            <Box style={heroStyle} textAlign="left" p={10}>
                <Stack maxWidth={700} spacing={1}>
                    <Typography variant="h4">
                        CATCH UP ON ALL THE LATEST NEWS
                    </Typography>
                </Stack>
            </Box>
        </>
    );
};

export default NewsSection;