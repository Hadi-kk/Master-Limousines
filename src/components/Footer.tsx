import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import logo from "@/assets/svgs/Logo.svg";
import Image from "next/image";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiPinterestAlt } from "react-icons/tfi";
import { BsDot } from "react-icons/bs";
import { ListProps } from "@/types";

const services = [
    { title: "Gold Key Concierge", href: "/services" },
    { title: "Airport Transfers", href: "/services" },
    { title: "Executive Ground Transportation", href: "/services" },
    { title: "Executive Ground Transportation", href: "/services" },
    { title: "Tijuana/CBX Airport Services", href: "/services" },
    { title: "Temecula Wine Tours", href: "/services" },
    { title: "Wedding Limousine Transportation", href: "/services" },
    { title: "San Diego Brewery Tours", href: "/services" },
    { title: "Concert Limo Services", href: "/services" },
    { title: "Mexico Limousine Tours", href: "/services" },
    { title: "Bachelor & Bachelorette Parties", href: "/services" },
    { title: "SoCal Casino Limo Services", href: "/services" },
    { title: "Del Mar Races Limousine Service", href: "/services" },
    { title: "Graduation Limo Services", href: "/services" },
    { title: "Sporting Event Transportation", href: "/services" },
    { title: "Prom Night Limousine Services", href: "/services" },
    { title: "Quinceañera Limousine Service", href: "/services" },
    { title: "Nightclub Limo Service", href: "/services" },
    { title: "School Even Limo Services", href: "/services" },
];

const fleet = [
    { title: "Gold Key Concierge", href: "/services" },
    { title: "Airport Transfers", href: "/services" },
    { title: "Executive Ground Transportation", href: "/services" },
    { title: "Executive Ground Transportation", href: "/services" },
    { title: "Tijuana/CBX Airport Services", href: "/services" },
    { title: "Temecula Wine Tours", href: "/services" },
    { title: "Wedding Limousine Transportation", href: "/services" },
    { title: "San Diego Brewery Tours", href: "/services" },
    { title: "Concert Limo Services", href: "/services" },
    { title: "Mexico Limousine Tours", href: "/services" },
    { title: "Bachelor & Bachelorette Parties", href: "/services" },
    { title: "SoCal Casino Limo Services", href: "/services" },
];

const navItems = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Specials", href: "/services" },
    { title: "Fleet", href: "/fleet" },
    { title: "Reservations", href: "/reservations" },
];

const GetList = (props: ListProps) => {
    const { options } = props;

    return (
        <List>
            <Stack spacing={-1}>
                {" "}
                {/* Adjust the spacing value as needed */}
                {options.map((option, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemIcon
                            sx={{ "&.MuiListItemIcon-root": { minWidth: 0 } }}
                        >
                            <BsDot color="#fff" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1" fontSize="14px">
                                {option.title}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </Stack>
        </List>
    );
};

const Footer = () => {
    return (
        <Box>
            <Grid
                container
                justifyContent="space-between"
                sx={{
                    backgroundColor: "rgba(56, 59, 66, 0.4)",
                    p: 4,
                    color: "rgba(255, 255, 255, 0.75)",
                }}
            >
                <Grid item xs={12} sm={6} md={2}>
                    <Stack spacing={4}>
                        <Typography
                            variant="h5"
                            textAlign="center"
                            color="#fff"
                        >
                            ABOUT US
                        </Typography>
                        <Typography variant="h3" fontSize="13px">
                            High-end luxury Limousine services at affordable
                            prices
                        </Typography>
                        <Typography variant="h3" fontSize="13px">
                            We have been providing exceptional high-end
                            transportation throughout San Diego county for over
                            22 years.
                        </Typography>
                        <div style={{ marginTop: "100%" }}>
                            <Typography variant="body1" fontSize="13px">
                                License: TCP15412-A
                            </Typography>
                        </div>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Stack spacing={2}>
                        <Typography
                            variant="h5"
                            textAlign="center"
                            color="#fff"
                        >
                            SERVICES
                        </Typography>
                        <GetList options={services} />
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Stack spacing={2}>
                        <Typography
                            variant="h5"
                            textAlign="center"
                            color="#fff"
                        >
                            THE FLEET
                        </Typography>
                        <GetList options={fleet} />
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Stack spacing={2}>
                        <Typography
                            variant="h5"
                            textAlign="center"
                            color="#fff"
                        >
                            NAVIGATE
                        </Typography>
                        <GetList options={navItems} />
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Stack spacing={2}>
                        <Typography
                            variant="h5"
                            textAlign="center"
                            color="#fff"
                        >
                            CONTACT
                        </Typography>
                        <Typography variant="body1">
                            Address: 1426 Morena Blvd, San Diego, CA 92110
                        </Typography>
                        <Typography>(858) 483-5466</Typography>
                        <Typography>Contact Us</Typography>
                    </Stack>
                </Grid>
            </Grid>

            <Grid container p={3} pb={2} alignItems="center">
                <Grid item xs={4} justifyContent="left">
                    <Typography
                        variant="body1"
                        fontSize="11px"
                        letterSpacing="0.1em"
                    >
                        © 2001 - 2023 MASTERPIECE LIMOUSINE
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image
                        src={logo}
                        alt="Master Limousines"
                        width={200}
                        height={48}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2} direction="row" justifyContent="right">
                        <BiLogoFacebook size="20" />
                        <BiLogoTwitter size="20" />
                        <TfiPinterestAlt size="20" />
                        <TiSocialInstagram size="20" />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
