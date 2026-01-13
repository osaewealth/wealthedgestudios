import {
    Globe,
    Search,
    Zap,
    ShieldCheck,
    BarChart3,
    Palette,
    TrendingUp,
    Layout
} from "lucide-react";

import influenceChurch from "@/assets/influencechurch.png";
import vine from "@/assets/vine.png";
import appolisConsult from "@/assets/appolisconsult.png";
import niobe from "@/assets/niobe.png";
import amanex from "@/assets/amanex.png";
import elisbaage from "@/assets/elisbaage.png";
import aiden from "@/assets/aiden.png";
import rango from "@/assets/rango.png";
import adwoa from "@/assets/adwoa.png";
import zoroluf from "@/assets/zoroluf.jpeg";
import bjh from "@/assets/bjh.png";
import afrotrend from "@/assets/afrotrend.png";
import kiki from "@/assets/kiki.png";
import communityOutreach from "@/assets/graphicdesigns/community_outreach.png";
import brandConcept from "@/assets/graphicdesigns/1.jpeg";
import corporateStationery from "@/assets/graphicdesigns/2.jpeg";
import socialCampaign from "@/assets/graphicdesigns/3.jpeg";
import productPackaging from "@/assets/graphicdesigns/4.jpeg";
import founderImage from "@/assets/founder.jpeg";

export const CONTACT_INFO = {
    phone: "0504148575",
    email: "info@wealthedgestudios.com",
    address: "Accra, Ghana",
    whatsapp: "233504148575"
};

