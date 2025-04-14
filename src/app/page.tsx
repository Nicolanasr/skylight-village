import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Booking from "@/components/sections/Booking";
import Hero from "@/components/sections/Hero";
import Banner from "@/components/sections/Banner";
import React from "react";
import { AccType } from "@/components/bookings/AccomodationCart";
import InstagramPosts from "@/components/sections/InstagramPosts";
import Infrastructure from "@/components/sections/Infrastructure";
import { checkEnvironment } from "@/lib/functions";

const Home = async () => {
    let accommodations: AccType[] = [];

    try {
        const res = await fetch(`${checkEnvironment()}/api/accomodations`, {
            next: { revalidate: 60 }, // optional if using in app/
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const tmp_accommodations = await res.json();
        accommodations = tmp_accommodations.accommodations.slice(0, 4);
    } catch (error) {
        console.error("Failed to fetch accommodations:", error);
    }

    return (
        <>
            <Hero />
            <div className="mt-64 sm:mt-40 lg:mt-16"> </div>
            <About className=" lg:mt-28" />
            <div className="mt-20 sm:mt-40 lg:mt-16"> </div>
            <Activities />
            <div className="mt-20 sm:mt-40 lg:mt-16"> </div>
            <Banner
                title="Take Memories, Leave Only Footprints"
                subtitle="A Bonfire is just a nightclub in the mountains"
                image="/images/bonfire.jpg"
                isCenter
                button={{ title: "CHECK AVAILABILITY", href: "/accomodations" }}
            />
            <div className="mt-20 sm:mt-40 lg:mt-32"> </div>
            <Infrastructure />
            <div className="mt-20 sm:mt-40 lg:mt-32"> </div>
            <Booking accommodations={accommodations} className="container mx-auto max-w-5xl" />
            <div className="mt-20 sm:mt-40 lg:mt-16"> </div>
            <Banner
                title="Can you hear the outdoors calling for you"
                image="/images/nature.jpg"
            />
            <div className="mt-20 sm:mt-40 lg:mt-16"> </div>
            <InstagramPosts />
        </>
    );
};

export default Home;
