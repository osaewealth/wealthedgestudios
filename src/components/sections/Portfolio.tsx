"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";

export default function Portfolio({ limit }: { limit?: number }) {
    const displayProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

    return (
        <section id="portfolio" className="py-24 bg-background relative border-t border-black/5 dark:border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-4"
                        >
                            Our <span className="text-gradient">Masterpieces</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 dark:text-slate-300"
                        >
                            We take pride in delivering exceptional digital experiences. Explore a
                            selection of our most recent and impactful company projects.
                        </motion.p>
                    </div>
                    {limit && (
                        <Link href="/portfolio">
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="px-8 py-3 glass text-foreground dark:text-white font-bold rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all border border-black/5 dark:border-brand-gold/10"
                            >
                                View All Projects
                            </motion.button>
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayProjects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group block"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                                <div className="absolute top-3 right-3 w-8 h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <ExternalLink className="w-4 h-4 text-brand-gold" />
                                </div>
                            </div>

                            <div className="px-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-brand-gold text-[9px] font-black uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                    <span className="text-slate-500 dark:text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                                        {project.industry}
                                    </span>
                                </div>
                                <h3 className="text-sm font-bold text-foreground group-hover:text-brand-gold transition-colors truncate">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
