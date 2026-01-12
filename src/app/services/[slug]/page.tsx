"use client";

import { useParams, notFound } from "next/navigation";
import { SERVICES, CONTACT_INFO } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const service = SERVICES.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] opacity-10 blur-[120px] rounded-full -mr-64 -mt-32 ${service.color.split(' ')[0]}`} />

                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        href="/#services"
                        className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-brand-gold transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
                    </Link>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}
                        >
                            <service.icon className="w-10 h-10" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black mb-8 leading-tight text-foreground"
                        >
                            {service.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-12"
                        >
                            {service.detailedDescription}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-brand-navy/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 text-foreground">
                                Why Choose Our <span className="text-brand-gold">{service.title}</span>?
                            </h2>
                            <div className="space-y-6">
                                {service.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                                        </div>
                                        <span className="text-lg text-slate-600 dark:text-slate-300">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass p-12 rounded-[3rem] border border-black/5 dark:border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-brand-gold/5 blur-[100px] -z-10" />
                            <h3 className="text-2xl font-bold mb-6 text-foreground">Need expert advice?</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                Connect with our team to discuss how our {service.title} services
                                can be tailored to meet your specific business objectives.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="w-full py-4 bg-white text-brand-charcoal font-black rounded-xl hover:bg-brand-gold transition-all flex items-center justify-center gap-3"
                                >
                                    <MessageSquare className="w-5 h-5" /> Schedule a Consultation
                                </a>
                                <p className="text-center text-sm text-slate-500">
                                    Or call us at <span className="text-foreground font-bold">{CONTACT_INFO.phone}</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Graphic Design Showcase */}
                    {service.slug === 'graphic-design' && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-32"
                        >
                            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-foreground">
                                Design <span className="text-brand-gold">Showcase</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group">
                                        <Image
                                            src="/brand_identity_mockup.png"
                                            alt="Brand Identity Mockup"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold px-4">Premium Brand Identity</h4>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group">
                                        <Image
                                            src="/logo_design_concepts.png"
                                            alt="Logo Design Concepts"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold px-4 text-foreground">Minimalist Logo Concepts</h4>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Frequently Asked Questions */}
            {service.faqs && service.faqs.length > 0 && (
                <section className="py-24 bg-brand-navy/5">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
                                Service <span className="text-brand-gold">FAQs</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400">Everything you need to know about our {service.title} process.</p>
                        </div>

                        <div className="space-y-6">
                            {service.faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 glass rounded-3xl border border-black/5 dark:border-white/5"
                                >
                                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-brand-gold text-sm font-black">?</span>
                                        </div>
                                        {faq.q}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed pl-11">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Call to Action */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 text-foreground">
                        Ready to get <span className="text-gradient">started</span>?
                    </h2>
                    <Link
                        href="/#contact"
                        className="px-12 py-6 bg-brand-gold text-brand-charcoal font-black rounded-full hover:bg-white transition-all shadow-2xl shadow-brand-gold/20 inline-block text-lg"
                    >
                        Start Your Project Now
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
