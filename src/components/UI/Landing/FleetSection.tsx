"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import banner1 from "@/assets/svgs/banner1.svg";
import { BsChevronRight } from "react-icons/bs";

const FleetSection = () => {
    const heroStyle = {
        backgroundImage: `url('/CadillacLowest.svg')`,
        // backgroundImage: `url('../assets/svgs/banner1.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "20vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };

    return (
        <>
            <Box style={heroStyle} px={5}>
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h1">THE FLEET</Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="body1"
                            textAlign="right"
                            maxWidth={800}
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
            <Box sx={{ height: "70vh", backgroundColor: "secondary" }}>
                accordian
            </Box>
            <Box textAlign="right" px={5} sx={{ height: "10vh" }}>
                <Button endIcon={<BsChevronRight />}>VIEW ENTIRE FLEET</Button>
            </Box>
        </>
    );
};

export default FleetSection;
