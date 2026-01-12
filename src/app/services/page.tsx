import Navigation from "@/components/layout/Navigation";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
    return (
        <main className="bg-background min-h-screen">
            <Navigation />
            <div className="pt-24">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground uppercase tracking-tighter">
                        Our <span className="text-brand-gold">Services</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Comprehensive digital solutions tailored for high-growth businesses and premium brands in Ghana and beyond.
                    </p>
                </div>
                <Services />
            </div>
            <Footer />
        </main>
    );
}
