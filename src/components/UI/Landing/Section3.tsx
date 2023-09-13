"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import banner1 from "@/assets/svgs/banner1.svg";

const Section3 = () => {
    const heroStyle2 = {
        backgroundImage: `url('/CadillacLower.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };
    return (
        <>
            <Box style={heroStyle2} textAlign="left" px={5}>
                <Stack maxWidth={500} spacing={1}>
                    <Typography variant="h3">
                        Don't settle for anything less than the best!
                    </Typography>
                    <Typography variant="body1">
                        Elevate your next event with the ultimate experience of
                        luxury, safety, and reliability with Masterpiece
                        Limousine. Our exceptional customer service and
                        affordable prices are unmatched, making every trip
                        unforgettable. Whether it's a wedding, corporate event,
                        or a night out on the town, we've got you covered. Don't
                        wait any longer; contact us today and book your luxury
                        transportation!
                    </Typography>
                    <Button variant="contained" sx={{ width: "200px" }}>
                        RESERVE NOW
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

export default Section3;
