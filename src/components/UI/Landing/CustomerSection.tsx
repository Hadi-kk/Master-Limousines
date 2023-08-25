"use Client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
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

const CustomerSection = () => {
    const heroStyle2 = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };
    return (
        <>
            <Box style={heroStyle2} px={5}>
                <Stack spacing={1} justifyItems="center">
                    <Typography variant="h3" textAlign="center">
                        Our prized customer base
                    </Typography>
                    <Box>
                        <Image src={showtime} alt="showtime" />
                        <Image src={lexus} alt="lexus" />
                        <Image src={makeawish} alt="makeawish" />
                        <Image src={eyofem} alt="showtime" />
                        <Image src={generalatomics} alt="generalatomics" />
                        <Image src={etaservices} alt="etaservices" />
                        <Image src={mercbenz} alt="mercbenz" />
                        <Image src={odyssey} alt="odyssey" />
                        <Image src={qualcom} alt="qualcom" />
                        <Image src={djoglobal} alt="djoglobal" />
                        <Image src={cohrestauraunt} alt="cohrestauraunt" />
                        <Image src={bigatla} alt="bigatla" />
                        <Image src={sandiegouni} alt="sandiegouni" />
                        <Image src={barneystone} alt="barneystone" />
                    </Box>
                    <Button sx={{ width: "200px" }}>View ALL</Button>
                </Stack>
            </Box>
        </>
    );
};

export default CustomerSection;
