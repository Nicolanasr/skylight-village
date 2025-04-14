
"use client";

import React, { useState } from "react";
import AccomodationCart, { AccType } from "../bookings/AccomodationCart";
import BookingSideFilter from "../bookings/BookingSideFilter";

interface Props {
    accommodations: AccType[];
}

const AccomodationPage: React.FC<Props> = ({ accommodations }) => {
    const [accomodationState, setAccomodationState] = useState(accommodations)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget); // <-- key step

        const formValues: Record<string, string> = {};
        formData.forEach((value, key) => {
            formValues[key] = value.toString(); // ensure all values are strings
        });

        try {
            const queryString = new URLSearchParams(formValues).toString();
            const res = await fetch(`http://localhost:3000/api/accomodations?${queryString}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            const response = await res.json();
            console.log(response.accommodations)
            setAccomodationState(response.accommodations)
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    return (
        <section className="container mx-auto flex gap-14 mt-20">
            <div className="flex-1 grid grid-cols-2 gap-6">
                {accomodationState.map((acc: AccType, index: number) => (
                    <AccomodationCart data={acc} key={index} />
                ))}
            </div>
            <div className="flex-[0.5] sticky top-24 h-fit">
                <BookingSideFilter onSubmit={onSubmit} />
            </div>
        </section>
    );
};

export default AccomodationPage;