"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Founder", href: "/ceo" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== "/"
                    ? "py-4 glass border-b border-black/5 dark:border-white/10 shadow-lg shadow-black/[0.03]"
                    : "py-6 bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Wealth Edge Studios Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                        />
                        <span className={`text-xl font-black tracking-tighter uppercase transition-colors ${isScrolled || pathname !== "/" ? "text-foreground" : "text-white"}`}>
                            Wealth Edge <span className="text-brand-gold">Studios</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${pathname.startsWith('/services')
                                    ? 'text-brand-gold'
                                    : isScrolled || pathname !== "/"
                                        ? 'text-slate-500 dark:text-slate-300 hover:text-brand-gold'
                                        : 'text-white/90 hover:text-brand-gold'
                                }`}>
                                Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] glass border border-white/10 rounded-[2.5rem] p-8 grid grid-cols-2 gap-x-6 gap-y-4 shadow-2xl"
                                    >
                                        <div className="col-span-2 mb-4 border-b border-black/5 dark:border-white/5 pb-4">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Our Digital Ecosystem</p>
                                        </div>
                                        {SERVICES.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                className="flex items-start gap-4 p-4 rounded-3xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5"
                                            >
                                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${service.color}`}>
                                                    <service.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-foreground font-bold text-sm mb-1 group-hover/item:text-brand-gold transition-colors">{service.title}</p>
                                                    <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">{service.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                        <div className="col-span-2 pt-6 mt-2 border-t border-white/5">
                                            <Link href="/services" className="text-xs font-black text-center block text-slate-400 hover:text-brand-gold transition-colors uppercase tracking-widest">
                                                Discover The Full Edge Portfolio
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-bold transition-colors ${pathname === link.href
                                    ? "text-brand-gold"
                                    : isScrolled || pathname !== "/"
                                        ? "text-slate-500 dark:text-slate-300 hover:text-brand-gold"
                                        : "text-white/90 hover:text-brand-gold"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="px-6 py-2.5 text-sm font-black bg-brand-gold text-brand-charcoal rounded-full hover:bg-white transition-all shadow-lg shadow-brand-gold/10"
                        >
                            Get Started
                        </Link>
                        <ThemeToggle />
                    </div>

                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-32 px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Navigation</p>
                                <ThemeToggle />
                            </div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-3xl font-black transition-colors ${pathname === link.href ? "text-brand-gold" : "text-foreground hover:text-brand-gold"
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-8 mb-2">Our Services</p>
                            <div className="grid grid-cols-1 gap-4">
                                {SERVICES.map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="flex items-center gap-4 p-4 glass border border-black/5 dark:border-white/5 rounded-2xl"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${service.color}`}>
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-foreground font-bold">{service.title}</span>
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="mt-12 px-10 py-5 bg-brand-gold text-brand-charcoal text-xl font-black rounded-full text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
