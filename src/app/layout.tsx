import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./themeRegistery";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
    title: "Master Limousines",
    description: "Reserve your limo now",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry options={{ key: "mui" }}>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeRegistry>
            </body>
        </html>
    );
}
