import { useState } from "react";

const passportImg =
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80";
const cafeImg =
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80";
const coastImg =
    "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80";

const desertImg = 
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80";

export default function FirstRightSection() {
    const [hovered, setHovered] = useState(null);

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: "#FFFDF9" }} // Fixed: Removed duplicate "#"
        >
            {/* Collage Container */}
            <div className="relative" style={{ width: "680px", height: "500px" }}>

                {/* TOP LEFT — Passport (dark bg, tilted left) */}
                <div
                    className="absolute"
                    style={{
                        top: "30px",
                        left: "30px",
                        width: "220px",
                        height: "210px",
                        zIndex: hovered === "passport" ? 20 : 2,
                    }}
                    onMouseEnter={() => setHovered("passport")}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div
                        className="w-full h-full overflow-hidden shadow-2xl transition-all duration-300 ease-out"
                        style={{
                            borderRadius: "16px",
                            transform:
                                hovered === "passport"
                                    ? "rotate(-1deg) scale(1.05)"
                                    : "rotate(-4deg)",
                        }}
                    >
                        {/* Dark background behind passport */}
                        <div
                            className="w-full h-full relative"
                            style={{ backgroundColor: "#1a1a1a" }}
                        >
                            <img
                                src={passportImg}
                                alt="Passport with travel stamps"
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                    </div>
                </div>

                {/* TOP RIGHT — Café (large, slightly tilted right) */}
                <div
                    className="absolute"
                    style={{
                        top: "0px",
                        right: "10px",
                        width: "340px",
                        height: "270px",
                        zIndex: hovered === "cafe" ? 20 : 3,
                    }}
                    onMouseEnter={() => setHovered("cafe")}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div
                        className="w-full h-full overflow-hidden shadow-2xl transition-all duration-300 ease-out"
                        style={{
                            borderRadius: "20px",
                            transform:
                                hovered === "cafe"
                                    ? "rotate(0.5deg) scale(1.04)"
                                    : "rotate(2deg)",
                        }}
                    >
                        <img
                            src={cafeImg}
                            alt="Café table with coffee and croissant"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* BOTTOM LEFT — Italian Coast (overlaps passport slightly) */}
                <div
                    className="absolute"
                    style={{
                        bottom: "10px",
                        left: "55px",
                        width: "300px",
                        height: "220px",
                        zIndex: hovered === "coast" ? 20 : 4,
                    }}
                    onMouseEnter={() => setHovered("coast")}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div
                        className="w-full h-full overflow-hidden shadow-xl transition-all duration-300 ease-out"
                        style={{
                            borderRadius: "20px",
                            transform:
                                hovered === "coast"
                                    ? "rotate(0.5deg) scale(1.04)"
                                    : "rotate(-2deg)",
                        }}
                    >
                        <img
                            src={coastImg}
                            alt="Italian coastal village with colourful buildings"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* BOTTOM RIGHT — Desert Van */}
                <div
                    className="absolute"
                    style={{
                        bottom: "20px",
                        left: "335px",
                        width: "190px",
                        height: "185px",
                        zIndex: hovered === "desert" ? 20 : 5, 
                    }}
                    onMouseEnter={() => setHovered("desert")}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div
                        className="w-full h-full flex items-center justify-center shadow-lg transition-all duration-300 ease-out cursor-pointer "
                        style={{
                            borderRadius: "20px",
                            backgroundColor: "#FAE4E4",
                            overflow:"hidden",
                            transform:
                                hovered === "desert"
                                    ? "rotate(-0.5deg) scale(1.06)"
                                    : "rotate(1.5deg)",
                        }}
                    >
                        <img
                            src={desertImg}
                            alt="yellow Volkswagen van on road"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}