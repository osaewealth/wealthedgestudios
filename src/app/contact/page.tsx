import Navigation from "@/components/layout/Navigation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen">
            <Navigation />
            <div className="pt-24">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground uppercase tracking-tighter">
                        Get In <span className="text-brand-gold">Touch</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Ready to start your digital journey with Wealth Edge Studios? We&apos;re just a message away.
                    </p>
                </div>
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
