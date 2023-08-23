"use Client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import banner1 from "@/assets/svgs/banner1.svg";

const Hero = () => {
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
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    };
    return (
        <>
            <Box style={heroStyle} textAlign="right" px={5}>
                <Stack maxWidth={500}>
                    <Typography variant="h1">
                        San Diego Limousine Service
                    </Typography>
                    <Typography variant="body1">
                        Offering luxury transportation options for any occasion.
                        We have a vehicle to fit your needs, from stylish
                        limousines to spacious party buses. Our professional
                        chauffeurs have local knowledge and provide top-notch
                        service to make your experience unforgettable. So choose
                        us for an elegant and memorable transportation
                        experience.
                    </Typography>
                </Stack>
            </Box>
        </>
    );
};

export default Hero;
