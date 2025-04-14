"use client"

import React from "react";

import { Calendar, Tent, User } from "lucide-react";
import Button from "../ui/Button";
import GuestSelector from "../ui/GuestSelector";

interface Props {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const BookingSideFilter = ({ onSubmit }: Props) => {
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="w-full px-10 py-10 bg-[#f0eee8] shadow-md">
            <form action="" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="checkin" className="mb-2 flex items-center gap-2 text-sm font-semibold">
                        <Calendar height={20} width={20} /> CHECK-IN
                    </label>
                    <input type="date" id="checkin" name="checkin" className="text-lg" defaultValue={today} />
                </div>
                <div className="mt-10">
                    <label htmlFor="checkout" className="mb-2 flex items-center gap-2 text-sm font-semibold">
                        <Calendar height={20} width={20} /> CHECK-OUT
                    </label>
                    <input type="date" id="checkout" name="checkout" className="text-lg" defaultValue={today} />
                </div>
                <div className="mt-10">
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                        <User height={20} width={20} /> GUESTS
                    </label>
                    <GuestSelector />
                </div>
                <div className="mt-10">
                    <label htmlFor="accomodation" className="mb-2 flex items-center gap-2 text-sm font-semibold">
                        <Tent height={20} width={20} /> ACCOMODATION
                    </label>
                    <select name="accomodation" id="accomodation" className="text-lg">
                        <option value="tent">Tent</option>
                        <option value="bungalow">Bungalow</option>
                    </select>
                </div>
                <Button type="submit" className="w-full mt-10 hover:bg-skylight-green hover:text-background hover:border-skylight-green">
                    CHECK AVAILABILITY
                </Button>
            </form>
        </div>
    );
};

export default BookingSideFilter;
