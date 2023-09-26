"use client";
import { Box, Button } from "@mui/material";
import Accordian1 from "./Accordian1";
import Accordian2 from "./Accordian2";
import Accordian3 from "./Accordian3";

const reservations = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url('/reservationbg.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                color: "white",
                textShadow: "0px 4px 4px 0px #00000040",
                paddingTop: 20,
            }}
        >
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between "
                width="75%"
                mb={2}
            >
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                    NEW RESERVATION
                </Button>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                    LOGIN
                </Button>
            </Box>
            <Accordian1 />
            <Accordian2 />
            <Accordian3 />
        </Box>
    );
};

export default reservations;
