"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function Services({ limit }: { limit?: number }) {
    const displayServices = limit ? SERVICES.slice(0, limit) : SERVICES;

    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            {/* Subtle Grid Backdrop */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        Digital <span className="text-brand-gold">Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        We provide a comprehensive suite of digital services designed to elevate
                        your business and create a lasting online presence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 glass rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-gold/30 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${service.color}`}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors text-foreground">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link
                                href={`/services/${service.slug}`}
                                className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold hover:text-foreground transition-colors group/link"
                            >
                                Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
