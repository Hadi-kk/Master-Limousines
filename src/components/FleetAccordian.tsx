"use client";
import theme from "@/utils/theme";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const fleet = [
    {
        picture: "./accordian1.png",
        title: "Mercedes Sprinter Limousine",
        description:
            "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events.",
    },
    {
        picture: "./accordian2.png",
        title: "Mercedes Sprinter Executive",
        description:
            "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events.",
    },
    {
        picture: "./accordian3.png",
        title: "Executive Sedan",
        description:
            "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events.",
    },
    {
        picture: "./accordian4.png",
        title: "Luxury Stretch Limousine",
        description:
            "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events.",
    },
    {
        picture: "./accordian5.png",
        title: "Hummer Stretch Limousine",
        description:
            "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events.",
    },
    {
        picture: "./accordian6.png",
        title: "Executive SUV",
        description:
            "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events.",
    },
];

const FleetAccordian = () => {
    const [selectedIndex, setSelectedIndex] = useState(2);

    const handleSelect = (index: any) => {
        setSelectedIndex(index);
    };

    return (
        <Grid container direction="row">
            {fleet.map((car, index) => {
                return (
                    <Grid
                        key={index}
                        xs={selectedIndex === index ? 7 : 1}
                        item
                        sx={{
                            backgroundImage: `url(${car.picture})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            cursor: "pointer",
                            boxShadow: `inset -50px 300px 100px -100px ${
                                selectedIndex === index
                                    ? "#a72311dd"
                                    : "#218ab7da"
                            }`,
                            height: "70vh",
                        }}
                        style={{
                            transition: theme.transitions.create("all", {
                                easing: theme.transitions.easing.easeInOut,
                                duration: theme.transitions.duration.standard,
                            }),
                        }}
                        onClick={() => handleSelect(index)}
                    >
                        {selectedIndex === index ? (
                            <Box
                                display="flex"
                                flexDirection="column"
                                p={4}
                                sx={{ height: "70vh" }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{ maxWidth: 100 }}
                                    gutterBottom
                                >
                                    {car.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    fontSize="14px"
                                    sx={{ maxWidth: 550 }}
                                >
                                    {car.description}
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignSelf="center"
                                    position="relative"
                                    mt="auto"
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            py: 1.5,
                                            px: 4,
                                            fontSize: "10px",
                                        }}
                                    >
                                        BOOK THIS RIDE
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            py: 1.5,
                                            px: 4,
                                            fontSize: "10px",
                                        }}
                                    >
                                        LEARN MORE
                                    </Button>
                                </Stack>
                            </Box>
                        ) : null}
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default FleetAccordian;
