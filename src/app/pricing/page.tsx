import Navigation from "@/components/layout/Navigation";
import Pricing from "@/components/sections/Pricing";
import PlanComparison from "@/components/sections/PlanComparison";
import Footer from "@/components/layout/Footer";

export default function PricingPage() {
    return (
        <main className="bg-background min-h-screen">
            <Navigation />
            <div className="pt-24">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground uppercase tracking-tighter">
                        Simple <span className="text-brand-gold">Pricing</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Transparent, performance-driven investment plans for your next digital masterpiece.
                    </p>
                </div>
                <Pricing />
                <PlanComparison />
            </div>
            <Footer />
        </main>
    );
}
