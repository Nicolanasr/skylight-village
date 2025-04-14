import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const posts: string[] = [
    "/images/bonfire.jpg",
    "/images/accomodation-bg.jpg",
    "/images/camp-illustration.jpg",
    "/Skylight-logo-icon.png",
    "/images/nature.jpg",
    "/images/hero-bg.jpg",
];

const InstagramPosts = () => {
    return (
        <section id="instagram-posts">
            <SectionTitle isCenter title="Instagram" subtitle="Follow us on"></SectionTitle>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8 gap-6">
                {posts.map((post, index) => (
                    <Link
                        target="_blank"
                        href="https://www.instagram.com/skylightvillage/"
                        key={index}
                        className="w-full aspect-square bg-gray-300 relative octagon-path"
                    >
                        <Image src={post} alt={post} fill objectFit="cover" />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default InstagramPosts;
