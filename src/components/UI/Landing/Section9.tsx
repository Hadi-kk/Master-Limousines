"use client";
import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    Stack,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PersonalisedCadi from "@/assets/svgs/PersonalisedCadi.svg";
import Image from "next/image";
import quotation from "@/assets/svgs/quotation.svg";
import Carousel from "react-multi-carousel";
import { Bar } from "@/components";

interface ReviewType {
    description: String;
    by: String;
}

const reviews = [
    {
        description:
            " “We have used Masterpiece Limos for a while now and have enjoyed the prompt services and great hospitality that we receive not only from the owner but the drivers as well. This limo service is highly recommended, for any special or fun occasion and we wouldn’t use anyone else.”",
        by: "MIKE & MONICA BRADBURN",
    },
    {
        description:
            "“I have experienced many limo rides… None of which have provided me and my guests with outstanding service and a smooth ride like Masterpiece. I definitely recommend and will continue to use Masterpiece Limousine.”",
        by: "MARC BAZA",
    },
    {
        description:
            "“I have experienced many limo rides… None of which have provided me and my guests with outstanding service and a smooth ride like Masterpiece. I definitely recommend and will continue to use Masterpiece Limousine.”",
        by: "MARC BAZA",
    },
];

const CustomTextField = styled(TextField)`
    & .MuiInput-underline:before {
        border-bottom-color: white; // Color when inactive and empty
    }

    &:hover:not(.Mui-disabled) .MuiInput-underline:before {
        border-bottom-color: white; // Color when hovered and empty
    }
    font-size: 12px;
`;

const ReviewCard = ({ description, by }: ReviewType) => {
    return (
        <Grid
            container
            direction="column"
            // justifyContent="center"
            alignItems="center"
            sx={{ background: "rgba(56, 59, 66, 0.70)" }}
            width="max-content"
            pt={4}
            pb={5}
            gap={3}
        >
            <Grid
                item
                display="flex"
                flexDirection="row"
                // justifyContent="center"
                alignItems="center"
                px={4}
            >
                <Box
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                    }}
                ></Box>
                <Divider
                    sx={{
                        minWidth: 300,
                        borderColor: "#fff",
                        borderBottomWidth: 3,
                        mt: 8,
                        mx: -5,
                    }}
                />
                <Image src={quotation} alt="qutation marks" height={40} />
            </Grid>
            <Grid item>
                <Typography
                    variant="body1"
                    fontSize="16px"
                    textAlign="center"
                    maxWidth={370}
                    height={120}
                    lineHeight="20px"
                >
                    {description}
                </Typography>
            </Grid>
            <Grid
                item
                container
                alignItems="center"
                justifyContent="right"
                gap={1}
            >
                <Grid item>
                    <Typography
                        variant="h5"
                        fontSize="10px"
                        letterSpacing="1px"
                        color="error"
                        textAlign="right"
                    >
                        {by}
                    </Typography>
                </Grid>
                <Grid item>
                    <Divider
                        sx={{
                            minWidth: 150,
                            borderColor: "#fff",
                            borderBottomWidth: 3,
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 140,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,

        partialVisibilityGutter: 30,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const CustomButtonGroupAsArrows = ({ next, previous }: any) => {
    return (
        <Box display="flex" position="relative" bottom={415} left={900}>
            <IconButton onClick={previous}>
                <BsChevronLeft color="#fff" />
            </IconButton>
            <IconButton onClick={next}>
                <BsChevronRight color="#fff" />
            </IconButton>
        </Box>
    );
};

const Section9 = () => {
    const heroStyle = {
        backgroundImage: `url('/bglastsection.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "left",
        // alignItems: "center",
        minHeight: "130vh",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
        boxShadow: "inset 0em 6em 12em 0em rgb(0, 0, 0)",
    };
    return (
        <Grid container style={heroStyle} gap={20} pb={5}>
            <Grid item container p={5} gap={6}>
                <Grid
                    item
                    md={12}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        variant="h4"
                        fontSize="20px"
                        letterSpacing="8px"
                    >
                        HEAR IT FROM OUR VALUED CLIENTS
                    </Typography>
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={9.5}
                    sx={{
                        // boxShadow: "-100px 0px 10px -10px #fff inset",
                        position: "relative",
                    }}
                >
                    <Carousel
                        swipeable={true}
                        partialVisible={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        arrows={false}
                        renderButtonGroupOutside={true}
                        customButtonGroup={<CustomButtonGroupAsArrows />}
                        keyBoardControl={true}
                        transitionDuration={500}
                    >
                        {reviews.map((review, index) => {
                            return (
                                <ReviewCard
                                    key={index}
                                    description={review.description}
                                    by={review.by}
                                />
                            );
                        })}
                    </Carousel>
                    <Box />
                </Grid>
                <Grid
                    item
                    xs={1}
                    mb={15}
                    sx={{
                        boxShadow:
                            "-210px 40px 30px 60px rgba(0, 0, 0, 0.767) ",
                        zIndex: 1000000000000,
                    }}
                ></Grid>
            </Grid>
            <Grid item container>
                <Grid item container direction="row" gap={4} md={11.8}>
                    <Grid item md={8}>
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(270deg, #a72311e1 2%, rgba(33, 137, 183, 0.60) 100%)",
                            }}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            height={300}
                            pr={10}
                            py={5}
                        >
                            <Image
                                src={PersonalisedCadi}
                                alt="Personalised Caddilac"
                                height={480}
                            />
                            <Stack maxWidth={270} textAlign="right" spacing={4}>
                                <Typography variant="h3">
                                    Require a personalized package?
                                </Typography>
                                <Typography variant="body1">
                                    Get in touch about your queries and we will
                                    get back to you as soon as possible.
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            pb={1}
                        >
                            <Typography
                                variant="h4"
                                fontSize="12px"
                                letterSpacing="2px"
                            >
                                NAME:
                            </Typography>
                            <CustomTextField hiddenLabel variant="standard" />
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            pb={2}
                        >
                            <Typography
                                variant="h4"
                                fontSize="12px"
                                letterSpacing="2px"
                            >
                                EMAIL:
                            </Typography>
                            <CustomTextField hiddenLabel variant="standard" />
                        </Stack>
                        <Stack direction="row" spacing={1} pb={3}>
                            <Typography
                                variant="h4"
                                fontSize="12px"
                                letterSpacing="2px"
                            >
                                MESSAGE:
                            </Typography>
                            <CustomTextField
                                hiddenLabel
                                variant="standard"
                                multiline
                                rows={3}
                            />
                        </Stack>
                        <Button
                            color="secondary"
                            variant="contained"
                            sx={{ width: 300 }}
                        >
                            SUBMIT
                        </Button>
                    </Grid>
                </Grid>
                <Grid item md={0.16}>
                    <Bar count={24} filled={24} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Section9;
