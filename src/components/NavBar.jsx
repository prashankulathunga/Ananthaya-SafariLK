import { useEffect, useState } from "react";
import { MenuBar } from "./MenuBar";
import { Button } from "@heroui/react";

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 12) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            id="navBar"
            className={`fixed w-full mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "nav-dynamic" : "bg-transparent"
            }`}
        >
            <header
                className={`max-w-7xl mx-auto py-4 w-full relative z-40 transition-colors duration-300 ${
                    isScrolled ? "text-white" : "text-white"
                }`}
            >
                <nav className="h-full h-padding">
                    <div className="flex justify-between items-center w-full h-full">
                        <div className="left">
                            <p className={`font-medium ${isScrolled ? 'text-default' : 'text-default'}`}>Ananthaya Safari</p>
                        </div>

                        <div className="middle lg:block hidden">
                            <MenuBar />
                        </div>

                        <div className="right lg:block hidden">
                            <Button className={`px-5 ${isScrolled ? "bg-default/80 text-default-foreground": "bg-default-foreground text-white "}`}>
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};
