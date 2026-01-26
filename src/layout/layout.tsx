import TopToScroll from "@/components/common/TopToScroll";
import PortfolioIntro from "@/components/intro/PortfolioIntro";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";
import { NeonCursor } from "@/components/effects/MouseFollow";

export default function RootLayout() {
    return (
        <>
            {/* <PortfolioIntro /> */}
            <NeonCursor />
            {/* <DynamicTitle /> */}
            <Header />

            <Outlet />

            <Footer />
            <TopToScroll />
        </>
    );
}