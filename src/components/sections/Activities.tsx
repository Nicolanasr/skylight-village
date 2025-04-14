import React, { ReactElement } from "react";

import Image from "next/image";
import { Mountain, Binoculars, Sparkles, Users } from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

type Props = {
    className?: string;
};

const activities: { title: string; desc: string; icon: ReactElement }[] = [
    {
        title: "Nature Hikes",
        desc: "Explore scenic mountain trails and reconnect with the wild.",
        icon: <Mountain strokeWidth={1.4} className="w-full h-full " />,
    },
    {
        title: "Wildlife Watching",
        desc: "Spot birds, foxes, and other friendly forest creatures.",
        icon: <Binoculars strokeWidth={1.4} className="w-full h-full " />,
    },
    {
        title: "Stargazing Nights",
        desc: "Lay back and witness the magic of a crystal-clear night sky.",
        icon: <Sparkles strokeWidth={1.4} className="w-full h-full " />,
    },
    {
        title: "Group Games",
        desc: "Fun bonding activities for families, friends, and scouts.",
        icon: <Users strokeWidth={1.4} className="w-full h-full " />,
    },
];

const Activities = ({ className }: Props) => {
    return (
        <section id="activities" className={`${className} container flex flex-col justify-center items-center lg:flex-row gap-4 mx-auto`}>
            <div className="flex-1">
                <div className="lg:max-w-xl">
                    <SectionTitle subtitle="ACTIVITY" title="Camp will be for you what you want it to be" className="" />
                    <Image src="/images/camp-illustration-Photoroom.png" alt="camp illustration" height={450} width={450} className="mx-auto mt-8" />
                </div>
            </div>
            <div className="flex-1 grid text-center md:text-left md:grid-cols-2 gap-4 lg:gap-8 h-fit">
                {activities.map((activity, index) => (
                    <div key={index} className={`lg:max-w-[250px] h-fit mx-auto ${index % 2 !== 0 ? "lg:mt-20" : ""}`}>
                        <div className="h-20 w-20 text-skylight-green mx-auto md:mx-[unset]">
                            {activity.icon}
                        </div>
                        <h4 className="text-xl my-2 font-semibold">{activity.title}</h4>
                        <p className="font-light text-gray-700">{activity.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Activities;
