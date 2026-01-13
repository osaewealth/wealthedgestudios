"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const SLIDES = [
    {
        id: "01",
        title: "ELITE WEB",
        subtitle: "ENGINEERING",
        description: "High-performance, custom-built websites using the latest technologies. We engineer digital experiences that are fast, intuitive, and built to scale.",
        image: "/img/newelitewebpicture.jpg?v=1",
        label: "// Web Development Excellence"
    },
    {
        id: "02",
        title: "STRATEGIC",
        subtitle: "SEO DOMINANCE",
        description: "Drive organic traffic and dominate search results with our advanced SEO strategies. We ensure your brand commands the attention it deserves.",
        image: "/img/digitalpresencenew.jpg?v=1",
        label: "// Advanced Search Engine Optimization"
    },
    {
        id: "03",
        title: "PREMIUM",
        subtitle: "BRAND DESIGN",
        description: "Forging powerful visual identities and narratives that resonate with your audience and build immediate trust across all digital touchpoints.",
        image: "/img/brandingnew.jpg?v=1",
        label: "// Strategic Visual Identity"
    },
    {
        id: "04",
        title: "E-COMMERCE",
        subtitle: "POWERHOUSES",
        description: "Building secure and scalable e-commerce platforms with seamless payment gateway integrations to turn your clicks into sustainable cash flow.",
        image: "/img/ecommerceimage.jpg?v=1",
        label: "// High-Conversion Retail"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
    const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-brand-charcoal">
            {/* Preload all hero images to prevent lag */}
            <div className="hidden">
                {SLIDES.map((slide) => (
                    <Image
                        key={slide.id}
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        sizes="1px"
                    />
                ))}
            </div>

            <AnimatePresence mode="popLayout">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Sharpening Filter */}
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src={SLIDES[current].image}
                            alt={SLIDES[current].title}
                            fill
                            className="object-cover contrast-[1.1] brightness-[0.8] saturate-[1.1]"
                            priority
                        />
                    </div>

                    {/* Dark Overlay - Adjusted for better contrast with text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-brand-charcoal/40 to-transparent z-0" />

                    {/* Geometric Overlays */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-60 z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.polygon
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            points="0,0 40,0 25,100 0,100"
                            className="fill-brand-gold/10"
                        />
                        <motion.polygon
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            points="100,0 70,0 85,100 100,100"
                            className="fill-brand-navy/20"
                        />
                    </svg>

                    {/* Content Container */}
                    <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
                        <div className="max-w-4xl">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-brand-gold font-mono text-sm md:text-base tracking-[0.2em] mb-6"
                            >
                                {SLIDES[current].label}
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-5xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-white mb-8"
                            >
                                {SLIDES[current].title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10 decoration-brand-gold decoration-4 underline-offset-[20px]">
                                    {SLIDES[current].subtitle}
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-slate-200 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
                            >
                                {SLIDES[current].description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="flex items-center gap-8"
                            >
                                <Link href="/services">
                                    <button className="px-10 py-5 bg-brand-gold text-brand-charcoal font-black rounded-sm hover:scale-105 transition-all shadow-2xl flex items-center gap-3 group uppercase tracking-widest text-sm">
                                        Explore Solutions
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slider Navigation */}
            <div className="absolute bottom-12 left-0 right-0 z-30">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-white font-black tracking-widest text-lg">
                            <button onClick={prev} className="hover:text-brand-gold transition-colors">
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <span className="text-brand-gold">{SLIDES[current].id}</span>
                            <span className="opacity-30">/</span>
                            <span className="opacity-50">0{SLIDES.length}</span>
                            <button onClick={next} className="hover:text-brand-gold transition-colors">
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="hidden md:flex w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                key={current}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 8, ease: "linear" }}
                                className="h-full bg-brand-gold"
                            />
                        </div>
                    </div>

                    {/* Quick Select Indicators */}
                    <div className="flex gap-3">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-12 h-1 rounded-full bg-white transition-all duration-500 ${current === i ? "opacity-100 w-16 bg-brand-gold" : "opacity-20"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Aesthetic Grain Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.015] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}
