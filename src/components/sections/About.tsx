"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { CEO_DATA } from "@/lib/constants";

export default function About() {
    return (
        <section id="about" className="py-24 bg-background relative border-t border-black/5 dark:border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 border-2 border-brand-gold rounded-3xl rotate-6 translate-x-4 translate-y-4" />
                            <div className="absolute inset-0 bg-brand-navy rounded-3xl" />
                            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                <Image
                                    src="/img/teammembers.jpg?v=1"
                                    alt="Our Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Stats overlay */}
                            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 shadow-2xl">
                                <p className="text-3xl font-black text-brand-gold">5+</p>
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-8 text-foreground"
                        >
                            Beyond Just Code. <br />
                            <span className="text-gradient">We Craft Value.</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 text-slate-500 dark:text-slate-400 text-lg leading-relaxed"
                        >
                            <p>
                                At Wealth Edge Studios, we believe that a website is more than
                                just a digital storefront—it&apos;s a powerful engine for business growth.
                                Born from a passion for excellence, we transitioned from a
                                successful personal portfolio to a full-scale digital agency.
                            </p>
                            <p>
                                Our mission is simple: to provide African businesses and global
                                partners with world-class digital tools that compete on the
                                international stage. We combine high-end aesthetics with
                                rock-solid engineering.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div>
                                    <h4 className="font-bold text-xl mb-1">2019</h4>
                                    <p className="text-sm text-slate-500 uppercase tracking-widest">Founded Year</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">500+</h4>
                                    <p className="text-sm text-slate-500 uppercase tracking-widest">Websites Managed</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Who We Are", desc: "WopeDigital is a leading digital agency in Accra, Ghana. Since 2010, we've helped hundreds of businesses establish a dominant online presence through world-class design and SEO." },
                        { title: "Our Mission", desc: "Our aim is to digitalize Africa and beyond. We believe every business deserves a digital identity that competes on the global stage, regardless of size or location." },
                        { title: "Client Experience", desc: "Our clients are our biggest fans. We've reached millions of people worldwide through thousands of successful online campaigns. Their growth is our primary success metric." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 glass rounded-3xl border border-black/5 dark:border-white/5"
                        >
                            <h3 className="text-2xl font-black mb-4 text-brand-gold">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Meet the Founder */}
                <div className="mt-40">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-50 dark:bg-white/[0.02] p-12 rounded-[3.5rem] border border-border overflow-hidden relative group">
                        <div className="flex-1">
                            <span className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-4 block">Our Captain</span>
                            <h2 className="text-4xl font-black mb-6 text-foreground">Meet <span className="text-brand-gold">{CEO_DATA.name}</span></h2>
                            <p className="text-slate-500 mb-8 max-w-xl text-lg leading-relaxed">
                                Our founder, {CEO_DATA.name}, is a visionary web developer with over 7 years of experience in the digital space.
                                He leads Wealth Edge Studios with a commitment to technical excellence and high-impact design.
                            </p>
                            <Link
                                href="/ceo"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-navy dark:bg-brand-gold text-foreground dark:text-brand-charcoal font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                            >
                                View Founder Profile <ExternalLink size={14} />
                            </Link>
                        </div>
                        <div className="w-full md:w-1/3 relative aspect-square">
                            <div className="absolute inset-0 bg-brand-gold/10 rounded-2xl blur-3xl group-hover:bg-brand-gold/20 transition-all duration-700" />
                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src={CEO_DATA.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"}
                                    alt={CEO_DATA.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mt-32">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">
                        Hear From <span className="text-brand-gold">Our Fans</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Kwame Mensah", role: "CEO, TechServe", text: "Wealth Edge transformed our digital presence in weeks. Their attention to detail and performance optimization is unmatched in the region." },
                            { name: "Abena Appiah", role: "Director, GreenRoots NGO", text: "Working with them was the best decision for our rebranding. They truly understand the African market and how to project it to the world." },
                            { name: "David Boateng", role: "Founder, LuxeRetail", text: "From SEO to custom development, they handle it all with elite precision. Our organic traffic has grown by 300% since we started." }
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 glass rounded-[2.5rem] border border-black/5 dark:border-white/10 relative"
                            >
                                <div className="text-brand-gold text-4xl font-serif mb-4">"</div>
                                <p className="font-medium mb-8 leading-relaxed italic text-foreground">{t.text}</p>
                                <div className="border-t border-black/5 dark:border-white/5 pt-6">
                                    <p className="font-bold text-foreground">{t.name}</p>
                                    <p className="text-slate-500 text-xs uppercase font-black tracking-widest">{t.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
