import { useEffect, useState } from "react";
import { Compass, Sun, Plane, MapPin, CloudCheck } from "lucide-react";

export default function ThirdLeftSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(t);
    }, []);

    const rowStyle = (delay) => ({
        transitionDelay: mounted ? `${delay}ms` : "0ms",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(12px)",
    });

    return (
        <div className=" flex items-center justify-center w-110 shadow-2xl rounded-2xl">
            <div className="w-full">
                <style>{`
          @keyframes drawRoute {
            to { stroke-dashoffset: 0; }
          }
          .route-path {
            stroke-dasharray: 220;
            stroke-dashoffset: 220;
            animation: drawRoute 1.2s ease-out forwards;
            animation-delay: 0.7s;
          }
        `}</style>

                <div
                    className={`bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden transition-all duration-500 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#FFF0EE]">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>

                    <div className="p-4">
                        <div
                            className="flex items-center gap-3 mb-4 transition-all duration-500 ease-out"
                            style={rowStyle(0)}
                        >
                            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                                <Compass className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-medium hero-heading text-stone-900">Your Kyoto trip</p>
                                <p className="text-xs text-stone-500">Day 2 of 5</p>
                            </div>
                        </div>

                        <div className="mb-4 transition-all duration-500 ease-out" style={rowStyle(120)}>
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <span className="relative flex w-1.5 h-1.5">
                                    <span className="absolute inline-flex w-full h-full rounded-full bg-orange-400 animate-ping opacity-75" />
                                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-orange-500" />
                                </span>
                                <p className="text-xs text-stone-500">Live weather and flight status</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1 bg-[#FFF0EE] rounded-lg py-2.5 text-center transition-colors duration-200 hover:bg-[#ffd6d1]">
                                    <Sun className="w-4 h-4 text-orange-500 mx-auto" />
                                    <p className="text-xs font-medium text-orange-900 mt-1">22°C, clear</p>
                                </div>
                                <div className="flex-1 bg-[#FFF0EE] rounded-lg py-2.5 text-center transition-colors duration-200 hover:bg-[#ffd6d1]">
                                    <Plane className="w-4 h-4 text-orange-500 mx-auto" />
                                    <p className="text-xs font-medium text-orange-900 mt-1">NH205 on time</p>
                                </div>
                            </div>
                        </div>

                       

                        <div className="border-t border-[#FFF0EE] mb-4" />

                        <div className="mb-4 transition-all duration-500 ease-out" style={rowStyle(360)}>
                            <p className="text-xs text-stone-500 mb-1.5">Travel group</p>
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-orange-200 text-orange-900 text-xs font-medium flex items-center justify-center ring-2 ring-white">
                                        A
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-orange-300 text-orange-900 text-xs font-medium flex items-center justify-center ring-2 ring-white -ml-1.5">
                                        M
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-medium flex items-center justify-center ring-2 ring-white -ml-1.5">
                                        S
                                    </div>
                                    <p className="text-xs text-stone-500 ml-2">4 traveling</p>
                                </div>
                                <div className="text-xs font-medium text-orange-900 bg-[#FFF0EE] px-2.5 py-1 rounded-full transition-colors duration-200 hover:bg-[#ffd6d1]">
                                    ₹3,200 / person
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[#FFF0EE] mb-4" />

                        <div className="transition-all duration-500 ease-out" style={rowStyle(480)}>
                            <p className="text-xs text-stone-500 mb-1.5">Map for this leg</p>
                            <div className="flex items-center gap-2.5">
                                <svg viewBox="0 0 160 56" className="flex-1 rounded-lg bg-[#FFF0EE]">
                                    <path
                                        d="M14,40 C45,12 75,46 105,18 S140,30 148,14"
                                        fill="none"
                                        stroke="#f97316"
                                        strokeWidth="2"
                                        className={mounted ? "route-path" : ""}
                                    />
                                    <circle cx="14" cy="40" r="4" fill="#f97316" />
                                    <circle cx="105" cy="18" r="3" fill="#7c2d12" />
                                    <circle cx="148" cy="14" r="3" fill="#7c2d12" />
                                </svg>
                                <div className="text-center shrink-0 w-16">
                                    <CloudCheck className="w-4 h-4 text-orange-500 mx-auto" />
                                    <p className="text-xs font-medium text-orange-900 mt-1 leading-tight">Offline ready</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}