export const PRICING_PLANS = [
    {
        name: "Startup",
        price: "2,500",
        dollars: "215",
        features: [
            "5 Custom Pages",
            "Mobile Friendly",
            "Standard Designs",
            "Basic SEO",
            "1 Month Support"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Small Business",
        price: "4,000",
        dollars: "345",
        features: [
            "15 Custom Pages",
            "Premium Design System",
            "Advanced SEO",
            "Contact Form Integration",
            "3 Months Support",
            "Speed Optimization"
        ],
        cta: "Most Popular",
        popular: true
    },
    {
        name: "Ecommerce",
        price: "7,500",
        dollars: "650",
        features: [
            "25+ Custom Pages",
            "Full Online Store",
            "Payment Gateway Integration",
            "Inventory Management",
            "Advanced Analytics",
            "Priority Support"
        ],
        cta: "Build My Store",
        popular: false
    }
];

export const PLAN_COMPARISON = {
    features: [
        { name: "Pages", values: ["5", "15", "25"] },
        { name: "SSL", values: [true, true, true] },
        { name: "Mobile Friendly", values: [true, true, true] },
        { name: "WhatsApp Chat", values: [true, true, true] },
        { name: "Social Media Integration", values: [true, true, true] },
        { name: "Google Map Integration", values: [true, true, true] },
        { name: "Security/Firewall", values: [true, true, true] },
        { name: "Gallery", values: [true, true, true] },
        { name: "Sitemap", values: [true, true, true] },
        { name: "Contact Form", values: [true, true, true] },
        { name: "Support", values: [true, true, true] },
        { name: "Site Backups", values: [true, true, true] },
        { name: "Website Analytics", values: [true, true, true] },
        { name: "Speed Optimization", values: [true, true, true] },
        { name: "Free Domain", values: [true, true, true] },
        { name: "Newsletter Signups", values: [true, true, true] },

        { name: "Premium Designs", values: [false, true, true] },
        { name: "SEO Setup", values: [false, true, true] },
        { name: "Online Payments", values: [false, true, true] },
        { name: "Live Chat Integration", values: [false, true, true] },
        { name: "Ecommerce", values: [false, false, true] },
        { name: "Customer Management", values: [false, false, true] },
        { name: "Completion", values: ["5 Working Days", "7 Working Days", "10 Working Days"] }
    ],
    plans: ["Startup", "Small Business", "Ecommerce"]
};

export const MAINTENANCE_PLANS = [
    {
        name: "Basic Plan",
        price: "500",
        dollars: "50",
        features: [
            "Weekly Backups",
            "WordPress Updates",
            "Theme and Plugin Updates",
            "Malware Scans",
            "2 Hours of Website Edits",
            "Monthly Reports",
            "Uptime Monitor",
            "Link Checker",
            "Speed Optimizations"
        ],
        cta: "Select Basic",
        popular: false
    },
    {
        name: "Standard Plan",
        price: "1,000",
        dollars: "100",
        features: [
            "Daily Backups",
            "WordPress Updates",
            "Theme and Plugin Updates",
            "Malware Scans",
            "5 Hours of Website Edits",
            "Weekly Reports",
            "Uptime Monitor",
            "Link Checker",
            "Speed Optimizations"
        ],
        cta: "Most Popular",
        popular: true
    },
    {
        name: "Advanced Plan",
        price: "1,500",
        dollars: "150",
        features: [
            "Hourly Backups",
            "WordPress Updates",
            "Theme and Plugin Updates",
            "Malware Scans",
            "15 Hours of Website Edits",
            "Weekly Reports",
            "Uptime Monitor",
            "Link Checker",
            "Speed Optimizations"
        ],
        cta: "Select Advanced",
        popular: false
    }
];

export const SERVICES = [
    {
        title: "Web Development",
        description: "High-performance, custom-built websites using the latest technologies like Next.js and React.",
        detailedDescription: "In today's digital age, your website is your brand's storefront and highest-performing salesperson. We don't just build websites; we engineer digital experiences that are fast, intuitive, and built to scale. Our full-stack development approach utilizes modern frameworks like Next.js and React to ensure peak performance, while our clean-code philosophy guarantees long-term maintainability. Whether you need a sophisticated corporate portal, a complex web application, or a high-converting landing page, we deliver solutions that exceed industry standards.",
        icon: Globe,
        color: "bg-blue-500/10 text-blue-500",
        slug: "web-development",
        benefits: [
            "Custom React & Next.js Architecture",
            "Full-Stack API & Database Integration",
            "Performance-First (Zero TTI) Engineering",
            "Progressive Web App (PWA) Capabilities",
            "Advanced CMS Integration (Sanity, Contentful)",
            "Scalable Cloud Deployment & Management"
        ],
        faqs: [
            {
                q: "Do you build custom ecommerce sites?",
                a: "Absolutely. We specialize in high-conversion ecommerce platforms integrated with local payment gateways like Paystack and Hubtel."
            },
            {
                q: "How long does a typical website take?",
                a: "A standard business website takes 2-4 weeks, while complex web applications can take 8-12 weeks from discovery to launch."
            }
        ]
    },
    {
        title: "Website Maintenance",
        description: "Keep your website secure, updated, and performing at its best with our comprehensive maintenance plans.",
        detailedDescription: "With the average website being attacked dozens of times every day, security and maintenance are no longer optional. Our Website Maintenance Service is designed to give you peace of mind by handling the technical heavy lifting. We provide regular backups, real-time security monitoring, theme and plugin updates, and proactive speed optimizations. Whether you're on WordPress or a custom-built solution, we ensure your digital assets are always protected, updated, and ready to serve your customers without interruption.",
        icon: ShieldCheck,
        color: "bg-green-500/10 text-green-500",
        slug: "website-maintenance",
        benefits: [
            "Real-time Firewall & Brute Force Protection",
            "Malware Scanning & Security Hardening",
            "Automated Off-site Scheduled Backups",
            "Theme, Plugin & Core Software Updates",
            "24/7 Uptime Monitoring & Link Checking",
            "Detailed Monthly Technical Performance Reports"
        ],
        faqs: [
            {
                q: "What happens if my site gets hacked?",
                a: "If you're on our maintenance plan, we restore your site from the latest clean backup and patch the vulnerability immediately at no extra cost."
            }
        ]
    },
    {
        title: "SEO Optimization",
        description: "Drive organic traffic and dominate search results with our advanced search engine strategies.",
        detailedDescription: "Visibility is the currency of the digital world. Our SEO services go far beyond simple keyword stuffing. We take a holistic, data-driven approach to Search Engine Optimization, focusing on technical excellence, content authority, and user intent. By auditing your site's architecture, optimizing for Core Web Vitals, and crafting a strategic backlink profile, we ensure your business doesn't just rank higher—it dominates. We stay ahead of algorithm updates so your traffic remains consistent and sustainable long into the future.",
        icon: Search,
        color: "bg-brand-gold/10 text-brand-gold",
        slug: "seo",
        benefits: [
            "Comprehensive Technical SEO Audits",
            "Semantic Keyword & Topic Mapping",
            "Strategic On-Page Content Optimization",
            "High-Authority Backlink Building",
            "Local SEO & GMB Optimization",
            "Advanced Analytics & Monthly ROI Reporting"
        ],
        faqs: [
            {
                q: "When will I see ROI from SEO?",
                a: "SEO is a marathon. Typically, you'll start seeing significant ranking improvements in 3-6 months, with compounding ROI over the years."
            }
        ]
    },
    {
        title: "Google Search Ads",
        description: "Get instant traffic and sales with highly targeted PPC campaigns on the world's largest search engine.",
        detailedDescription: "Stop waiting for traffic and start bidding for it. Our Google Ads management service ensures your business appears exactly when potential customers are searching for what you offer. We optimize your ad spend, craft high-converting copy, and design landing pages that turn clicks into cash. With real-time tracking and constant A/B testing, we ensure every cedi spent on advertising contributes directly to your bottom line.",
        icon: TrendingUp,
        color: "bg-orange-500/10 text-orange-500",
        slug: "google-ads",
        benefits: [
            "Keyword Research & Competitor Bidding",
            "High-Conversion Ad Copywriting",
            "Landing Page Strategy & UX Audit",
            "Remarketing & Display Network Setup",
            "Monthly Performance & ROAS Reports",
            "Lead Tracking & Conversion Goal Setup"
        ],
        faqs: [
            {
                q: "Do you charge a percentage of ad spend?",
                a: "We offer both fixed-fee management and percentage-of-spend models depending on your budget and campaign complexity."
            }
        ]
    },
    {
        title: "Graphic Design",
        description: "Stunning visual identities, from logos to marketing collaterals, that resonate with your target audience.",
        detailedDescription: "Great design is silent communication. At Wealth Edge Studios, we blend artistic vision with strategic thinking to create branding that captures attention and builds trust immediately. A logo is just the beginning; we develop comprehensive visual identities that define your brand's personality across all mediums. From digital marketing assets to high-end print collateral, our designs are crafted with pixel-perfect precision and a deep understanding of color psychology and typography. We ensure your brand looks as premium as the value you provide.",
        icon: Palette,
        color: "bg-pink-500/10 text-pink-500",
        slug: "graphic-design",
        benefits: [
            "Strategic Brand Identity & Guidelines",
            "Logotype & Iconography Development",
            "High-Impact Marketing & Ad Creative",
            "Professional Print & Packaging Design",
            "Typography & Color Palette Engineering",
            "Social Media Aesthetic Management"
        ],
        faqs: [
            {
                q: "Do I get the source files?",
                a: "Yes, once finalized, you receive all original vector files (AI, EPS) and high-resolution exports for web and print."
            }
        ]
    },
    {
        title: "Performance",
        description: "Ultra-fast loading speeds and optimized performance to keep your users engaged.",
        detailedDescription: "A one-second delay in page load time can lead to a 7% reduction in conversions. We treat speed as a feature, not an afterthought. Our performance optimization services focus on the entire stack—from image compression and lazy-loading to server-side rendering and edge caching. We help legacy sites find the bottlenecks that are costing them customers and build new projects with a speed-first mentality. Our goal is to make your digital experience feel instantaneous, keeping users engaged and bounce rates at an all-time low.",
        icon: Zap,
        color: "bg-purple-500/10 text-purple-500",
        slug: "performance",
        benefits: [
            "Core Web Vitals Hero Score Optimization",
            "Next-Gen Image & Asset Compression",
            "Advanced Code Splitting & Tree Shaking",
            "Server-Side Rendering (SSR) Strategy",
            "Global CDN & Edge Delivery Setup",
            "Continuous Performance Monitoring"
        ],
        faqs: [
            {
                q: "Can you optimize my existing WordPress site?",
                a: "Yes. We specialize in taking sluggish WordPress sites and getting them into the 90+ zone on Google PageSpeed Insights."
            }
        ]
    }
];

export const PROJECTS = [
    {
        title: "Influence City Church",
        category: "Web Development",
        industry: "Religion",
        image: influenceChurch,
        slug: "influence-city-church",
        link: "https://influencecitychurch.netlify.app/"
    },
    {
        title: "Vine Digital Solutions",
        category: "Web Development",
        industry: "Technology",
        image: vine,
        slug: "vine-digital",
        link: "http://www.vineaccra.com/"
    },
    {
        title: "Appolis Consult",
        category: "SEO Optimization",
        industry: "Consulting",
        image: appolisConsult,
        slug: "appolis-consult",
        link: "https://appolisconsult.com/"
    },
    {
        title: "Niobe Beauty & Spa",
        category: "Web Development",
        industry: "Health & Beauty",
        image: niobe,
        slug: "niobe-beauty",
        link: "https://www.niobebeauty.com/"
    },
    {
        title: "Amanex Group",
        category: "E-commerce",
        industry: "Retail",
        image: amanex,
        slug: "amanex-group",
        link: "https://amanexcomltd.com/"
    },
    {
        title: "Elisbaage Limited",
        category: "Performance",
        industry: "Logistics",
        image: elisbaage,
        slug: "elisbaage",
        link: "https://elisbaage.com/"
    },
    {
        title: "Aiden International",
        category: "Web Development",
        industry: "Real Estate",
        image: aiden,
        slug: "aiden-international",
        link: "https://www.aidenhapartments.com/"
    },
    {
        title: "Rango Logistics",
        category: "Web Development",
        industry: "Logistics",
        image: rango,
        slug: "rango-logistics",
        link: "https://rangoccl.com/"
    },
    {
        title: "Adwoa Beauty Care",
        category: "Google Ads",
        industry: "Health & Beauty",
        image: adwoa,
        slug: "adwoa-beauty",
        link: "https://www.adjoaa.com/en-gh"
    },
    {
        title: "Zoroluf Enterprise",
        category: "Web Development",
        industry: "Technology",
        image: zoroluf,
        slug: "zoroluf",
        link: "https://zoroluf.com/"
    },
    {
        title: "BJH Logistics",
        category: "SEO Optimization",
        industry: "Logistics",
        image: bjh,
        slug: "bjh-logistics",
        link: "https://www.bjhlogistics.com/"
    },
    {
        title: "AfroTrend Ghana",
        category: "Graphic Design",
        industry: "Fashion",
        image: afrotrend,
        slug: "afrotrend",
        link: "#"
    },
    {
        title: "Kiki Clothing",
        category: "E-commerce",
        industry: "Fashion",
        image: kiki,
        slug: "kiki-clothing",
        link: "#"
    },
    {
        title: "Community Outreach Flyer",
        category: "Graphic Design",
        industry: "Non-Profit",
        image: communityOutreach,
        slug: "community-outreach",
        link: "#"
    },
    {
        title: "Brand Identity Concept",
        category: "Graphic Design",
        industry: "Branding",
        image: brandConcept,
        slug: "brand-identity-concept",
        link: "#"
    },
    {
        title: "Corporate Stationery",
        category: "Graphic Design",
        industry: "Corporate",
        image: corporateStationery,
        slug: "corporate-stationery",
        link: "#"
    },
    {
        title: "Social Media Campaign",
        category: "Graphic Design",
        industry: "Marketing",
        image: socialCampaign,
        slug: "social-media-campaign",
        link: "#"
    },
    {
        title: "Product Packaging",
        category: "Graphic Design",
        industry: "Retail",
        image: productPackaging,
        slug: "product-packaging",
        link: "#"
    }
];

export const CEO_DATA = {
    name: "Andrew Osae",
    role: "Front End Website Developer",
    email: "andrewvalmount@gmail.com",
    phone: "+233 504148575",
    image: founderImage,
    location: "Spintex-Accra, Ghana",
    bio: "Hello, I'm Andrew Osae, a passionate and detail-oriented web designer based in Accra, Ghana. I specialize in creating clean, responsive, and SEO-optimized websites using WordPress, HTML, and other modern web tools. Through my agency, WealthEdge Studio, I help real estate agents, hotel owners, and restaurant businesses build an impressive online presence that drives results. Whether you're starting from scratch or need a digital makeover, I'm here to bring your vision to life with functionality and finesse.",
    competencies: [
        "Expert in UI/UX design, delivering visually stunning and intuitive interfaces.",
        "Expert in developing, customizing, and optimizing WordPress websites for performance and functionality",
        "Seamlessly connecting websites with RESTful APIs to enable dynamic and data-driven functionalities",
        "Expertise in source control management with Git (GitHub, GitLab, Bitbucket) and automating workflows using CI/CD pipelines.",
        "Enhancing website loading speeds through effective code practices and advanced optimization techniques",
        "Building secure and scalable e-commerce platforms, including payment gateway integration and responsiveness"
    ],
    whatImDoing: [
        {
            title: "Web Development",
            description: "High-performance, custom-built websites using modern web tools like Next.js and React.",
            icon: "Globe"
        },
        {
            title: "Graphic Designing",
            description: "Creating visually stunning digital assets and branding that capture attention.",
            icon: "Palette"
        }
    ],
    experience: [
        {
            role: "Web Developer & Social Media Strategist",
            company: "Suku Technologies",
            period: "Oct 2025 — 2026",
            details: "Currently working as a web developer and social media strategist, creating engaging digital experiences and managing social media presence for clients."
        },
        {
            role: "Web Developer & Freelancer",
            company: "Self Employed/ Fiverr",
            period: "Apr 2017 — Present",
            details: "Skills: Figma UI/UX Design · HTML · Wordpress · React · Flutter · Java · Firebase"
        },
        {
            role: "Network Technician",
            company: "Glakors Ventures",
            period: "Apr 2020 - Dec 2020",
            details: ""
        },
        {
            role: "Graphic Designer",
            company: "Francis De Studio",
            period: "Aug 2018 - Jan 2019",
            details: ""
        }
    ],
    technicalSkills: [
        { name: "Wordpress Website", level: 85 },
        { name: "HTML Website", level: 75 },
        { name: "React", level: 70 },
        { name: "UI/UX Design", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Tailwind CSS", level: 70 },
        { name: "TypeScript", level: 80 }
    ]
};
