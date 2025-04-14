"use client";

import { JSX, useEffect, useRef, useState } from "react";

export default function GuestSelector(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [adults, setAdults] = useState<number>(1);
    const [children, setChildren] = useState<number>(0);

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative " ref={dropdownRef}>
            <input
                type="text"
                name="guests"
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full text-lg"
                readOnly
                value={`${adults} adults, ${children} childrens`}
            />

            {/* Dropdown Popup */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-lg bg-white p-4 z-50">
                    {/* Adults */}
                    <div className="flex justify-between items-center mb-4">
                        <span>Adults</span>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                                className="px-2 py-1 rounded bg-gray-200"
                            >
                                -
                            </button>
                            <span>{adults}</span>
                            <button type="button" onClick={() => setAdults((prev) => prev + 1)} className="px-2 py-1 rounded bg-gray-200">
                                +
                            </button>
                        </div>
                    </div>

                    {/* Children */}
                    <div className="flex justify-between items-center">
                        <span>Children</span>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                                className="px-2 py-1 rounded bg-gray-200"
                            >
                                -
                            </button>
                            <span>{children}</span>
                            <button type="button" onClick={() => setChildren((prev) => prev + 1)} className="px-2 py-1 rounded bg-gray-200">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
