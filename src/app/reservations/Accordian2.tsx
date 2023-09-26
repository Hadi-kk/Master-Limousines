"use client";
import React from "react";
import {
    AccordianTitle,
    CustomAccordion,
    InsideAccordian,
} from "./commonFunctions";
import { Box, Typography } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

const Accordian2 = () => {
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
                    STEP 2 - SELECT VEHICLE
                </Typography>
            </AccordianTitle>
            <InsideAccordian>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </Typography>
            </InsideAccordian>
        </CustomAccordion>
    );
};

export default Accordian2;
