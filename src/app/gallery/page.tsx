"use client";

import Banner from "@/components/sections/Banner";
import Image from "next/image";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const photos = [
    {
        src: "/images/scount-camp.jpg",
        type: "Campground",
    },
    {
        src: "/images/accomodation-bg.jpg",
        type: "Campground",
    },
    {
        src: "/images/accomodation-bg.jpg",
        type: "Campground",
    },
    {
        src: "/images/bunalow.jpg",
        type: "Scout camping",
    },
    {
        src: "/images/hero-bg.jpg",
        type: "Scout camping",
    },
    {
        src: "/images/stargazing.jpg",
        type: "Scout camping",
    },
    {
        src: "/images/rest-3.jpg",
        type: "Restaurant",
    },
    {
        src: "/images/rest-3.jpg",
        type: "Restaurant",
    },
    {
        src: "/images/rest-3.jpg",
        type: "Restaurant",
    },
    {
        src: "/images/rest-2.jpg",
        type: "Restaurant",
    },
    {
        src: "/images/rest-1.jpg",
        type: "Restaurant",
    },
    {
        src: "/images/rest-1.jpg",
        type: "Text",
    },
];

export default function PhotoGallery() {
    const [activeType, setActiveType] = useState(photos[0].type);
    const uniqueTypes = [...new Set(photos.map((photo) => photo.type))];

    return (
        <div className="relative">
            <Banner title="Gallery" image="/images/nature.jpg" className="lg:h-96!" parallaxSpeed={0} />
            <div className="container mx-auto mt-6 md:mt-12 flex relative gap-6 md:gap-12 flex-col md:flex-row">
                <div className="flex-[0.22] flex flex-row whitespace-nowrap gap-4 overflow-auto max-w-full md:flex-col md:sticky top-20 h-fit px-6 md:px-10 py-4 md:py-8 bg-[#f0eee8] shadow-md">
                    {uniqueTypes.map((type, index) => (
                        <div className="" key={index}>
                            <a
                                href="#"
                                onClick={() => setActiveType(type)}
                                className={`md:text-lg cursor-pointer ${activeType === type ? "opacity-100 font-semibold" : "opacity-65"}`}
                            >
                                {type}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex-1">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry sequential={false} columnsCount={3} gutter="10px">
                            {photos
                                .filter((photo) => photo.type === activeType)
                                .map((photo, index) => (
                                    <div key={index}>
                                        <Image
                                            src={photo.src}
                                            alt={photo.src}
                                            layout="intrinsic" // This makes the image take its natural width and height
                                            width={500} // You can also specify the width, but layout="intrinsic" will ensure the correct ratio
                                            height={300} // Specify the height based on the image aspect ratio  />
                                        />
                                    </div>
                                ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    );
}
