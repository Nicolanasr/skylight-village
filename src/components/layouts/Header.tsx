"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight - 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${isScrolled ? "shadow-md bg-background fixed" : "absolute -top-full"} transition-all left-0 right-0 top-0 z-50 text-foreground`}>
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Skylight-logo-wide-removebg-preview.png"
                        alt="Skylight Village Logo"
                        width={150}
                        height={50}
                        objectFit="contain"
                        className={isScrolled ? "filter invert-100" : ""}
                    />
                </Link>

                {/* Navigation */}
                <nav className={`hidden md:flex space-x-6 items-center ${isScrolled ? "text-foreground" : "text-background"}`}>
                    <Link href="/accomodations">Stay</Link>
                    <Link href="/explore">Explore</Link>
                    <Link href="/activities">Activities</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <Button href="/accomodations" scheme="transparent" className="hover:bg-background hover:border-background hover:text-skylight-green">
                        Book Now
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
