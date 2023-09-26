"use client";
import {
    Autocomplete,
    Box,
    Button,
    Grid,
    IconButton,
    InputLabel,
    Stack,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import {
    DatePicker,
    LocalizationProvider,
    TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
    AccordianTitle,
    CustomAccordion,
    InsideAccordian,
} from "./commonFunctions";
import Wheelchair from "@/assets/svgs/Wheelchair.png";
import Image from "next/image";

const serviceTypes = [
    { label: "Airport Arrival", id: "1" },
    { label: "Airport Departure", id: "2" },
    { label: "Point-to-Point", id: "3" },
    { label: "Hourly /As Directed", id: "4" },
    { label: "Quinceanera", id: "5" },
];

const Accordian1 = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomAccordion defaultExpanded={true}>
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
                    <Typography
                        variant="h4"
                        fontSize="16px"
                        letterSpacing="10px"
                    >
                        STEP 1 - RIDE INFORMATION
                    </Typography>
                </AccordianTitle>
                <InsideAccordian>
                    <Grid container direction="row" spacing={4}>
                        <Grid
                            item
                            container
                            direction="column"
                            md={6}
                            spacing={3}
                        >
                            <Grid item>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={serviceTypes}
                                    sx={{
                                        width: "100%",
                                    }}
                                    renderInput={(params) => (
                                        <>
                                            <InputLabel>
                                                Service type
                                            </InputLabel>
                                            <TextField
                                                {...params}
                                                sx={{
                                                    backgroundColor:
                                                        "rgba(0, 0, 0, 0.75)",
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            height: "40px",
                                                            paddingTop: "0px",
                                                        },
                                                }}
                                            />
                                        </>
                                    )}
                                />
                            </Grid>

                            <Grid item container>
                                <Grid item md={6}>
                                    <InputLabel>Pick-Up Date</InputLabel>
                                    <DatePicker
                                        sx={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.75)",
                                            "& .MuiOutlinedInput-root": {
                                                height: "40px",
                                                paddingTop: "0px",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <InputLabel>Pick-Up Time</InputLabel>
                                    <TimePicker
                                        sx={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.75)",
                                            "& .MuiOutlinedInput-root": {
                                                height: "40px",
                                                paddingTop: "0px",
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={serviceTypes}
                                    sx={{
                                        width: "100%",
                                    }}
                                    renderInput={(params) => (
                                        <>
                                            <InputLabel>
                                                Pick-Up Location
                                            </InputLabel>
                                            <TextField
                                                {...params}
                                                sx={{
                                                    backgroundColor:
                                                        "rgba(0, 0, 0, 0.75)",
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            height: "40px",
                                                            paddingTop: "0px",
                                                        },
                                                }}
                                            />
                                        </>
                                    )}
                                />
                            </Grid>

                            <Grid item>
                                <Button>
                                    <Typography
                                        variant="body1"
                                        color="error"
                                        fontSize="12px"
                                    >
                                        + Add Stop
                                    </Typography>
                                </Button>
                            </Grid>

                            <Grid item>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={serviceTypes}
                                    sx={{
                                        width: "100%",
                                    }}
                                    renderInput={(params) => (
                                        <>
                                            <InputLabel>
                                                Drop-Off Location
                                            </InputLabel>
                                            <TextField
                                                {...params}
                                                sx={{
                                                    backgroundColor:
                                                        "rgba(0, 0, 0, 0.75)",
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            height: "40px",
                                                            paddingTop: "0px",
                                                        },
                                                }}
                                            />
                                        </>
                                    )}
                                />
                            </Grid>

                            <Grid item container>
                                <Grid item md={6}>
                                    <InputLabel>
                                        Number of Passengers
                                    </InputLabel>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-evenly"
                                        alignItems="center"
                                        sx={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.75)",
                                            width: "150px",
                                            height: "40px",
                                        }}
                                    >
                                        <IconButton>
                                            <AiOutlineMinus
                                                color="#FAC30F"
                                                size="14"
                                            />
                                        </IconButton>
                                        <Typography>0</Typography>
                                        <IconButton>
                                            <AiOutlinePlus
                                                color="#FAC30F"
                                                size="14"
                                            />
                                        </IconButton>
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <InputLabel>Luggage Count</InputLabel>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-evenly"
                                        alignItems="center"
                                        sx={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.75)",
                                            width: "150px",
                                            height: "40px",
                                        }}
                                    >
                                        <IconButton>
                                            <AiOutlineMinus
                                                color="#FAC30F"
                                                size="14"
                                            />
                                        </IconButton>
                                        <Typography>0</Typography>
                                        <IconButton>
                                            <AiOutlinePlus
                                                color="#FAC30F"
                                                size="14"
                                            />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Button>
                                    <Typography
                                        variant="body1"
                                        color="error"
                                        fontSize="12px"
                                    >
                                        + Add child Seat
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Stack direction="row">
                                    <Image
                                        src={Wheelchair}
                                        alt="wheel Chair icon"
                                    />
                                    <Typography>Accessible</Typography>
                                    <Switch />
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            Map
                        </Grid>
                    </Grid>
                </InsideAccordian>
            </CustomAccordion>
        </LocalizationProvider>
    );
};

export default Accordian1;
