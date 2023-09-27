import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SUV from "@/assets/pngs/SUV.png";
import { Bar } from "@/components";

const Section2 = () => {
    const heroStyle = {
        minHeight: "220vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        zIndex: 10,
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };

    interface infoPictureProps {
        title: string;
        picture: string;
        description: string;
    }

    const InfoPicture = (props: infoPictureProps) => {
        const { title, picture, description } = props;
        return (
            <Grid
                container
                display="flex"
                justifyContent="center"
                // alignItems="center"
            >
                <Grid
                    item
                    mb={2}
                    display="flex"
                    alignItems="center"
                    sx={{ height: 60 }}
                >
                    <Typography
                        variant="h4"
                        fontSize="14px"
                        lineHeight="18px"
                        letterSpacing="0.4em"
                        sx={{
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            maxWidth: 200,
                        }}
                    >
                        {title}
                    </Typography>
                </Grid>

                <Grid
                    item
                    container
                    display="flex"
                    justifyContent="end"
                    alignItems="end"
                    sx={{ position: "relative", height: 470 }}
                >
                    <Grid item zIndex={10}>
                        <Typography
                            variant="body1"
                            fontSize="14px"
                            lineHeight="18px"
                            sx={{ maxWidth: 300 }}
                        >
                            {description}
                        </Typography>
                    </Grid>

                    <Image
                        src={picture}
                        alt="picture"
                        fill
                        style={{
                            objectFit: "cover", // cover, contain, none
                            zIndex: -1,
                        }}
                    />
                    {/* Top shadow */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "140px", // Adjust the height as needed
                            background:
                                "linear-gradient(180deg, #2189B7 0%, rgba(217, 217, 217, 0.00) 100%)",
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
                                "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.00) 100%)",
                            zIndex: 1,
                        }}
                    />
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid
            container
            sx={{ position: "relative" }}
            p={8}
            pr={0.5}
            style={heroStyle}
        >
            <Image
                src={SUV}
                alt="Cadillac"
                fill
                placeholder="blur"
                quality={100}
                style={{
                    objectFit: "contain", // cover, contain, none
                    objectPosition: "bottom right",
                    zIndex: -1,
                }}
            />
            <Grid item container>
                <Grid
                    item
                    container
                    textAlign="center"
                    columnGap={2}
                    md={11}
                    sm={12}
                >
                    <Grid item md={2.5}>
                        <InfoPicture
                            title="EXCEPTIONAL CUSTOMER SERVICE"
                            picture="./support.svg"
                            description="Masterpiece Limousine is dedicated to providing our clients with the highest level of service, ensuring a smooth and enjoyable transportation experience."
                        />
                    </Grid>
                    <Grid item md={2.5}>
                        <InfoPicture
                            title="RELIABILITY"
                            picture="./headlight.svg"
                            description="We are committed to being punctual and dependable, ensuring our clients arrive at their destination on time and with minimal stress."
                        />
                    </Grid>
                    <Grid item md={2.5}>
                        <InfoPicture
                            title="SAFETY"
                            picture="./airbag.svg"
                            description="The safety of our clients is our top priority. We only hire qualified and experienced chauffeurs trained in safe driving practices and knowledgeable about the Southern California region."
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    md={1}
                    sm={0}
                    display="flex"
                    justifyContent="end"
                    alignItems="end"
                >
                    <Bar count={24} filled={3} />
                </Grid>
            </Grid>
            <Grid item container>
                <Grid
                    item
                    container
                    direction="column"
                    textAlign="left"
                    spacing={2}
                    sm={12}
                    md={11}
                >
                    <Grid item>
                        <Typography variant="h3" maxWidth={500}>
                            Don't settle for anything less than the best!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" maxWidth={500}>
                            Elevate your next event with the ultimate experience
                            of luxury, safety, and reliability with Masterpiece
                            Limousine. Our exceptional customer service and
                            affordable prices are unmatched, making every trip
                            unforgettable. Whether it's a wedding, corporate
                            event, or a night out on the town, we've got you
                            covered. Don't wait any longer; contact us today and
                            book your luxury transportation!
                        </Typography>
                    </Grid>
                    <Grid item mt={2}>
                        <Button
                            variant="contained"
                            sx={{
                                width: "200px",
                            }}
                        >
                            RESERVE NOW
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    item
                    md={1}
                    sm={0}
                    display="flex"
                    justifyContent="end"
                    alignItems="end"
                >
                    <Bar count={24} filled={6} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Section2;
