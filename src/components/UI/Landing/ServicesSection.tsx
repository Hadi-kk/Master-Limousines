"use client";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

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
}

const ServiceTile = (props: serviceTileProps) => {
    const { title, icon, description } = props;
    return (
        <Card
            sx={{
                background: " rgba(56, 59, 66, 0.20)",
                boxShadow:
                    " 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                maxWidth: "200px",
                padding: 2,
                marginBottom: 2,
            }}
        >
            <Stack alignItems={"center"} spacing={2}>
                <Typography variant="h5">{title}</Typography>
                <Image src={icon} alt="service icon" width={30} height={30} />
                <Typography
                    fontSize="13px"
                    textAlign="center"
                    lineHeight="normal"
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
        height: "100vh",
        display: "flex",
        justifyContent: "left",
        // alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };
    return (
        <Grid container style={heroStyle} textAlign="left" p={10}>
            <Grid item>
                <Stack spacing={1}>
                    <Typography variant="h1">OUR SERVICES</Typography>
                    <Typography variant="body1" maxWidth={600}>
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
                mt={-20}
            >
                <Grid item>
                    <ServiceTile
                        title="GRADUATION"
                        icon="./icons/graduation.svg"
                        description="For students, June is definitely a busy month especially when it comes to those middle school, high school and college graduations..."
                    />
                </Grid>
                <Grid item>
                    <ServiceTile
                        title="AIRPORT TRANSFER"
                        icon="./icons/drinks.svg"
                        description="Our San Diego limousine service offers the best Baja Mexico Tours for adventures such as sampling Puerto Nuevo Lobster..."
                    />
                    <ServiceTile
                        title="CASINOS"
                        icon="./icons/casino.svg"
                        description="Do you need to break free from the everyday grind even for just one night? Then make a date in San Diego..."
                    />
                </Grid>
                <Grid item mb={15}>
                    <ServiceTile
                        title="WINE TOURS"
                        icon="./icons/wine.svg"
                        description="Sit back, relax and let Masterpiece Limousine San Diego do the driving while you have a great day tasting great vintages on our Temecula Wine Tour."
                    />
                    <ServiceTile
                        title="BREWERY TOURS"
                        icon="./icons/brewery.svg"
                        description="There are many great things about San Diego, and high on the list is the vast number of local specialist breweries."
                    />
                </Grid>
                <Grid item>
                    <ServiceTile
                        title="AIRPORT TRANSFERS"
                        icon="./icons/transfers.svg"
                        description="When airport transportation in San Diego is in need, our luxury airport shuttle service leaves nothing to be desired!"
                    />
                    <ServiceTile
                        title="WEDDINGS"
                        icon="./icons/weddings.svg"
                        description="Relax and enjoy the most important and romantic day of your life with our Wedding Limousine Services in San Diego."
                    />
                    <ServiceTile
                        title="CONCERTS"
                        icon="./icons/concerts.svg"
                        description="Choose between a stretched limousine and our Hummer Limo rental to pick you and your friends up and take you to the concert."
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ServicesSection;
