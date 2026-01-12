import Navigation from "@/components/layout/Navigation";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen">
            <Navigation />
            <div className="pt-24">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground uppercase tracking-tighter">
                        About <span className="text-brand-gold">Our Vision</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Wealth Edge Studios is more than a digital agency. We are a team of visionary creators dedicated to pushing the boundaries of what&apos;s possible online.
                    </p>
                </div>
                <About />
            </div>
            <Footer />
        </main>
    );
}
