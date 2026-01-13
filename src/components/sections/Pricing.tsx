"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { PRICING_PLANS, MAINTENANCE_PLANS } from "@/lib/constants";
import Link from "next/link";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        Flexible <span className="text-brand-gold">Pricing</span> Plans
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Premium digital solutions at competitive rates. Choose the plan that
                        perfectly fits your business scale and goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRICING_PLANS.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl border transition-all ${plan.popular
                                ? "bg-brand-navy dark:bg-brand-navy border-brand-gold shadow-2xl shadow-brand-gold/10 scale-105 z-20"
                                : "glass border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 z-10"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold text-brand-charcoal text-xs font-bold rounded-full uppercase tracking-widest">
                                    Recommendation
                                </span>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-brand-gold">GH¢{plan.price}</span>
                                    <span className="text-slate-500 dark:text-slate-400 text-sm">/ project</span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Starting from ${plan.dollars}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-foreground/80 dark:text-slate-300 text-sm">
                                        <Check className="w-5 h-5 text-brand-gold flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular
                                    ? "bg-brand-gold text-brand-charcoal hover:bg-foreground hover:text-background"
                                    : "glass text-foreground hover:bg-brand-gold hover:text-brand-charcoal"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Maintenance Section */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black mb-4"
                        >
                            Website <span className="text-brand-gold">Maintenance</span> Plans
                        </motion.h2>
                        <p className="text-slate-500 dark:text-slate-400">Regular technical audits, security updates, and performance tuning.</p>

                        <div className="flex justify-center mt-8">
                            <Link href="/services/website-maintenance" className="text-brand-gold text-sm font-bold hover:underline flex items-center gap-2">
                                Learn more about maintenance security <ExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {MAINTENANCE_PLANS.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border glass border-black/5 dark:border-white/5 hover:border-brand-gold/30 transition-all ${plan.popular ? "ring-2 ring-brand-gold/50" : ""}`}
                            >
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-brand-gold">GH¢{plan.price}</span>
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">/ mo</span>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Approx. ${plan.dollars}/month</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-slate-500 dark:text-slate-300 text-xs">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-3 rounded-xl border border-border text-foreground font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-all text-sm">
                                    {plan.cta}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
