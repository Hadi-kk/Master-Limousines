import Image from "next/image";
import styles from "./page.module.css";
import {
    CustomerSection,
    FleetSection,
    HeroSection,
    NewsSection,
    Section2,
    Section3,
    Section8,
    Section9,
    ServicesSection,
} from "@/components";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <Section2 />
            <Section3 />
            <FleetSection />
            <CustomerSection />
            <ServicesSection />
            <NewsSection />
            <Section8 />
            <Section9 />
        </main>
    );
}
