import React from "react";
import SectionTitle from "../ui/SectionTitle";
import AccomodationCart, { AccType } from "../bookings/AccomodationCart";

type Props = {
    className?: string;
    accommodations: AccType[];
};

const Booking = ({ className, accommodations }: Props) => {
    return (
        <section id="booking" className={`${className}`}>
            <SectionTitle subtitle="BOOKING" title="Book Your Dream Vacation Now" className="max-w-md mx-auto" isCenter />

            <div className="flex-1 grid md:grid-cols-2 gap-6 mt-14">
                {accommodations.map((acc: AccType, index: number) => (
                    <AccomodationCart data={acc} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Booking;
