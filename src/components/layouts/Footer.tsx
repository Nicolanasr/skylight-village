/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-skylight-green text-white pt-14 py-4 mt-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* 1. Logo & Description & Social */}
                <div>
                    <Link href="/" className="flex items-center mb-2 relative h-16 w-56">
                        <Image
                            src="/Skylight-logo-wide-removebg-preview.png"
                            alt="Skylight Village Logo"
                            fill
                            objectFit="contain"
                        />
                    </Link>
                    <p className="mb-4">
                        Escape to nature, under the stars. Octagon bungalows, tents, and pure mountain air.
                    </p>
                    <div className="flex gap-4 text-2xl items-end">
                        <a href="https://www.instagram.com/skylightvillage/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaFacebookF />
                        </a>
                        <a href="https://wa.me/96170663399" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* 2. Site Links */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Site Links</h3>
                    <ul className="space-y-2 ">
                        <li><a href="/accomodations" className="hover:text-white">Accommodations</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* 3. Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Contact</h3>
                    <ul className="space-y-2 ">
                        <li><b>Email:</b> <a href="mailto:info@skylightvillagelb.com" className="hover:text-white">info@skylightvillagelb.com</a></li>
                        <li><b>Phone:</b> <a href="tel:+96170663399" className="hover:text-white">+961 71 234 567</a></li>
                        <li><b>Location:</b> <a href="https://maps.app.goo.gl/hysE4ah6Tsqx3Z8y8" target='blank'>Jaj, Mount Lebanon, Lebanon</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-10 text-center text-xs text-gray-100 border-t border-gray-100 pt-4">
                &copy; {new Date().getFullYear()} Skylight Village. All rights reserved.
            </div>
        </footer>);
}

export default Footer