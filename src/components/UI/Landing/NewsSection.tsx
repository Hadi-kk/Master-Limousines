"use client";
import { EventCard } from "@/components";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        // slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const NewsSection = () => {
    const heroStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "left",
        // alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };
    return (
        <Grid container style={heroStyle} spacing={2} textAlign="left" p={10}>
            <Grid item xs={12}>
                <Stack maxWidth={700} spacing={1}>
                    <Typography variant="h4">
                        CATCH UP ON ALL THE LATEST NEWS
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={12}>
                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={"desktop"}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-20-px"
                >
                    {eventsList.map((eventItem, index) => {
                        return (
                            <EventCard
                                key={index}
                                picture={eventItem.picture}
                                title={eventItem.title}
                                description={eventItem.desription}
                                stamp={eventItem.stamp}
                            />
                        );
                    })}
                </Carousel>
            </Grid>
        </Grid>
    );
};

export default NewsSection;
