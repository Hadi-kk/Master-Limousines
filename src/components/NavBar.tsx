"use client";
import { useState } from "react";
import { AppBar, Button, Grid, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/svgs/Logo.svg";
import Image from "next/image";

const Navbar = () => {
    const [value, setValue] = useState("HOME");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

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
                        // textColor="inherit"
                        aria-label="Navigation tabs"
                    >
                        <Tab
                            value="HOME"
                            label="HOME"
                            href="/"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="SERVICES"
                            label="SERVICES"
                            href="/services"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="EVENTS"
                            label="EVENTS"
                            href="/events"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="OUR FLEET"
                            label="OUR FLEET"
                            href="/fleet"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="ABOUT US"
                            label="ABOUT US"
                            href="/about"
                            LinkComponent={Link}
                        />

                        <Tab
                            value="CONTACT US"
                            label="CONTACT US"
                            href="/contact"
                            LinkComponent={Link}
                        />

                        <Button
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
