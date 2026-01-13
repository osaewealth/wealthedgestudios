"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[100px] rounded-full -mr-64 -mt-64" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-8 text-foreground"
                        >
                            Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 dark:text-slate-400 mb-12"
                        >
                            Ready to take your digital presence to the next level? Our team of
                            experts is here to turn your vision into a reality. Reach out today
                            and let&apos;s start the conversation.
                        </motion.p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-black/5 dark:border-white/10">
                                    <Mail className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">Email Us</p>
                                    <p className="text-foreground font-bold text-lg">{CONTACT_INFO.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-black/5 dark:border-white/10">
                                    <Phone className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">Call Us</p>
                                    <p className="text-foreground font-bold text-lg">{CONTACT_INFO.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-black/5 dark:border-white/10">
                                    <MapPin className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">Visit Us</p>
                                    <p className="text-foreground font-bold text-lg">{CONTACT_INFO.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 glass rounded-3xl border border-black/5 dark:border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 dark:text-slate-300 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-2xl focus:border-brand-gold/50 outline-none transition-all text-black dark:text-white placeholder:text-slate-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 dark:text-slate-300 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-2xl focus:border-brand-gold/50 outline-none transition-all text-black dark:text-white placeholder:text-slate-400"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-300 ml-1">Service Interested In</label>
                                <select className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl focus:border-brand-gold/50 outline-none transition-all text-foreground appearance-none">
                                    <option className="bg-white dark:bg-[#0A0A0A] text-black dark:text-white">Web Development</option>
                                    <option className="bg-white dark:bg-[#0A0A0A] text-black dark:text-white">SEO Optimization</option>
                                    <option className="bg-white dark:bg-[#0A0A0A] text-black dark:text-white">Brand Identity</option>
                                    <option className="bg-white dark:bg-[#0A0A0A] text-black dark:text-white">Digital Strategy</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-300 ml-1">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-6 py-4 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-2xl focus:border-brand-gold/50 outline-none transition-all text-black dark:text-white placeholder:text-slate-400 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-brand-gold text-brand-charcoal font-black rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 group"
                            >
                                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
