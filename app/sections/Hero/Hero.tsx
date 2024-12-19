"use client";

import ThreeScene from "@/app/components/Scene/Scene";


export default function Hero() {


    return (
        <div className="relative w-screen h-svh bg-offwhitebackground text-offblacktext p-4 md:p-24 flex flex-col items-center justify-center">
            <div className="w-full h-full rounded-custom overflow-hidden">
                <ThreeScene />
            </div>
        </div>
    );
}