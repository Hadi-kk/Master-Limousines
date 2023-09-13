import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Section2 = () => {
    const heroStyle = {
        backgroundImage: `url('/CadillacUpper.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        height: "100vh",
        display: "flex",
        alignItems: "center",
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
            <Grid container display="flex" justifyContent="center">
                <Grid item>
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
                <Image src={picture} alt="picture" height={400} width={250} />
                {/* <Grid
                    item
                    sx={{
                        background: " linear-gradient(#2189B7 ,#218ab70,#000",
                    }}
                >
                    <Image
                        src={picture}
                        alt="picture"
                        height={400}
                        width={250}
                    />
                </Grid> */}
                <Grid item>
                    <Typography
                        variant="body1"
                        fontSize="14px"
                        lineHeight="18px"
                        sx={{ maxWidth: 300 }}
                    >
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid
            container
            style={heroStyle}
            textAlign="center"
            px={5}
            columnGap={2}
        >
            <Grid item md={2}>
                <InfoPicture
                    title="EXCEPTIONAL CUSTOMER SERVICE"
                    picture="./support.svg"
                    description="Masterpiece Limousine is dedicated to providing our clients with the highest level of service, ensuring a smooth and enjoyable transportation experience."
                />
            </Grid>
            <Grid item md={2}>
                <InfoPicture
                    title="RELIABILITY"
                    picture="./headlight.svg"
                    description="We are committed to being punctual and dependable, ensuring our clients arrive at their destination on time and with minimal stress."
                />
            </Grid>
            <Grid item md={2}>
                <InfoPicture
                    title="SAFETY"
                    picture="./airbag.svg"
                    description="The safety of our clients is our top priority. We only hire qualified and experienced chauffeurs trained in safe driving practices and knowledgeable about the Southern California region."
                />
            </Grid>
        </Grid>
    );
};

export default Section2;
