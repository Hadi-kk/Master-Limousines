"use client";
import { Bar } from "@/components";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";

// const servicesTileList = [
//     {
//         title: "GRADUATION",
//         icon: "./icons/graduation.svg",
//         description:
//             "For students, June is definitely a busy month especially when it comes to those middle school, high school and college graduations...",
//     },
//     {
//         title: "AIRPORT TRANSFER",
//         icon: "./icons/drinks.svg",
//         description:
//             "Our San Diego limousine service offers the best Baja Mexico Tours for adventures such as sampling Puerto Nuevo Lobster...",
//     },
//     {
//         title: "CASINOS",
//         icon: "./icons/casino.svg",
//         description:
//             "Do you need to break free from the everyday grind even for just one night? Then make a date in San Diego...",
//     },
//     {
//         title: "WINE TOURS",
//         icon: "./icons/wine.svg",
//         description:
//             "Sit back, relax and let Masterpiece Limousine San Diego do the driving while you have a great day tasting great vintages on our Temecula Wine Tour.",
//     },
//     {
//         title: "BREWERY TOURS",
//         icon: "./icons/brewery.svg",
//         description:
//             "There are many great things about San Diego, and high on the list is the vast number of local specialist breweries.",
//     },
//     {
//         title: "AIRPORT TRANSFERS",
//         icon: "./icons/transfers.svg",
//         description:
//             "When airport transportation in San Diego is in need, our luxury airport shuttle service leaves nothing to be desired!",
//     },
//     {
//         title: "WEDDINGS",
//         icon: "./icons/weddings.svg",
//         description:
//             "Relax and enjoy the most important and romantic day of your life with our Wedding Limousine Services in San Diego.",
//     },
//     {
//         title: "CONCERTS",
//         icon: "./icons/concerts.svg",
//         description:
//             "Choose between a stretched limousine and our Hummer Limo rental to pick you and your friends up and take you to the concert.",
//     },
// ];

interface serviceTileProps {
    title: string;
    icon: string;
    description: string;
    background: string;
}

const ServiceTile = (props: serviceTileProps) => {
    const { title, icon, description, background } = props;
    return (
        <Card
            sx={{
                background: background,
                boxShadow:
                    " 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                maxWidth: "200px",
                padding: 2,
                marginBottom: 2,
            }}
            className="service-card"
        >
            <Stack alignItems={"center"} spacing={2}>
                <Typography variant="h5">{title}</Typography>
                <Image src={icon} alt="service icon" width={30} height={30} />
                <Typography
                    variant="body1"
                    fontSize="13px"
                    textAlign="center"
                    lineHeight="15px"
                >
                    {description}
                </Typography>
            </Stack>
        </Card>
    );
};

const ServicesSection = () => {
    const heroStyle = {
        backgroundImage: `url('/servicesSectionBG.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "left",
        // alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };
    return (
        <Grid
            container
            style={heroStyle}
            textAlign="left"
            p={10}
            pr={0.5}
            pb={5}
        >
            <Grid item>
                <Stack spacing={1}>
                    <Typography variant="h1">OUR SERVICES</Typography>
                    <Typography variant="body1" maxWidth={550}>
                        Masterpiece Limousine provides luxury, affordable limo
                        services in San Diego and nearby areas. Our team of
                        courteous, professional staff, including drivers and
                        booking agents, prioritize your needs. Choose us for
                        top-notch limo rental services in San Diego.
                    </Typography>
                </Stack>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justifyContent="right"
                alignItems="center"
                spacing={2}
                mt={-25}
            >
                <Grid item>
                    <ServiceTile
                        title="GRADUATION"
                        icon="./icons/graduation.svg"
                        description="For students, June is definitely a busy month especially when it comes to those middle school, high school and college graduations..."
                        background="rgba(56, 59, 66, 0.20)"
                    />
                </Grid>
                <Grid item>
                    <ServiceTile
                        title="AIRPORT TRANSFER"
                        icon="./icons/drinks.svg"
                        description="Our San Diego limousine service offers the best Baja Mexico Tours for adventures such as sampling Puerto Nuevo Lobster..."
                        background="rgba(56, 59, 66, 0.40)"
                    />
                    <ServiceTile
                        title="CASINOS"
                        icon="./icons/casino.svg"
                        description="Do you need to break free from the everyday grind even for just one night? Then make a date in San Diego..."
                        background="rgba(56, 59, 66, 0.90)"
                    />
                </Grid>
                <Grid item mb={15}>
                    <ServiceTile
                        title="WINE TOURS"
                        icon="./icons/wine.svg"
                        description="Sit back, relax and let Masterpiece Limousine San Diego do the driving while you have a great day tasting great vintages on our Temecula Wine Tour."
                        background="rgba(56, 59, 66, 0.20)"
                    />
                    <ServiceTile
                        title="BREWERY TOURS"
                        icon="./icons/brewery.svg"
                        description="There are many great things about San Diego, and high on the list is the vast number of local specialist breweries."
                        background="rgba(56, 59, 66, 0.40)"
                    />
                </Grid>
                <Grid item>
                    <ServiceTile
                        title="AIRPORT TRANSFERS"
                        icon="./icons/transfers.svg"
                        description="When airport transportation in San Diego is in need, our luxury airport shuttle service leaves nothing to be desired!"
                        background="rgba(56, 59, 66, 0.20)"
                    />
                    <ServiceTile
                        title="WEDDINGS"
                        icon="./icons/weddings.svg"
                        description="Relax and enjoy the most important and romantic day of your life with our Wedding Limousine Services in San Diego."
                        background="rgba(56, 59, 66, 0.50)"
                    />
                    <ServiceTile
                        title="CONCERTS"
                        icon="./icons/concerts.svg"
                        description="Choose between a stretched limousine and our Hummer Limo rental to pick you and your friends up and take you to the concert."
                        background="rgba(56, 59, 66, 0.90)"
                    />
                </Grid>
                <Grid item ml={8}>
                    <Bar count={24} filled={13} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Box textAlign="right" pt={4} pr={9}>
                    <Button
                        sx={{ fontSize: "16px" }}
                        endIcon={<BsChevronRight />}
                    >
                        VIEW ALL SERVICES
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ServicesSection;
