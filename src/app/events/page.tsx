"use client";
import { EventCard } from "@/components";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import EventAccordian from "./EventAccordian";

const startDate = new Date(2019, 0);

const eventsList = [
    {
        picture: "./event1.svg",
        title: "COMIC-CON SDCC 2016 LIMOUSINE RENTAL SERVICE SAN DIEGO",
        desription:
            "Looking for a simple and stylish way in and out of the convention center this year? Make it easier on yourself for San Diego Comic Con 2016 and avoid parking or taking the bus or train ... read more",
        stamp: "20 Jul 2017/By masterlimo",
    },
    {
        picture: "./event2.svg",
        title: "THINGS TO DO IN SAN DIEGO ON THE 4TH OF JULY",
        desription:
            "There are many things that you can do on the 4th of July weekend that can make it memorable. One of the things that you need to have a good time is find the perfect ride. We can ... read more",
        stamp: "20 Jul 2017/By masterlimo",
    },
    {
        picture: "./event3.svg",
        title: "CHAMPAGNE, JAZZ AND LIMOUSINES IN TEMECULA",
        desription:
            "Few can disagree that there is nothing classier than this combination: Champagne, Jazz and Limousines. Luckily, folks near Temecula Wine Country can ... read more",
        stamp: "20 Jul 2017/By masterlimo",
    },
    {
        picture: "./event4.svg",
        title: "COMIC-CON SDCC 2016 LIMOUSINE RENTAL SERVICE SAN DIEGO",
        desription:
            "Looking for a simple and stylish way in and out of the convention center this year? Make it easier on yourself for San Diego Comic Con 2016 and avoid parking or taking the bus or train ... read more",
        stamp: "20 Jul 2017/By masterlimo",
    },
    {
        picture: "./event5.svg",
        title: "CHAMPAGNE, JAZZ AND LIMOUSINES IN TEMECULA",
        desription:
            "Few can disagree that there is nothing classier than this combination: Champagne, Jazz and Limousines. Luckily, folks near Temecula Wine Country can ... read more",
        stamp: "20 Jul 2017/By masterlimo",
    },
];

const events = () => {
    const heroStyle2 = {
        backgroundImage: `url('/eventsbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "170vh",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item style={heroStyle2} xs={12} pt={20}>
                <Stack spacing={5}>
                    <Typography variant="h1" textAlign="center">
                        THE LATEST
                    </Typography>
                    <Typography variant="h3">
                        Masterpiece Limousines in action.
                    </Typography>
                </Stack>
            </Grid>
            <Grid
                item
                container
                direction="row"
                columnSpacing={4}
                mt={-90}
                mb={10}
                px={2}
            >
                <Grid item md={3}>
                    search
                    <Box
                        p={4}
                        pt={1}
                        my={3}
                        sx={{ backgroundColor: " rgba(33, 137, 183, 0.80)" }}
                    >
                        <Stack spacing={4}>
                            <Typography
                                variant="h4"
                                fontSize="14px"
                                textAlign="center"
                            >
                                TOP POSTS
                            </Typography>
                            {eventsList.map((eventItem, index) => {
                                return (
                                    <Stack
                                        direction="row"
                                        spacing={5}
                                        key={index * 100}
                                    >
                                        <Typography
                                            variant="h1"
                                            fontSize="64px"
                                        >
                                            {" "}
                                            {index + 1}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            fontSize="12px"
                                            maxWidth={200}
                                        >
                                            {eventItem.title}
                                        </Typography>
                                    </Stack>
                                );
                            })}
                        </Stack>
                    </Box>
                    <EventAccordian startDate={startDate} />
                </Grid>

                <Grid
                    item
                    container
                    display="flex"
                    flexWrap="wrap"
                    gap={4}
                    justifyContent="center"
                    md={9}
                >
                    {eventsList.map((eventItem, index) => {
                        return (
                            <Grid item key={index}>
                                <EventCard
                                    picture={eventItem.picture}
                                    title={eventItem.title}
                                    description={eventItem.desription}
                                    stamp={eventItem.stamp}
                                    type="spaced"
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default events;
