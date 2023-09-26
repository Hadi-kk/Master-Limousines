import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    styled,
} from "@mui/material";

export const CustomAccordion = styled(Accordion)(({ theme }) => ({
    "&.MuiAccordion-root": {
        backgroundColor: "rgba(56, 59, 66, 0.60)",
        marginBottom: theme.spacing(1),
        width: "75%",
    },
}));

export const InsideAccordian = styled(AccordionDetails)(({ theme }) => ({
    backgroundColor: "rgba(56, 59, 66, 0.60)",
    backdropFilter: "blur(2px)",
    padding: theme.spacing(3),
}));

export const AccordianTitle = styled(AccordionSummary)(({ theme }) => ({
    background: "#2189B7",
}));
