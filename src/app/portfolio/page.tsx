import Navigation from "@/components/layout/Navigation";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
    return (
        <main className="bg-background min-h-screen">
            <Navigation />
            <div className="pt-24">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 text-foreground uppercase tracking-tighter">
                        Digital <span className="text-brand-gold">Excellence.</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
                        Explore our gallery of award-winning digital experiences, custom engineering, and strategic brand transformations designed to dominate the market.
                    </p>
                </div>
                <Portfolio />
            </div>
            <Footer />
        </main>
    );
}
