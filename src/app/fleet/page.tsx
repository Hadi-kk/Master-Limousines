import { Box, Stack, Typography } from "@mui/material";

const fleet = () => {
    const heroStyle2 = {
        backgroundImage: `url('/fleetbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };
    return (
        <>
            <Box style={heroStyle2} textAlign="center" px={5}>
                <Stack spacing={5} direction="row">
                    <Typography variant="h1">THE FLEET</Typography>
                    <Typography variant="body1">
                        Experience safe and reliable Luxury Ground
                        Transportation with our professional chauffeurs at
                        Masterpiece Limousine. We are fully licensed and insured
                        for your peace of mind, and our fleet of vehicles is
                        perfect for any occasion, whether it's a corporate event
                        or a special occasion. Let us take care of the driving
                        while you sit back, relax, and enjoy the comfort and
                        sophistication of our luxury ground transportation
                        services.
                    </Typography>
                </Stack>
            </Box>
        </>
    );
};

export default fleet;
