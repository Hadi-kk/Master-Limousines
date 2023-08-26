"use Client";
import { InfoTile } from "@/components";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const customers = [
    "Evofem Biosciences",
    "General Atomics",
    "Cadence Travel",
    "One Call Medical",
    "Cohn Restaurant Group",
    "Diageo Beer Company",
    "ETA Executive Services",
    "Allied Crew Transportation",
    "Southern Wine & Spirits",
    "Showtime University of California San Diego",
    "Texas Roadhouse",
    "Awaken Church",
    "Toyota",
    "DJO Global",
    "Stryker",
    "Jacobs Investment Company LLC",
    "Crest Beverage",
    "Bo-Beau Kitchen & Bar",
    "Corvette Diner Blarney Stone Pub",
    "Courtesy Chevrolet",
    "John Boggs & Associates",
    "San Diego State University",
    "Sycuan Casino",
    "Russell Westbrook Enterprises",
    "Eddie V's",
    "Chick-Fil-A",
    "Ronald McDonald House",
    "Lexus Qualtech",
    "Frosch",
    "Discount Tire",
    "Procopio Cory Hargreaves & Savitch LLP",
    "Travelworld International Group",
    "Billy Gene Marketing INC",
    "Higgs Fletcher and Mack",
    "Digitech",
    "iHeart Radio",
    "Make a Wish Foundation Qualtech",
    "Frosch",
    "Discount Tire",
    "Procopio Cory Hargreaves & Savitch LLP",
    "Travelworld International Group",
    "Billy Gene Marketing INC",
    "Higgs Fletcher and Mack",
    "Digitech",
    "iHeart Radio",
    "Make a Wish Foundation",
    "Pacific Wine & Spirits",
    "Jeld-Wen Inc.",
    "San Diego Humane Society",
    "BioAtla",
    "Jägermeister",
    "ForeViva Medical Clinique",
    "Carey Meetings & Events",
    "Regal Entertainment Group",
    "Mercedes Benz",
    "Callaway Golf Odyssey",
];

const about = () => {
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
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };

    const smallBox = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "27vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };

    return (
        <>
            <Box style={heroStyle} textAlign="center" px={5}>
                <Stack
                    maxWidth={500}
                    height="80vh"
                    spacing={5}
                    py={15}
                    px={5}
                    sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <Typography variant="h1">WHY US?</Typography>
                    <Typography variant="body1">
                        At Masterpiece Limousine, we understand that when it
                        comes to transportation, our clients expect nothing but
                        the best. That's why we're dedicated to providing the
                        highest quality services that prioritize great customer
                        service, reliability, and safety.
                    </Typography>
                </Stack>
            </Box>

            <Grid container style={blankbox}>
                <Grid
                    item
                    xs={12}
                    md={5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 35,
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
                            <Typography variant="body1" textAlign="center">
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
                            <Typography variant="body1" textAlign="center">
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
                            <Typography variant="body1" textAlign="center">
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
            </Grid>

            <Box
                style={blankbox}
                sx={{ justifyContent: "right !important" }}
                textAlign="right"
                px={5}
            >
                <Stack maxWidth={1000} spacing={2}>
                    <Typography variant="h1" maxWidth={1000} pl={20}>
                        QUALIFIED CHAUFFEURS
                    </Typography>
                    <Typography variant="body1">
                        At Masterpiece Limousine we understand that
                        transportation is more than just getting from one place
                        to another, and we strive to provide our customers with
                        the highest level of service possible. That's why we
                        carefully select and train our chauffeurs to deliver
                        excellent customer service, reliability, safety, and
                        comfort.
                    </Typography>
                    <Typography variant="body1">
                        Our chauffeurs undergo thorough background checks and
                        rigorous training to meet our strict standards. They are
                        knowledgeable about the San Diego area and committed to
                        providing a smooth and enjoyable ride. Whether you're
                        traveling to or from the airport, celebrating a special
                        occasion, or going on a group excursion, our chauffeurs
                        are dedicated to making your transportation experience
                        positive.
                    </Typography>
                    <Typography variant="body1">
                        At Masterpiece Limousine, customer satisfaction and
                        safety are our top priorities. We go above and beyond to
                        ensure you have a pleasant and stress-free experience
                        while in our care. Our fleet of luxury vehicles is
                        well-maintained and equipped with the latest technology
                        to ensure your safety and comfort.
                    </Typography>
                    <Typography variant="body1">
                        Experience the difference with Masterpiece Limousine,
                        where luxury meets unparalleled service.
                    </Typography>

                    <Typography
                        variant="h3"
                        fontSize="32px"
                        textAlign="center"
                        pt={3}
                        width={700}
                    >
                        Contact us today to book your transportation needs and
                        indulge in the ultimate luxury transportation
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
            </Box>

            <Grid
                container
                sx={{
                    backgroundImage: `url('/customersbg.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textShadow: "0px 4px 4px 0px #00000040",
                }}
            >
                <Grid item>
                    <Typography variant="h3">
                        Our prized customer base
                    </Typography>
                </Grid>
                <Grid item>
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        px={5}
                    >
                        {customers.map((customer, index) => {
                            return (
                                <Typography
                                    variant="h5"
                                    fontSize="13px"
                                    letterSpacing="2.4px"
                                    key={index}
                                    width="15%"
                                    px="8px"
                                    marginBottom="16px"
                                    textAlign="center"
                                >
                                    {customer}
                                </Typography>
                            );
                        })}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default about;
