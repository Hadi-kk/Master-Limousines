"use client";
import { useState, useEffect } from "react";
import { AppBar, Button, Grid, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/svgs/Logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [value, setValue] = useState("");
    const pathname = usePathname();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        console.log("here is path", pathname);
        setValue(pathname);
    }, [pathname]);

    return (
        <AppBar color="transparent" sx={{ p: 4, boxShadow: "none" }}>
            <Grid container justifyContent="space-between" direction="row">
                <Grid item>
                    <Image
                        src={logo}
                        alt="Master Limousines"
                        width={200}
                        height={48}
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
                        <Tab
                            value="/"
                            label="HOME"
                            href="/"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="/services"
                            label="SERVICES"
                            href="/services"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="/events"
                            label="EVENTS"
                            href="/events"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="/fleet"
                            label="OUR FLEET"
                            href="/fleet"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="/about"
                            label="ABOUT US"
                            href="/about"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="/contact"
                            label="CONTACT US"
                            href="/contact"
                            LinkComponent={Link}
                        />

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
        </AppBar>
    );
};

export default Navbar;
