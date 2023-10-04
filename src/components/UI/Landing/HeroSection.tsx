"use client";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner1 from "@/assets/svgs/banner1.svg";

import { Bar } from "@/components";

const HeroSection = () => {
    const heroStyle = {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset -40em 0em 15em -10em rgba(0, 0, 0, 0.76)",
    };
    return (
        <Grid
            container
            style={heroStyle}
            textAlign="right"
            pr={0.5}
            sx={{ postion: "relative" }}
        >
            <Grid
                item
                container
                direction="column"
                display="flex"
                alignItems="end"
                xs={12}
                md={4}
                p={2}
                spacing={2}
            >
                <Grid item>
                    <Typography variant="h1">
                        SAN DIEGO LIMOUSINE SERVICE
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" maxWidth={400}>
                        Offering luxury transportation options for any occasion.
                        We have a vehicle to fit your needs, from stylish
                        limousines to spacious party buses. Our professional
                        chauffeurs have local knowledge and provide top-notch
                        service to make your experience unforgettable.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" maxWidth={400}>
                        So choose us for an elegant and memorable transportation
                        experience.
                    </Typography>
                </Grid>
            </Grid>
            <Bar count={24} filled={0} />
            <Image
                src={banner1}
                alt="hero"
                fill
                priority
                quality={100}
                style={{
                    objectFit: "cover",
                    zIndex: -1,
                }}
            />
        </Grid>
    );
};

export default HeroSection;
