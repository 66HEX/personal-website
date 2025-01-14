export default function BackgroundOverlay() {
    return (
        <div className="absolute -z-10 w-full h-full bg-background">

            {/* Radial gradient - background */}
            <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_center,transparent_0%,transparent_40%,black_70%)]"/>
        </div>
    );
};