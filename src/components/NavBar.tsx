"use client";
import React, { useState, useEffect } from "react";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Slide,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import logo from "@/assets/svgs/Logo.svg";
import { TiThMenuOutline } from "react-icons/ti";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navigationLinks = [
    { label: "HOME", href: "/", value: "/" },
    { label: "SERVICES", href: "/services", value: "/services" },
    { label: "EVENTS", href: "/events", value: "/events" },
    { label: "OUR FLEET", href: "/fleet", value: "/fleet" },
    { label: "ABOUT US", href: "/about", value: "/about" },
];

function HideOnScroll({ children }: any) {
    const trigger = useScrollTrigger();
    const top = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    return (
        <Slide
            appear={false}
            direction="down"
            in={!trigger}
            timeout={600}
            easing="ease-in-out"
        >
            <AppBar
                color={"transparent"}
                sx={{
                    p: 4,
                    py: 2,
                    boxShadow: top
                        ? "inset 0px 140px 10px -20px #0000006f"
                        : "none",
                    backdropFilter: top ? "blur(3px)" : "none",
                    transition: "boxShadow 2s",
                    display: { xs: "none", md: "block" },
                }}
            >
                {children}
            </AppBar>
        </Slide>
    );
}

const MobileDrawer = ({ mobileOpen, handleDrawerToggle, value }: any) => {
    const router = useRouter();

    return (
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "100%",
                    backgroundColor: "#000000b7",
                    backdropFilter: "blur(3px)",
                },
            }}
        >
            <Box
                onClick={handleDrawerToggle}
                sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                }}
            >
                <Image
                    src={logo}
                    alt="Master Limousines"
                    quality={100}
                    width={200}
                    height={48}
                    onClick={() => router.push("/")}
                    className="image-with-shadow"
                    style={{ margin: "20px" }}
                />
                <IconButton>
                    <IoChevronBackCircleSharp color="#FAC30F" size="35" />
                </IconButton>
            </Box>

            <Divider />
            <List>
                {navigationLinks.map((link) => (
                    <ListItem key={link.href}>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            href={link.href}
                            LinkComponent={Link}
                            selected={value === link.value ? true : false}
                        >
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

const Navbar = () => {
    const [value, setValue] = useState("");
    const pathname = usePathname();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        router.prefetch("/");
        setValue(pathname);
    }, [pathname]);

    return (
        <>
            <HideOnScroll>
                <Grid container justifyContent="space-between" direction="row">
                    <Grid item>
                        <Image
                            src={logo}
                            alt="Master Limousines"
                            quality={100}
                            width={200}
                            height={48}
                            onClick={() => router.push("/")}
                            className="image-with-shadow"
                        />
                    </Grid>
                    <Grid item>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            aria-label="Navigation tabs"
                        >
                            {navigationLinks.map((link) => (
                                <Tab
                                    key={link.href}
                                    value={link.value}
                                    label={link.label}
                                    href={link.href}
                                    LinkComponent={Link}
                                />
                            ))}
                            <Button
                                value="/reservations"
                                variant="contained"
                                color="primary"
                                href="/reservations"
                                LinkComponent={Link}
                            >
                                RESERVATIONS
                            </Button>
                        </Tabs>
                    </Grid>
                </Grid>
            </HideOnScroll>
            <Toolbar
                sx={{ backgroundColor: "#000000c0", display: { md: "none" } }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2 }}
                >
                    <TiThMenuOutline />
                </IconButton>
                <Image
                    src={logo}
                    alt="Master Limousines"
                    quality={100}
                    width={150}
                    height={48}
                    onClick={() => router.push("/")}
                    className="image-with-shadow"
                    style={{ margin: "20px" }}
                />
            </Toolbar>
            <MobileDrawer
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                value={value}
            />
        </>
    );
};

export default Navbar;
