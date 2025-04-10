import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import React from "react"

const Home = () => {
    return (
        <>
            <Hero />
            <div className="mt-96 sm:mt-40 lg:mt-16"> </div>
            <About className="mt-[28rem] lg:mt-28" />
        </>
    )
}

export default Home