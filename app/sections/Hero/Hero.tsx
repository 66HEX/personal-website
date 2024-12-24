"use client";

import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import {TransitionLink} from "@/app/components/TransitionLink/TransitionLink";

const COLORS_TOP = [
    "#A69A93",
    "#8E7E76",
    "#756C67",
    "#2E2E2E"
];

export default function  AuroraHero () {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #131313 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden bg-black px-4 py-4 md:py-24 text-white"
        >
            <div className="relative z-10 flex flex-col items-center">

                <h1 className="font-Lausanne1000 max-w-7xl text-center text-4xl md:text-7xl tracking-tight leading-tight text-white">
                    Transforming ideas into seamless digital experiences
                </h1>
                <p className="font-Lausanne300 my-8 max-w-xl text-center text-sm md:text-xl opacity-50">
                    I design and build modern websites that help businesses thrive in the digital world, focusing on
                    clean design and exceptional user experience.
                </p>
                <motion.button
                    style={{
                        border,
                        boxShadow,
                    }}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-full bg-black px-6 py-3 text-lg text-white font-Lausanne300"
                >
                    <TransitionLink href={"/contact"}>Let's Talk</TransitionLink>
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
                </motion.button>
            </div>

        </motion.section>
    );
};