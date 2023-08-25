"use Client";
import { Box, Stack, Typography } from "@mui/material";

const events = () => {
    const heroStyle2 = {
        backgroundImage: `url('/eventsbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };
    return (
        <>
            <Box style={heroStyle2} textAlign="center" px={5}>
                <Stack spacing={5}>
                    <Typography variant="h1">THE LATEST</Typography>
                    <Typography variant="h3">
                        Masterpiece Limousines in action.
                    </Typography>
                </Stack>
            </Box>
        </>
    );
};

export default events;
