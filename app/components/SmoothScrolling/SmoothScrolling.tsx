"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollingProps {
    children: ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
    return (
        <ReactLenis root options={{ lerp: 0.07, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
