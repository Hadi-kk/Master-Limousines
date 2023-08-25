"use Client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import banner1 from "@/assets/svgs/banner1.svg";

const Section2 = () => {
    const heroStyle = {
        backgroundImage: `url('/CadillacUpper.svg')`,
        // backgroundImage: `url('../assets/svgs/banner1.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };

    return (
        <>
            <Box style={heroStyle} textAlign="right" px={5}>
                <Stack maxWidth={500} spacing={1}>
                    <Typography variant="h1">
                        SAN DIEGO LIMOUSINE SERVICE
                    </Typography>

                    <Typography variant="body1">
                        So choose us for an elegant and memorable transportation
                        experience.
                    </Typography>
                </Stack>
            </Box>
        </>
    );
};

export default Section2;
