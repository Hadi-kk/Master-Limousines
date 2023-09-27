"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import banner1 from "@/assets/svgs/banner1.svg";
import { Bar } from "@/components";

const HeroSection = () => {
    const heroStyle = {
        backgroundImage: `url('/banner1.svg')`,
        // backgroundImage: `url('../assets/svgs/banner1.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };
    return (
        <>
            <Box style={heroStyle} textAlign="right" pl={5} pr={0.5}>
                <Stack maxWidth={500} spacing={1} pr={2}>
                    <Typography variant="h1">
                        SAN DIEGO LIMOUSINE SERVICE
                    </Typography>
                    <Typography variant="body1">
                        Offering luxury transportation options for any occasion.
                        We have a vehicle to fit your needs, from stylish
                        limousines to spacious party buses. Our professional
                        chauffeurs have local knowledge and provide top-notch
                        service to make your experience unforgettable.
                    </Typography>
                    <Typography variant="body1">
                        So choose us for an elegant and memorable transportation
                        experience.
                    </Typography>
                </Stack>
                <Bar count={24} filled={0} />
            </Box>
        </>
    );
};

export default HeroSection;
