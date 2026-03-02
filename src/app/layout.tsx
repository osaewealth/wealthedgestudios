import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wealthedgestudios.com"),
  title: {
    default: "Wealth Edge Studios | Website Development Agency in Ghana",
    template: "%s | Wealth Edge Studios"
  },
  description: "Wealth Edge Studios is a leading web design agency in Accra, providing world-class website development and digital growth services in Ghana. Led by Andrew Osae.",
  keywords: ["Website Development Agency in Ghana", "Web Design Agency in Accra", "Digital Growth Agency Ghana", "Andrew Osae", "Wealth Edge Studios", "UI/UX Design Ghana"],
  authors: [{ name: "Andrew Osae" }],
  creator: "Andrew Osae",
  publisher: "Wealth Edge Studios",
  icons: {
    icon: "/fav.svg",
  },
  openGraph: {
    title: "Wealth Edge Studios | Web Design Agency in Accra",
    description: "World-class website development and digital growth services in Ghana led by Andrew Osae.",
    url: "https://wealthedgestudios.com",
    siteName: "Wealth Edge Studios",
    locale: "en_GH",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wealthedgestudios.com/#organization",
      "name": "Wealth Edge Studios",
      "url": "https://wealthedgestudios.com",
      "logo": "https://wealthedgestudios.com/fav.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+233504148575",
        "contactType": "customer service",
        "areaServed": "GH",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://linkedin.com/in/andrewosae",
        "https://github.com/andrewosae",
        "https://x.com/iamsuingjuju",
        "https://medium.com/@osaewealth/building-vision-into-systems-the-story-of-andrew-osae-and-wealth-edge-studios-7accf8477bfb"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://wealthedgestudios.com/#person",
      "name": "Andrew Osae",
      "url": "https://wealthedgestudios.com/ceo",
      "jobTitle": "Founder & Lead Developer",
      "worksFor": { "@id": "https://wealthedgestudios.com/#organization" },
      "sameAs": [
        "https://linkedin.com/in/andrewosae",
        "https://github.com/andrewosae",
        "https://x.com/iamsuingjuju",
        "https://medium.com/@osaewealth/building-vision-into-systems-the-story-of-andrew-osae-and-wealth-edge-studios-7accf8477bfb"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://wealthedgestudios.com/#website",
      "url": "https://wealthedgestudios.com",
      "name": "Wealth Edge Studios",
      "description": "Website Development Agency in Ghana",
      "publisher": { "@id": "https://wealthedgestudios.com/#organization" }
    }
  ]
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased selection:bg-brand-gold selection:text-brand-charcoal`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="wealthedge-theme"
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
