"use client";
import { useState, useEffect } from "react";
import {
    AppBar,
    Button,
    Grid,
    Slide,
    Tab,
    Tabs,
    useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import logo from "@/assets/svgs/Logo.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function HideOnScroll({ children }: any) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = () => {
    const [value, setValue] = useState("");
    const pathname = usePathname();
    const router = useRouter();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        router.prefetch("/");
        setValue(pathname);
    }, [pathname]);

    return (
        <HideOnScroll>
            <AppBar color="transparent" sx={{ p: 4, boxShadow: "none" }}>
                <Grid container justifyContent="space-between" direction="row">
                    <Grid item>
                        <Image
                            src={logo}
                            alt="Master Limousines"
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
        </HideOnScroll>
    );
};

export default Navbar;
