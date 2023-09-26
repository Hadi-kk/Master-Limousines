"use client";
import { InfoTile } from "@/components";
import { useRef } from "react";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { SlArrowDown } from "react-icons/sl";

const customers = [
    "EVOFEM BIOSCIENCES",
    "GENERAL ATOMICS",
    "CADENCE TRAVEL",
    "ONE CALL MEDICAL",
    "COHN RESTAURANT GROUP",
    "DIAGEO BEER COMPANY",
    "ETA EXECUTIVE SERVICES",
    "ALLIED CREW TRANSPORTATION",
    "SOUTHERN WINE & SPIRITS",
    "SHOWTIME",
    "UNIVERSITY OF CALIFORNIA SAN DIEGO",
    "TEXAS ROADHOUSE",
    "AWAKEN CHURCH",
    "TOYOTA",
    "DJO GLOBAL",
    "STRYKER",
    "JACOBS INVESTMENT COMPANY LLC",
    "CREST BEVERAGE",
    "BO-BEAU KITCHEN & BAR",
    "CORVETTE DINER ",
    "BLARNEY STONE PUB",
    "COURTESY CHEVROLET",
    "JOHN BOGGS & ASSOCIATES",
    "SAN DIEGO STATE UNIVERSITY",
    "SYCUAN CASINO",
    "RUSSELL WESTBROOK ENTERPRISES",
    "EDDIE V'S",
    "CHICK-FIL-A",
    "RONALD MCDONALD HOUSE",
    "LEXUS ",
    "QUALTECH",
    "FROSCH",
    "DISCOUNT TIRE",
    "PROCOPIO CORY HARGREAVES & SAVITCH LLP",
    "TRAVELWORLD INTERNATIONAL GROUP",
    "BILLY GENE MARKETING INC",
    "HIGGS FLETCHER AND MACK",
    "DIGITECH",
    "IHEART RADIO",
    "MAKE A WISH FOUNDATION",
    "PROXIMO SPIRITS",
    "SLATER'S 50/50",
    "THE DANA HOTEL",
    "SANDBAR",
    "QUALCOMM",
    "AMERICAN WINE & SPIRITS",
    "JACOBS AND CUSHMAN SAN DIEGO FOOD BANK",
    "CARTOON NETWORK & ADULT SWIM",
    "STATE FARM INSURANCE",
    "SUNTRUST BANK",
];

const columnCount: number = 5; // Number of columns

