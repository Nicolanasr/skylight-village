import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Compass } from "lucide-react";

import BookingCTA from '../bookings/BookingCTA'

const Hero = () => {
    return (
        <section id="hero" className="relative bg-skylight-green text-white py-36 lg:h-screen flex items-center">
            <Image
                src="/images/hero-bg.jpg"
                alt="Skylight Village Hero Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className='z-0 opacity-80 rotate-y-180'
            />
            <div className='container mx-auto h-fit my-auto relative z-10 '>
                <h1 className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6 md:leading-20">
                    Skylight Village
                </h1>
                <p className="md:text-xl font-light max-w-2xl md:leading-10">
                    Escape to the mountains for a serene experience with starry views, cozy octagonal bungalows, and unforgettable memories.
                </p>
                <Link href="explore" className='md:text-xl inline-flex items-center gap-x-2 mt-8 px-1 pb-1 border-b-1'>
                    <Compass />
                    Explore Skylight
                </Link>
            </div>
            <div className='absolute -translate-y-14 lg:translate-y-1/2 top-full lg:top-auto lg:bottom-0 left-0 right-0 mx-auto container'>
                <BookingCTA />
            </div>
        </section>
    )
}

export default Hero