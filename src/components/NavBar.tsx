"use client";
import { useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Grid,
    Link,
    List,
    ListItem,
    Tab,
    Tabs,
} from "@mui/material";
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
                        indicatorColor="primary"
                        aria-label="Navigation tabs"
                    >
                        <Link href="/">
                            <Tab value="HOME" label="HOME" />
                        </Link>

                        <Link href="/services">
                            <Tab value="SERVICES" label="SERVICES" />
                        </Link>

                        <Link href="/events">
                            <Tab value="EVENTS" label="EVENTS" />
                        </Link>

                        <Link href="/fleet">
                            <Tab value="OUR FLEET" label="OUR FLEET" />
                        </Link>

                        <Link href="/about">
                            <Tab value="ABOUT US" label="ABOUT US" />
                        </Link>

                        <Button variant="contained" color="primary">
                            RESERVATIONS
                        </Button>
                    </Tabs>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Navbar;
