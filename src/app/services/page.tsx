import { Box, Stack, Typography } from "@mui/material";

const services = [
    "+ GOLD KEY CONCIERGE",
    "+ AIRPORT TRANSFERS",
    "+ EXECUTIVE GROUND TRANSPORTATION",
    "+ TIJUANA/CBX AIRPORT SERVICES",
    "+ TEMECULA WINE TOURS",
    "+ WEDDING LIMOUSINE TRANSPORTATION",
    "+ SAN DIEGO BREWERY TOURS",
    "+ CONCERT LIMO SERVICES",
    "+ MEXICO LIMOUSINE TOURS",
    "+ BACHELOR & BACHELORETTE PARTIES",
    "+ SOCIAL CASINO LIMO SERVICES",
    "+ DEL MAR RACES LIMOUSINE SERVICE",
    "+ GRADUATION LIMO SERVICES",
    "+ SPORTING EVENT TRANSPORTATION",
    "+ PROM NIGHT LIMOUSINE SERVICE",
    "+ QUINCERANERA LIMOUSINE SERVICE",
    "+ NIGHTCLUB LIMO SERVICE",
    "+ SCHOOL EVEN LIMO SERVICES",
];

const Section8 = () => {
    const heroStyle = {
        backgroundImage: `url('/servicesbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150vh",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };
    return (
        <>
            <Box style={heroStyle} textAlign="left" p={5}>
                <Stack maxWidth={400} spacing={1}>
                    <Typography variant="h1">EXCLUSIVE SERVICES</Typography>
                    {services.map((service, index) => {
                        return (
                            <Typography key={index} variant="h5">
                                {service}
                            </Typography>
                        );
                    })}
                </Stack>
            </Box>
        </>
    );
};

export default Section8;
