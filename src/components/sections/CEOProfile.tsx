"use client";

import { motion } from "framer-motion";
import { CEO_DATA } from "@/lib/constants";
import {
    Mail,
    Phone,
    MapPin,
    Smartphone,
    Camera,
    Briefcase,
    Award,
    Code2,
    Globe,
    Palette,
    Github,
    Twitter,
    Linkedin,
    ExternalLink,
    ArrowLeft,
    MessageCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, any> = {
    Globe: Globe,
    Palette: Palette,
};

export default function CEOProfile() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative">
                <div className="mb-12">
                    <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-gold transition-colors group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column: Essential Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:sticky lg:top-32 w-full lg:w-1/3"
                    >
                        <div className="glass rounded-[3rem] p-8 border border-border overflow-hidden relative group">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8">
                                <Image
                                    src={CEO_DATA.image || ""}
                                    alt={CEO_DATA.name}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    placeholder="blur"
                                    quality={60}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <h1 className="text-3xl font-black mb-1 text-foreground">{CEO_DATA.name}</h1>
                            <p className="text-brand-gold font-bold text-sm mb-6 uppercase tracking-widest">{CEO_DATA.role}</p>

                            <div className="space-y-4 pt-6 border-t border-border">
                                <div className="flex items-center gap-4 text-xs group/link">
                                    <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-brand-gold group-hover/link:bg-brand-gold group-hover/link:text-brand-charcoal transition-all">
                                        <Mail size={14} />
                                    </div>
                                    <span className="text-slate-500 font-medium">{CEO_DATA.email}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs group/link">
                                    <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-brand-gold group-hover/link:bg-brand-gold group-hover/link:text-brand-charcoal transition-all">
                                        <Phone size={14} />
                                    </div>
                                    <span className="text-slate-500 font-medium">{CEO_DATA.phone}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs group/link">
                                    <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-brand-gold group-hover/link:bg-brand-gold group-hover/link:text-brand-charcoal transition-all">
                                        <MapPin size={14} />
                                    </div>
                                    <span className="text-slate-500 font-medium">{CEO_DATA.location}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-8">
                                <Link href="https://github.com/andrewosae" target="_blank" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/50 transition-all">
                                    <Github size={18} />
                                </Link>
                                <Link href="https://x.com/iamsuingjuju" target="_blank" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/50 transition-all">
                                    <Twitter size={18} />
                                </Link>
                                <Link href="https://linkedin.com/in/andrewosae" target="_blank" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/50 transition-all">
                                    <Linkedin size={18} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Narrative & Details */}
                    <div className="flex-1 space-y-20">
                        {/* Bio Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-4xl font-black mb-8">About <span className="text-brand-gold">Me</span></h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-12">
                                {CEO_DATA.bio}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {CEO_DATA.whatImDoing.map((item, i) => {
                                    const Icon = iconMap[item.icon] || Briefcase;
                                    return (
                                        <div key={i} className="glass p-8 rounded-3xl border border-border group hover:border-brand-gold/30 transition-all">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                                                <Icon size={24} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Core Competencies */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-foreground">
                                <Award className="text-brand-gold" /> Core Competencies
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {CEO_DATA.competencies.map((comp, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-border/50 text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                                        <p className="text-slate-500 text-sm leading-relaxed">{comp}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Skills & Experience */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                            {/* Experience */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
                                    <Briefcase className="text-brand-gold" /> Career Path
                                </h2>
                                <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-gold/20">
                                    {CEO_DATA.experience.map((exp, i) => (
                                        <div key={i} className="relative pl-10 group">
                                            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full glass border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-brand-gold group-hover:bg-brand-charcoal" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1 block">{exp.period}</span>
                                            <h3 className="text-lg font-bold mb-1 text-foreground">{exp.role}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{exp.company}</p>
                                            {exp.details && <p className="text-slate-500 text-xs leading-relaxed">{exp.details}</p>}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tech Skills */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-foreground">
                                    <Code2 className="text-brand-gold" /> Technical Mastery
                                </h2>
                                <div className="glass p-8 rounded-[2.5rem] border border-border space-y-6">
                                    {CEO_DATA.technicalSkills.map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-bold text-slate-500 dark:text-slate-300">{skill.name}</span>
                                                <span className="text-xs font-black text-brand-gold">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="h-full bg-brand-gold"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
