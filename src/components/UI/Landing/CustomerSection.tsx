"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import barneystone from "@/assets/svgs/barneystone.svg";
import bigatla from "@/assets/svgs/bigatla.svg";
import cohrestauraunt from "@/assets/svgs/cohrestauraunt.svg";
import djoglobal from "@/assets/svgs/djoglobal.svg";
import etaservices from "@/assets/svgs/etaservices.svg";
import eyofem from "@/assets/svgs/eyofem.svg";
import generalatomics from "@/assets/svgs/generalatomics.svg";
import lexus from "@/assets/svgs/lexus.svg";
import makeawish from "@/assets/svgs/makeawish.svg";
import sandiegouni from "@/assets/svgs/sandiegouni.svg";
import showtime from "@/assets/svgs/showtime.svg";
import mercbenz from "@/assets/svgs/merc-benz.svg";
import qualcom from "@/assets/svgs/qualcom.svg";
import odyssey from "@/assets/svgs/odyssey.svg";
import { BsChevronRight } from "react-icons/bs";

const CustomerSection = () => {
    const heroStyle2 = {
        height: "100vh",
        display: "flex",
        justifyContent: "center !important",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };
    const imageStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <>
            <Grid container style={heroStyle2} px={5}>
                <Grid item>
                    <Typography variant="h3" textAlign="center">
                        Our prized customer base
                    </Typography>
                </Grid>
                <Grid item xs={12} style={imageStyle}>
                    <Image src={showtime} alt="showtime" width={200} />
                    <Image src={lexus} alt="lexus" width={200} />
                    <Image src={makeawish} alt="makeawish" width={200} />
                </Grid>
                <Grid item xs={12} style={imageStyle}>
                    <Image src={eyofem} alt="showtime" width={200} />
                    <Image
                        src={generalatomics}
                        alt="generalatomics"
                        width={200}
                    />
                    <Image src={etaservices} alt="etaservices" width={200} />
                </Grid>
                <Grid item xs={12} style={imageStyle}>
                    <Image src={mercbenz} alt="mercbenz" width={200} />
                    <Image src={odyssey} alt="odyssey" width={200} />
                    <Image src={qualcom} alt="qualcom" width={200} />
                </Grid>

                <Grid item xs={12} style={imageStyle}>
                    <Image src={djoglobal} alt="djoglobal" width={200} />
                    <Image
                        src={cohrestauraunt}
                        alt="cohrestauraunt"
                        width={200}
                    />
                    <Image src={bigatla} alt="bigatla" width={200} />
                </Grid>
                <Grid item xs={12} style={imageStyle}>
                    <Image src={sandiegouni} alt="sandiegouni" width={200} />
                    <Image src={barneystone} alt="barneystone" width={200} />
                </Grid>

                <Grid item>
                    <Box textAlign="right">
                        <Button endIcon={<BsChevronRight />}>VIEW ALL</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default CustomerSection;
