export default function HeroOverlay() {
    return (
        <div className="absolute -z-10 w-full h-full bg-background">

            {/* Navbar - subtle blue/teal tones */}
            <div className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 90% 50% at 50% -17%, rgba(255, 255, 255, 0.5) 0%, transparent 70%)'
                }}
            />

            {/* Radial gradient - background */}
            <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_center,transparent_0%,transparent_40%,black_70%)]"/>
        </div>
    );
}