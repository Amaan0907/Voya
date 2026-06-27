import { useEffect, useState } from "react";

const LINKS = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" }
];

const MenuIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
);

const XIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const ArrowRightIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
    </svg>
);

export default function ModernNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Product");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-transparent backdrop-blur-lg border-b border-none rounded-2xl w-[80vw] left-1/2 -translate-x-1/2 mt-4"
                    : " border-b border-transparent bg-[#FFF8F5]"
                    }`}
            >
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    
                    <a href="#" className="flex items-center gap-2 group">
                        <span className="h-2 w-2 rounded-full bg-amber-900 group-hover:scale-125 transition-transform" />
                        <span className="text-3xl font-bold tracking-tight text-amber-900">
                            Voya
                        </span>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-1 ">
                        {LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => setActive(link.label)}
                                    className="relative px-4 py-2 text-md font-medium text-gray-800 hover:text-amber-900 transition-colors"
                                >
                                    {link.label}
                                    <span
                                        className={`absolute left-4 right-4 -bottom-px h-px bg-[#964900] transition-opacity duration-200 ${active === link.label ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        
                        <a
                            href="#start"
                            className="group inline-flex items-center gap-1.5 rounded-full bg-[#F57C00] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-bg-[#f48d26] hover:bg-[#f48d26] transition-colors"
                        >
                            Sign in
                            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 text-gray-800 hover:text-[#964900]"
                        aria-label="Toggle menu"
                    >
                        {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                    </button>
                </nav>

                {/* Mobile menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"
                        }`}
                >
                    <ul className="flex flex-col gap-1 px-6 pb-6">
                        {LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => {
                                        setActive(link.label);
                                        setOpen(false);
                                    }}
                                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active === link.label
                                        ? "bg-[#edd1c5] text-[#964900]"
                                        : "text-zinc-900 hover:bg-[#FFF8F5] hover:text-[#964900]"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <a
                            href="#start"
                            className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F57C00] px-4 py-2 text-sm font-semibold text-white"
                        >
                            Get started
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                        </a>
                    </ul>
                </div>
            </header>
        </>
    );
}