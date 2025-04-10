'use client';

import React from "react";
import Button from "../ui/Button";

interface Props {
    className?: string;
}

const BookingCTA = ({ className }: Props) => {
    const classes = ` ${className}`;
    return (
        <form
            className={`bg-background shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-6 w-full gap-8 lg:gap-4 ${classes} xl:px-32 text-black`}
        >
            <div>
                <h4 className="font-bold text-lg text-skylight-green mb-1">CHECK IN</h4>
                <input name="checkin" type="date" />
            </div>
            <div>
                <h4 className="font-bold text-lg text-skylight-green mb-1">CHECK OUT</h4>
                <input name="checkout" type="date" />
            </div>
            <div>
                <h4 className="font-bold text-lg text-skylight-green mb-1">GUESTS</h4>
                <input name="guests" type="text" placeholder="1 Adult, 2 Children" />
            </div>
            <div>
                <h4 className="font-bold text-lg text-skylight-green mb-1">ACCOMODATION</h4>
                <select name="accomodation" id="" defaultValue="none">
                    <option value="none">Select Accomodation</option>
                    <option value="">Tent</option>
                    <option value="">Wooden Tent</option>
                    <option value="">Bungalow</option>
                </select>
            </div>
            <Button type="submit" className="hover:border-skylight-green hover:bg-skylight-green hover:text-background border-skylight-green text-skylight-green whitespace-nowrap col-span-1 sm:col-span-2 lg:col-span-1">
                Check Availability
            </Button>
        </form>
    );
};

export default BookingCTA;
