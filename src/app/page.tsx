import Image from "next/image";
import styles from "./page.module.css";
import { HeroSection } from "@/components";
import dynamic from "next/dynamic";

const Section2 = dynamic(() => import("../components/UI/Landing/Section2"));
const FleetSection = dynamic(
    () => import("../components/UI/Landing/FleetSection")
);
const CustomerSection = dynamic(
    () => import("../components/UI/Landing/CustomerSection")
);
const ServicesSection = dynamic(
    () => import("../components/UI/Landing/ServicesSection")
);
const NewsSection = dynamic(
    () => import("../components/UI/Landing/NewsSection")
);
const Section8 = dynamic(() => import("../components/UI/Landing//Section8"));
const Section9 = dynamic(() => import("../components/UI/Landing//Section9"));

export default function Home() {
    return (
        <main>
            <HeroSection />
            <Section2 />
            {/* <Section3 /> */}
            <FleetSection />
            <CustomerSection />
            <ServicesSection />
            <NewsSection />
            <Section8 />
            <Section9 />
        </main>
    );
}
