import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CEOProfile from "@/components/sections/CEOProfile";

export default function CEOPage() {
    return (
        <main className="relative bg-background overflow-hidden font-body selection:bg-brand-gold selection:text-brand-charcoal min-h-screen">
            <Navigation />

            {/* Banner / Space for Nav */}
            <div className="pt-32" />

            <CEOProfile />

            <Footer />
        </main>
    );
}
