'use client'

import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { Parallax } from "react-scroll-parallax";

type Props = {
    className?: string;
    title?: string;
    subtitle?: string;
    image?: string;
    isCenter?: boolean;
    button?: { title: string; href: string };
    parallaxSpeed?: number
};

const Banner = ({ className, button, image, isCenter, subtitle, title, parallaxSpeed }: Props) => {
    return (
        <section className={`${className} flex ${isCenter && "justify-center"} overflow-hidden items-center h-96 lg:h-[600px] w-full bg-foreground relative`}>
            {image &&
                <Parallax speed={parallaxSpeed != null ? parallaxSpeed : -10} className="absolute top-0 bottom-0 left-0 right-0">
                    <Image src={image} alt="bonfire" layout="fill" className="h-full w-full object-cover opacity-60" objectFit="cover" />
                </Parallax>
            }
            <div className="container mx-auto">
                <div className={`relative z-10 max-w-[778px] ${isCenter && "mx-auto text-center "} `}>
                    {title && <h2 className="text-4xl lg:text-7xl lg:leading-20 font-bold text-background">{title}</h2>}
                    {subtitle && <p className="mt-4 text-white text-xl">{subtitle}</p>}
                    {button && (
                        <Button
                            href={button.href}
                            className="text-center mt-8 text-background font-semibold max-w-sm md:w-full mx-auto md:text-lg lg:py-4 tracking-wide"
                        >
                            {button.title}
                        </Button>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Banner;
