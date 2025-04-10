import React, { ReactElement } from "react";
import SectionTitle from "../ui/SectionTitle";

import { Home, Tent, ToyBrick, Utensils, Flame, MoonStar } from "lucide-react";
import Image from "next/image";

interface Props {
    className: string;
}

const services: { icon: ReactElement; title: string; desc: string; highlight?: boolean; image?: string }[] = [
    {
        icon: <Home strokeWidth={1.4} height={75} width={75} />,
        title: "Octagon Bungalows",
        desc: "tay in our uniquely designed wooden bungalows, combining comfort, charm, and a one-of-a-kind octagonal touch.",
        highlight: true,
        image: "/images/bunalow.jpg"
    },
    {
        icon: <Tent strokeWidth={1.4} height={75} width={75} />,
        title: "Wood Tents",
        desc: "Experience nature up close with our cozy tent setups surrounded by scenic mountain views.",
        highlight: true,
        image: "/images/wood-tent.jpg"
    },
    { icon: <Utensils strokeWidth={1.4} height={75} width={75} />, title: "Restaurant", desc: "" },
    { icon: <ToyBrick strokeWidth={1.4} height={75} width={75} />, title: "Playground", desc: "" },
    {
        icon: (
            <>
                <Flame strokeWidth={1.4} height={75} width={75} />
                <MoonStar strokeWidth={1.4} height={75} width={75} />
            </>
        ),
        title: "Campfire & Stargazing ",
        desc: "Gather around the fire for stories, warmth, and breathtaking views of the starry night sky.",
        highlight: true,
        image: "/images/stargazing.jpg"
    },
];

const About = ({ className }: Props) => {
    return (
        <section id="about" className={className}>
            <div className="container mx-auto">
                <SectionTitle className="max-w-md mx-auto" title="Welcome To Skylight Village" subtitle="About" isCenter />
                <p className="max-w-5xl mx-auto text-center mt-6 text-lg">
                    Escape to the heart of the mountains where nature meets comfort and adventure begins. Skylight Village invites you to unwind
                    beneath the stars, stay in our charming octagon-shaped bungalows or cozy tents, and reconnect with the simplicity of the outdoors.
                    Whether you{"'"}re a family, a group of friends, or a scout troop seeking new memories, your perfect getaway starts here.
                </p>
                <div className="flex flex-wrap justify-around mt-12 gap-8">
                    {services.map((service, index: number) => (
                        <div key={index} className="text-center flex flex-col justify-center items-center flex-[1]">
                            <div className="mx-auto flex gap-2 items-center justify-center text-4xl text-skylight-green">{service.icon}</div>
                            <h4 className="mt-2 md:text-lg font-medium text-center whitespace-nowrap">{service.title}</h4>
                        </div>
                    ))}
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {services.map((service, index) => (
                        service.highlight && <div className="text-center" key={index}>
                            <Image src={service.image || ""} alt={service.title} height={300} width={800} objectFit="cover" className="h-72 object-cover" />
                            <h3 className="font-semibold text-2xl mt-4">{service.title}</h3>
                            <p className="mt-2">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
