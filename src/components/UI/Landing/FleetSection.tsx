"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BsChevronRight } from "react-icons/bs";
import FleetAccordian from "@/components/FleetAccordian";

const FleetSection = () => {
    const heroStyle = {
        backgroundColor: "#0000000",
        height: "20vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        zIndex: 100,
    };

    return (
        <>
            <Box style={heroStyle} pl={6} pr={3} mt={-18}>
                <Grid container sx={{ zIndex: 100 }}>
                    <Grid item xs={12} md={5.5}>
                        <Typography variant="h1">THE FLEET</Typography>
                    </Grid>
                    <Grid item xs={12} md={6.5}>
                        <Typography
                            variant="body1"
                            textAlign="right"
                            // maxWidth={800}
                        >
                            Experience safe and reliable Luxury Ground
                            Transportation with our professional chauffeurs at
                            Masterpiece Limousine. We are fully licensed and
                            insured for your peace of mind, and our fleet of
                            vehicles is perfect for any occasion, whether it's a
                            corporate event or a special occasion. Let us take
                            care of the driving while you sit back, relax, and
                            enjoy the comfort and sophistication of our luxury
                            ground transportation services.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: "75vh", backgroundColor: "secondary" }}>
                <FleetAccordian />
            </Box>
            <Box textAlign="right" px={5} sx={{ height: "10vh" }}>
                <Button endIcon={<BsChevronRight />}>VIEW ENTIRE FLEET</Button>
            </Box>
        </>
    );
};

export default FleetSection;
