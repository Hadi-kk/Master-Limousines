"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
import { Box } from "@mui/material";

interface EventAccordionProps {
    startDate: Date;
}

export default function EventAccordion({ startDate }: EventAccordionProps) {
    const [expandedYear, setExpandedYear] = useState<number | null>(null);

    const toggleYearAccordion = (year: number) => {
        setExpandedYear(expandedYear === year ? null : year);
    };

    const currentDate = new Date();
    const startYear = startDate.getFullYear();
    const currentYear = currentDate.getFullYear();
    const years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, index) => startYear + index
    );

    return (
        <Box sx={{ backgroundColor: "rgba(22, 24, 26, 1)" }} p={2}>
            <Typography
                variant="h4"
                fontSize="16px"
                textAlign="center"
                gutterBottom
            >
                ALL TIME
            </Typography>
            {years.reverse().map((year) => (
                <Accordion
                    key={year}
                    expanded={expandedYear === year}
                    onChange={() => toggleYearAccordion(year)}
                    sx={{
                        backgroundColor: "rgba(22, 24, 26, 1)",
                        boxShadow: "none",
                        "&:before": {
                            display: "none",
                        },
                    }}
                >
                    <AccordionSummary
                        aria-controls={`panel${year}-content`}
                        id={`panel${year}-header`}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                transform:
                                    expandedYear === year
                                        ? "rotate(0deg)"
                                        : "rotate(270deg)",
                                transition: "transform 0.3s ease",
                            }}
                        >
                            <MdExpandMore color="#fff" />
                        </div>
                        <Typography>{year}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {Array.from({ length: 12 }, (_, monthIndex) => {
                            const month = new Date(year, 11 - monthIndex); // Reverse order of months
                            return (
                                <Typography key={monthIndex}>
                                    {month.toLocaleString("default", {
                                        month: "long",
                                    })}
                                </Typography>
                            );
                        })}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
