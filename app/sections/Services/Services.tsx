import { services } from "@/app/data/servicesData";

export default function Services() {

    return (
        <section className="px-4 lg:px-24 pt-12 mb-24 lg:py-24 text-white">
            <div className="flex items-center justify-between w-full mb-8">
                <h2
                    className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none"
                >
                    Services
                    <sup className="text-xs md:text-sm tracking-normal align-top opacity-50 ml-1">
                        ({String(services.length).padStart(2, "0")})
                    </sup>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={service.title}
                        className="group bg-white/[0.025] border border-white/5 rounded-custom p-6 xl:p-8 backdrop-blur-sm"
                    >
                        <div className="flex flex-col h-full">
                            <div className="mb-6">{service.icon}</div>

                            <h3 className="text-xl font-[750] tracking-tight leading-none uppercase mb-4">
                                {service.title}
                            </h3>

                            <p className="text-sm md:text-base font-[400] tracking-tight text-white/50 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}