"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { PLAN_COMPARISON } from "@/lib/constants";

export default function PlanComparison() {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 block">Find The Perfect Plan For You</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 text-foreground"
                    >
                        Compare Plans
                    </motion.h2>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[1000px] mb-12">
                        {/* Table Header */}
                        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-slate-50 dark:bg-white py-6 px-10 rounded-t-xl border border-border">
                            <div className="text-slate-500 dark:text-slate-500 font-bold text-xs">Features</div>
                            {PLAN_COMPARISON.plans.map((plan, i) => (
                                <div key={i} className="text-center font-bold text-slate-900 dark:text-slate-900 text-sm">
                                    {plan}
                                </div>
                            ))}
                        </div>

                        {/* Table Body */}
                        <div className="border-x border-b border-border rounded-b-xl overflow-hidden">
                            {PLAN_COMPARISON.features.map((feature, i) => (
                                <div
                                    key={i}
                                    className={`grid grid-cols-[2fr_1fr_1fr_1fr] py-4 px-10 transition-colors ${i % 2 !== 0 ? "bg-white dark:bg-brand-charcoal" : "bg-slate-50 dark:bg-white/[0.04]"
                                        }`}
                                >
                                    <div className="text-slate-600 dark:text-slate-400 font-medium text-xs self-center">
                                        {feature.name}
                                    </div>
                                    {feature.values.map((val, idx) => (
                                        <div key={idx} className="flex justify-center items-center">
                                            {typeof val === "boolean" ? (
                                                val ? (
                                                    <Check className="w-4 h-4 text-green-500 font-black" />
                                                ) : (
                                                    <X className="w-4 h-4 text-red-500 font-black" />
                                                )
                                            ) : (
                                                <span className="text-foreground/80 dark:text-slate-300 font-bold text-xs">{val}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-500 text-[10px] font-bold mb-6">Learn more about each feature listed</p>
                    <button className="px-14 py-4 bg-brand-navy dark:bg-brand-gold text-foreground dark:text-brand-charcoal font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                        Website Features
                    </button>

                    <div className="mt-20">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Testimonials</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