const chunkArray = (arr: string[], size: number): string[][] => {
    const chunkedArray: string[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
};

const columns: string[][] = chunkArray(
    customers,
    Math.ceil(customers.length / columnCount)
);

const About = () => {
    const heroStyle = {
        backgroundImage: `url('/aboutbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };

    const blankbox = {
        backgroundImage: `url('/chauffeur.png')`,
        backgroundSize: "contain",
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };

    const smallBox = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const handleScrollTo = () => {
        // Scroll to the "QUALIFIED CHAUFFEURS" section
        scrollRef.current?.scrollIntoView({
            behavior: "smooth", // You can use "auto" for instant scrolling
        });
    };

    return (
        <>
            <Grid container style={heroStyle}>
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    rowGap={6}
                    sx={{
                        maxWidth: "35vw",
                        height: "80vh",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(2px)",
                    }}
                >
                    <Grid item>
                        <Typography variant="h1">WHY US?</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            sx={{ maxWidth: "24vw", lineHeight: "normal" }}
                        >
                            At Masterpiece Limousine, we understand that when it
                            comes to transportation, our clients expect nothing
                            but the best. That's why we're dedicated to
                            providing the highest quality services that
                            prioritize great customer service, reliability, and
                            safety.
                        </Typography>
                    </Grid>
                    <Grid item mt={2}>
                        <IconButton onClick={handleScrollTo}>
                            <SlArrowDown color="#fff" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={blankbox}>
                <Grid
                    item
                    xs={12}
                    md={5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 10,
                        alignItems: "center",
                    }}
                >
                    <InfoTile text="9000" subtext="HAPPY CUSTOMERS" />
                    <InfoTile text="12" subtext="LUXARY LIMOS" />
                    <InfoTile text="900K" subtext="MILES" />
                    <InfoTile text="30" subtext="QUALIFIED CHAUFFEURS" />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Stack alignItems="center">
                        <Box
                            style={smallBox}
                            sx={{ backgroundImage: `url('/about1.svg')` }}
                        >
                            <Typography
                                variant="body1"
                                textAlign="center"
                                sx={{ maxWidth: "550px" }}
                            >
                                Our extensive range of luxury vehicles,
                                including traditional limousines and spacious
                                SUV limos, can accommodate groups of any size.
                                From special occasions like weddings and
                                Quinceañeras to corporate events or airport
                                transportation, we have the expertise to provide
                                you with the perfect ride.
                            </Typography>
                        </Box>
                        <Box
                            style={smallBox}
                            sx={{ backgroundImage: `url('/about2.svg')` }}
                        >
                            <Typography
                                variant="body1"
                                textAlign="center"
                                sx={{ maxWidth: "550px" }}
                            >
                                We take pride in our commitment to customer
                                satisfaction, trust, and reliability. Our
                                professionally trained drivers are always ready
                                to go above and beyond to make your experience
                                with us unforgettable. With our 24/7
                                availability, you can trust that we'll be there
                                whenever you need us.
                            </Typography>
                        </Box>
                        <Box
                            style={smallBox}
                            sx={{ backgroundImage: `url('/about3.svg')` }}
                        >
                            <Typography
                                variant="body1"
                                textAlign="center"
                                sx={{ maxWidth: "550px" }}
                            >
                                At Masterpiece Limousine, we offer various
                                transportation services, including Temecula wine
                                tours, anniversary celebrations, bachelor and
                                bachelorette parties, and more.
                            </Typography>
                        </Box>
                        <Typography
                            variant="h3"
                            fontSize="32px"
                            textAlign="center"
                            pt={3}
                            width={700}
                        >
                            Whatever your transportation needs may be, we've got
                            you covered.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        justifyContent: "right !important",
                        textAlign: "right ",
                    }}
                    px={5}
                    ref={scrollRef}
                >
                    <Stack
                        py={8}
                        spacing={2}
                        maxWidth={1000}
                        sx={{ marginLeft: "auto" }}
                    >
                        <Typography variant="h1" maxWidth={1000} pl={20}>
                            QUALIFIED CHAUFFEURS
                        </Typography>
                        <Typography variant="body1">
                            At Masterpiece Limousine we understand that
                            transportation is more than just getting from one
                            place to another, and we strive to provide our
                            customers with the highest level of service
                            possible. That's why we carefully select and train
                            our chauffeurs to deliver excellent customer
                            service, reliability, safety, and comfort.
                        </Typography>
                        <Typography variant="body1">
                            Our chauffeurs undergo thorough background checks
                            and rigorous training to meet our strict standards.
                            They are knowledgeable about the San Diego area and
                            committed to providing a smooth and enjoyable ride.
                            Whether you're traveling to or from the airport,
                            celebrating a special occasion, or going on a group
                            excursion, our chauffeurs are dedicated to making
                            your transportation experience positive.
                        </Typography>
                        <Typography variant="body1">
                            At Masterpiece Limousine, customer satisfaction and
                            safety are our top priorities. We go above and
                            beyond to ensure you have a pleasant and stress-free
                            experience while in our care. Our fleet of luxury
                            vehicles is well-maintained and equipped with the
                            latest technology to ensure your safety and comfort.
                        </Typography>
                        <Typography variant="body1">
                            Experience the difference with Masterpiece
                            Limousine, where luxury meets unparalleled service.
                        </Typography>

                        <Typography
                            variant="h3"
                            fontSize="32px"
                            textAlign="center"
                            pt={5}
                            width={700}
                        >
                            Contact us today to book your transportation needs
                            and indulge in the ultimate luxury transportation
                            experience.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                width: "200px",
                                height: "50px",
                                // alignSelf: "center",
                                marginLeft: "240px !important",
                            }}
                        >
                            RESERVE NOW
                        </Button>
                    </Stack>
                </Grid>
            </Grid>

            <Grid
                container
                gap={5}
                sx={{
                    backgroundImage: `url('/customersbg.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    justifyContent: "center",
                    color: "white",
                    textShadow: "0px 4px 4px 0px #00000040",
                    position: "relative",
                    px: "10px",
                    py: "40px",
                }}
            >
                {/* Top shadow */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "140px", // Adjust the height as needed
                        background:
                            "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.949544783733806) 95%)",
                        zIndex: 1,
                    }}
                />

                {/* Bottom shadow */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "140px", // Adjust the height as needed
                        background:
                            "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 92.75%)",
                        zIndex: 1,
                    }}
                />
                <Grid item xs={12} sx={{ zIndex: 2 }}>
                    <Typography variant="h3" textAlign="center" gutterBottom>
                        Our prized customer base
                    </Typography>
                </Grid>
                {columns.map((column, columnIndex) => (
                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        md={2}
                        mb={4}
                        key={columnIndex}
                        spacing={4.5}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ zIndex: 2 }}
                    >
                        {column.map((customer, index) => (
                            <Grid item xs={12} key={index}>
                                <Typography
                                    variant="h5"
                                    fontSize="12px"
                                    letterSpacing="2px"
                                    textAlign="center"
                                    key={index}
                                >
                                    {customer}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default About;
