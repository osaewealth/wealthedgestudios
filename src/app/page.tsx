"use client";

import Hero from "@/components/sections/Hero";
import Navigation from "@/components/layout/Navigation";

import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Target, Award, Rocket, ArrowRight, CheckCircle2, Star, Search, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/constants";

import Image from "next/image";
import ecommerceImage from "@/assets/newecommerce.jpg";

export default function Home() {
  return (
    <main className="relative bg-background overflow-hidden font-body selection:bg-brand-gold selection:text-brand-charcoal">
      <Navigation />

      {/* High-Impact Hero */}
      <Hero />

      {/* Home Landing Content: Focus on Identity & Conversion */}
      <section className="py-24 bg-brand-navy/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold mb-6 border border-brand-gold/20 tracking-widest uppercase">
                The Wealth Edge Standard
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-foreground">
                We Forge <br />
                <span className="text-brand-gold">Digital Legacies.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                At Wealth Edge Studios, we transcend traditional agency models. We are architects of digital growth, blending high-end design with technical dominance to ensure your brand doesn't just exist—it leads.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link href="/about" className="inline-flex items-center gap-2 text-foreground font-bold hover:text-brand-gold transition-colors">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-foreground font-bold hover:text-brand-gold transition-colors">
                  View Impact <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-border pt-10">
                <div className="flex flex-col gap-2">
                  <div className="text-4xl font-black text-foreground">99%</div>
                  <div className="text-xs text-slate-500 uppercase font-black tracking-widest">Growth Retention</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-4xl font-black text-foreground">24/7</div>
                  <div className="text-xs text-slate-500 uppercase font-black tracking-widest">Global Operations</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-brand-gold/5 blur-[120px] -z-10 rounded-full" />
              {[
                { icon: Search, title: "Rank in Google", desc: "Be found in Google Search for your products and services and enjoy free advertising." },
                { icon: Zap, title: "Scale Your Biz", desc: "Automate processes, lead capture, and online payments with built-in growth tools." },
                { icon: Award, title: "Beat Rivals", desc: "Get an advantage over competitors by showing potential clients how professional you are." },
                { icon: ShieldCheck, title: "24/7 Access", desc: "Rain or shine, day or night, your website keeps working to help you gain and keep customers." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.3)' }}
                  className="p-8 glass rounded-[2.5rem] border border-white/5 transition-all"
                >
                  <item.icon className="w-10 h-10 text-brand-gold mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-background overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">World-Class Solutions</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">Our <span className="text-gradient">Core Services</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">From high-performance web engineering to strategic SEO and design, we provide the digital tools for global dominance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 glass rounded-[3rem] border border-white/5 hover:border-brand-gold/20 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-gold transition-colors text-foreground">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                  Deep Dive <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services" className="px-10 py-5 glass text-foreground font-bold rounded-full hover:bg-white/10 transition-all border border-border uppercase text-[10px] tracking-[0.2em] font-black">
              View The Full Performance Edge Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* E-commerce Powerhouse Section (Parity feature) */}
      <section className="py-24 bg-brand-navy/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <span className="text-brand-gold text-xs font-black uppercase tracking-widest mb-4 block">Store Specialization</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-foreground">
                The No. 1 <span className="text-brand-gold">Ecommerce</span> <br />
                Agency in the Region.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                We build eye-catching online stores that don't just look good—they sell. From automated SMS notifications to seamless payment gateway integrations, we turn your business into a 24/7 revenue machine.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-foreground font-black text-3xl mb-2">100%</h4>
                  <p className="text-slate-500 text-sm">Secure Transactions</p>
                </div>
                <div>
                  <h4 className="text-foreground font-black text-3xl mb-2">24/7</h4>
                  <p className="text-slate-500 text-sm">Automated Ordering</p>
                </div>
              </div>

              <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap">
                {/* Simulated Payment Gateways */}
                <div className="px-5 py-2 glass rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-400">Paystack</div>
                <div className="px-5 py-2 glass rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-400">Flutterwave</div>
                <div className="px-5 py-2 glass rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-400">PayPal</div>
                <div className="px-5 py-2 glass rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-400">Hubtel</div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="p-1 glass rounded-[4rem] border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl relative aspect-[4/3] w-full">
                <Image
                  src={ecommerceImage}
                  alt="Ecommerce Excellence"
                  fill
                  className="rounded-[3.8rem] object-cover"
                  placeholder="blur"
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 p-10 glass rounded-[2.5rem] border border-brand-gold/20 shadow-2xl backdrop-blur-3xl animate-float">
                <p className="text-brand-gold font-black text-4xl mb-1">GH¢7,500</p>
                <p className="text-foreground/50 text-[10px] font-black uppercase tracking-[0.2em]">Complete Store Build</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage Section */}
      <section className="py-24 bg-brand-navy/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -mr-32 -mt-32" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter text-foreground">
                Global Quality, <br />
                <span className="text-brand-gold">Local Edge.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xl mb-10 leading-relaxed max-w-xl">
                We combine the technical standards of Silicon Valley with a deep understanding of the African market. Our goal is to digitalize businesses and push them onto the world stage.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Built for speed and SEO authority",
                  "Secure infrastructure by design",
                  "Scalable for millions of users",
                  "24/7 dedicated agency support"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                    <span className="text-slate-600 dark:text-slate-200 text-lg font-bold">{text}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="px-12 py-6 bg-brand-navy dark:bg-brand-gold text-foreground dark:text-brand-charcoal font-black rounded-full hover:scale-105 transition-all shadow-xl text-lg inline-block">
                Become A Partner
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="p-10 glass rounded-[3rem] border border-black/5 dark:border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                <div className="flex gap-1 mb-8 text-brand-gold">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-2xl font-bold text-foreground mb-10 leading-relaxed italic">
                  "Wealth Edge Studios didn't just build us a website; they built us a digital machine. Our inquiries have tripled in three months."
                </p>
                <div className="flex items-center gap-5 border-t border-black/5 dark:border-white/5 pt-10">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/20 flex items-center justify-center font-black text-brand-gold text-lg uppercase">KM</div>
                  <div>
                    <p className="text-lg font-bold text-foreground">Kwame Mensah</p>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">CEO, TechServe Ghana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-gold text-xs font-black uppercase tracking-widest mb-4 block">Our Advantage</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">Why Many Businesses <span className="text-gradient">Choose Us</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">We combine elite technical standards with market-leading efficiency and results-driven strategies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Elite Experience",
                desc: "We have the best developers in the region. We've designed over 450 sites within the last 3 years alone, setting world-class standards.",
                stat: "450+"
              },
              {
                title: "Value Pricing",
                desc: "As a tier-one digital agency, we're efficient at keeping costs within budget while ensuring you receive the absolute best ROI.",
                stat: "Best ROI"
              },
              {
                title: "Rapid Delivery",
                desc: "We work fast! Most projects are 80% complete by the 4th working day, allowing for rapid review and launch schedules.",
                stat: "7 Days"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 glass rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-brand-gold/20 transition-all text-center"
              >
                <div className="text-4xl font-black text-brand-gold mb-4">{item.stat}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Core Values / Stats CTA Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-24 rounded-[4rem] text-center border border-black/5 dark:border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-gold/5 transition-opacity opacity-50 group-hover:opacity-100 blur-[100px] -z-10" />
            <span className="text-brand-gold font-black uppercase tracking-widest text-xs mb-8 block">Ready for the edge?</span>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none text-foreground">
              Start Your <span className="text-brand-gold">Transformation</span>.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 text-xl leading-relaxed">
              Explore our comprehensive services and industry-leading performance strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/services" className="px-12 py-6 bg-brand-gold text-brand-charcoal font-black rounded-full hover:bg-foreground hover:text-background hover:scale-105 transition-all shadow-2xl shadow-brand-gold/20">
                Explore Services
              </Link>
              <Link href="/contact" className="px-12 py-6 glass text-foreground font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all border border-border">
                Contact Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
