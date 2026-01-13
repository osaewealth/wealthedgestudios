"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { CONTACT_INFO, SERVICES } from "@/lib/constants";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-brand-charcoal border-t border-black/5 dark:border-white/5 pt-24 pb-12 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-8">
                            <Image
                                src="/logo.png?v=2"
                                alt="Wealth Edge Studios Logo"
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain"
                            />
                            <span className="text-xl font-black tracking-tighter text-foreground uppercase">
                                Wealth Edge <span className="text-brand-gold">Studios</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Premium digital agency based in Ghana. We craft high-end websites,
                            strategic SEO, and powerful digital brands that drive results.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 glass rounded-full flex items-center justify-center border border-black/5 dark:border-white/5 hover:border-brand-gold/30 hover:text-brand-gold transition-all text-foreground"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-8 uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-4">
                            {SERVICES.slice(0, 4).map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/services/${service.slug}`} className="text-slate-500 hover:text-brand-gold transition-colors text-sm">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-8 uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-slate-500 hover:text-brand-gold transition-colors text-sm">Our Story</Link></li>
                            <li><Link href="/ceo" className="text-slate-500 hover:text-brand-gold transition-colors text-sm">Founder Profile</Link></li>
                            <li><Link href="/portfolio" className="text-slate-500 hover:text-brand-gold transition-colors text-sm">Masterpieces</Link></li>
                            <li><Link href="/pricing" className="text-slate-500 hover:text-brand-gold transition-colors text-sm">Investment Plans</Link></li>
                            <li><Link href="/contact" className="text-slate-500 hover:text-brand-gold transition-colors text-sm">Get Started</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-8 uppercase tracking-widest text-xs">Contact Hub</h4>
                        <ul className="space-y-4">
                            <li className="text-slate-500 text-sm flex items-center gap-2">
                                <span className="text-brand-gold font-bold">E:</span> {CONTACT_INFO.email}
                            </li>
                            <li className="text-slate-500 text-sm flex items-center gap-2">
                                <span className="text-brand-gold font-bold">P:</span> +233 {CONTACT_INFO.phone}
                            </li>
                            <li className="text-slate-500 text-sm flex items-center gap-2">
                                <span className="text-brand-gold font-bold">L:</span> {CONTACT_INFO.address}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/5 dark:border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Wealth Edge Studios. All rights reserved.
                        <span className="mx-2">|</span>
                        <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 glass rounded-full flex items-center justify-center border border-black/5 dark:border-white/5 hover:border-brand-gold/50 transition-all text-brand-gold"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
