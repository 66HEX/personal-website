export default function backgroundOverlay() {
    return (
        <div className="absolute -z-10 w-full h-full bg-black">

            {/* Top gradient - subtle blue/teal tones */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-cyan-950/20"/>

            {/* Middle gradient - deep blacks */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-transparent"/>

            {/* Bottom gradient - rich browns */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-950/20"/>

            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.1)_10%,_rgba(0,0,0,1)_100%)]"/>

        </div>
    );
};