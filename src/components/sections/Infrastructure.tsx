import React, { ReactElement } from "react";
import SectionTitle from "../ui/SectionTitle";

import { Tent, Wifi, Flame, Car, Droplets, ShowerHead } from "lucide-react";

const infrastructure: { icon: ReactElement; title: string; text: string }[] = [
    {
        icon: <Tent className="h-full w-full" strokeWidth={1} />,
        title: "Nature Immersion",
        text: "Enjoy a peaceful escape nestled in Lebanon’s mountain forests. Skylight Village offers a serene environment, ideal for reconnecting with nature, stargazing, and leaving behind the noise of city life."
    },
    {
        icon: <Droplets className="h-full w-full" strokeWidth={1} />,
        title: "Fresh Spring Water",
        text: "Our site is supplied with naturally sourced spring water, filtered and available across the village. Hydrate freely and safely during your stay, whether in tents, bungalows, or the restaurant area."
    },
    {
        icon: <ShowerHead className="h-full w-full" strokeWidth={1} />,
        title: "Modern Sanitary Facilities",
        text: "Comfort meets camping with clean, private bathrooms and hot showers available at all hours. Whether you're in a tent or a bungalow, you’ll have access to proper hygiene and sanitation."
    },
    {
        icon: <Flame className="h-full w-full" strokeWidth={1} />,
        title: "Campfire Experience",
        text: "Gather around cozy campfires in designated areas equipped with seating and safety features. Perfect for evening stories, marshmallows, music, or just enjoying the crackling fire under the stars."
    },
    {
        icon: <Wifi className="h-full w-full" strokeWidth={1} />,
        title: "Wi-Fi Access in Common Zones",
        text: "Stay connected when needed. While we encourage unplugging, free Wi-Fi is available in shared zones like the restaurant and lounge to help you check in or share your experience."
    },
    {
        icon: <Car className="h-full w-full" strokeWidth={1} />,
        title: "Free Secure Parking",
        text: "Drive in and park with peace of mind. Skylight Village offers monitored parking space close to your accommodation so you can keep your vehicle nearby and safe throughout your visit."
    },];

const Infrastructure = () => {
    return (
        <section id="infrastructure">
            <SectionTitle isCenter title="Village Infrastructure" />
            <div className="mt-10 grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
                {infrastructure.map((inf, index) => (
                    <div key={index}>
                        <h4 className="flex items-center md:items-end gap-2 flex-col md:flex-row">
                            <span className="h-12 w-12 md:h-14 md:w-14">{inf.icon}</span>
                            <span className="text-lg lg:text-xl font-medium">{inf.title}</span>
                        </h4>
                        <p className="mt-4 tracking-wider font-light  md:block text-center md:text-left">{inf.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Infrastructure;
