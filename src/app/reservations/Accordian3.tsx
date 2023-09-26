"use client";
import React from "react";
import {
    AccordianTitle,
    CustomAccordion,
    InsideAccordian,
} from "./commonFunctions";
import { MdExpandMore } from "react-icons/md";
import {
    Box,
    Button,
    Grid,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import { BsCircleFill } from "react-icons/bs";

const Accordian3 = () => {
    return (
        <CustomAccordion>
            <AccordianTitle
                expandIcon={<MdExpandMore color="#fff" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box
                    width="18px"
                    height="18px"
                    borderRadius="100%"
                    border="1px solid #fff"
                    mr={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <BsCircleFill fontSize="12px" />
                </Box>
                <Typography variant="h4" fontSize="16px" letterSpacing="10px">
                    STEP 3 - FINAL DETAILS
                </Typography>
            </AccordianTitle>
            <InsideAccordian>
                <Grid container direction="row" spacing={4}>
                    <Grid item>
                        <InputLabel>Service type</InputLabel>
                        <TextField
                            sx={{
                                backgroundColor: "rgba(0, 0, 0, 0.75)",
                                "& .MuiOutlinedInput-root": {
                                    height: "40px",
                                    paddingTop: "0px",
                                },
                            }}
                        />
                    </Grid>

                    <Grid item container>
                        <Grid item md={6}>
                            <InputLabel>Pick-Up Date</InputLabel>
                            <TextField
                                sx={{
                                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                                    "& .MuiOutlinedInput-root": {
                                        height: "40px",
                                        paddingTop: "0px",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <InputLabel>Pick-Up Time</InputLabel>
                            <TextField
                                sx={{
                                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                                    "& .MuiOutlinedInput-root": {
                                        height: "40px",
                                        paddingTop: "0px",
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Button>
                            <Typography
                                variant="body1"
                                color="error"
                                fontSize="12px"
                            >
                                Forgot Password?
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </InsideAccordian>
        </CustomAccordion>
    );
};

export default Accordian3;
