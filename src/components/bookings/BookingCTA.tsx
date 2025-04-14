'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

import React from "react";
import Button from "../ui/Button";

interface Props {
    className?: string;
}

const BookingCTA = ({ className }: Props) => {
    const classes = ` ${className}`;
    const router = useRouter();
    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 👈 prevent page refresh
        const formData = new FormData(e.currentTarget);

        const checkin = formData.get('checkin') as string;
        const checkout = formData.get('checkout') as string;
        const guests = formData.get('guests') as string;
        const accomodation = formData.get('accomodation') as string;


        const query = new URLSearchParams({ checkin, checkout, guests, accomodation }).toString();

        router.push(`/accomodations?${query}`); // 👈 redirect with query params
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`bg-background shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-6 w-full gap-8 lg:gap-4 ${classes} xl:px-32 text-black`}
        >
            <div>
                <h4 className="font-bold text-lg text-skylight-green mb-1">CHECK IN</h4>
                <input required name="checkin" type="date" defaultValue={today} />
            </div>
            <div>
                <h4 className="font-bold text-lg text-skylight-green mb-1">CHECK OUT</h4>
                <input required name="checkout" type="date" defaultValue={today} />
            </div>
            <div>
                <h4 className="font-bold text-lg text-skylight-green mb-1">GUESTS</h4>
                <input required name="guests" type="text" placeholder="1 Adult, 2 Children" />
            </div>
            <div>
                <h4 className="font-bold text-lg text-skylight-green mb-1">ACCOMODATION</h4>
                <select required name="accomodation" id="" defaultValue="none">
                    <option value="none">Select Accomodation</option>
                    <option value="tent">Tent</option>
                    <option value="wood-tent">Wooden Tent</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="restaurant">Restaurant</option>
                </select>
            </div>
            <Button type="submit" className="hover:border-skylight-green hover:bg-skylight-green hover:text-background border-skylight-green text-skylight-green whitespace-nowrap col-span-1 sm:col-span-2 lg:col-span-1">
                Check Availability
            </Button>
        </form>
    );
};

export default BookingCTA;
