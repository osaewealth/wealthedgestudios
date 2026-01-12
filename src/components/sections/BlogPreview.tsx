"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articles = [
    {
        title: "25 Steps For Complete Website Maintenance",
        excerpt: "The Internet is littered with broken websites that don’t work. This guide will make sure your website isn’t one of them.",
        date: "Feb 28, 2025",
        author: "Strategy Team",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        slug: "website-maintenance-guide"
    },
    {
        title: "How to easily accept PayPal in Ghana",
        excerpt: "Looking for a way to receive payments from international customers? Learn how to easily accept PayPal payments.",
        date: "Jan 07, 2025",
        author: "Tech Dept",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
        slug: "paypal-ghana-tutorial"
    },
    {
        title: "State of Ecommerce in Ghana: 2025 Report",
        excerpt: "What is the state of online shopping today? Who are the top players? Find out in our latest insightful report.",
        date: "Aug 29, 2024",
        author: "Data Analytics",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
        slug: "ecommerce-ghana-report"
    }
];

export default function BlogPreview() {
    return (
        <section className="py-24 bg-background overflow-hidden border-t border-black/5 dark:border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-brand-gold text-xs font-black uppercase tracking-widest mb-4 block">Digital Insights</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">Expert <span className="text-gradient">Articles</span></h2>
                        <p className="text-slate-500 dark:text-slate-400">Stay ahead of the competition with our latest strategies on design, SEO, and digital growth.</p>
                    </div>
                    <Link href="#" className="px-8 py-3 glass text-foreground dark:text-white font-bold rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all border border-black/5 dark:border-brand-gold/10">
                        View All Articles
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/5 hover:border-brand-gold/20 transition-all group flex flex-col h-full"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 px-4 py-1.5 bg-brand-gold text-brand-charcoal text-[10px] font-black rounded-full uppercase tracking-widest">
                                    Insights
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-brand-gold" /> {article.date}</span>
                                    <span className="flex items-center gap-1.5"><User size={12} className="text-brand-gold" /> {article.author}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-gold transition-colors line-clamp-2 text-foreground">{article.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-3">{article.excerpt}</p>

                                <div className="mt-auto">
                                    <Link href="#" className="inline-flex items-center gap-2 text-brand-gold font-black text-xs uppercase tracking-widest hover:gap-4 transition-all">
                                        Read Full Article <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
