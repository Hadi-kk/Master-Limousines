import Image from "next/image";
import styles from "./page.module.css";
import {
    CustomerSection,
    FleetSection,
    HeroSection,
    Section2,
    Section3,
    Section8,
    ServicesSection,
} from "@/components";
import NewsSection from "@/components/UI/Landing/NewsSection";
import Section9 from "@/components/UI/Landing/Section9";

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
