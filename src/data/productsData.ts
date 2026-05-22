export interface ProductFeature {
 title: string;
 description: string;
 iconPath: string;
}

export interface ProductUseCase {
 title: string;
 description: string;
}

export interface ProductStat {
 value: string;
 label: string;
}

export interface Product {
 slug: string;
 name: string;
 tagline: string;
 category: string;
 description: string;
 aboutParagraphs: string[];
 backgroundImage: string;
 accentColor: "royal" | "emerald" | "indigo" | "rose";
 stats: ProductStat[];
 featuresHeading: string;
 features: ProductFeature[];
 useCasesHeading: string;
 useCases: ProductUseCase[];
 ctaHeading: string;
 ctaBody: string;
}

export const productColorConfig = {
 royal: {
 badge:
 "bg-royal-100 text-royal-700",
 primaryBtn:
 "bg-royal-500 text-white hover:bg-royal-700 shadow-lg shadow-royal-600/25",
 iconBg: "bg-royal-100",
 iconText: "text-royal-600",
 accentText: "text-royal-600",
 statBorder: "border-royal-100",
 featureBg: "bg-gray-50",
 divider: "bg-royal-600",
 },
 emerald: {
 badge:
 "bg-emerald-100 text-emerald-700",
 primaryBtn:
 "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/25",
 iconBg: "bg-emerald-100",
 iconText: "text-emerald-600",
 accentText: "text-emerald-600",
 statBorder: "border-emerald-100",
 featureBg: "bg-gray-50",
 divider: "bg-emerald-600",
 },
 indigo: {
 badge:
 "bg-indigo-100 text-indigo-700",
 primaryBtn:
 "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/25",
 iconBg: "bg-indigo-100",
 iconText: "text-indigo-600",
 accentText: "text-indigo-600",
 statBorder: "border-indigo-100",
 featureBg: "bg-gray-50",
 divider: "bg-indigo-600",
 },
 rose: {
 badge: "bg-rose-100 text-rose-700",
 primaryBtn:
 "bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-600/25",
 iconBg: "bg-rose-100",
 iconText: "text-rose-600",
 accentText: "text-rose-600",
 statBorder: "border-rose-100",
 featureBg: "bg-gray-50",
 divider: "bg-rose-600",
 },
};

export const products: Product[] = [
 {
 slug: "doptor",
 name: "Doptor",
 tagline:
 "An office management system built for how modern teams actually work.",
 category: "Office Management",
 description:
 "Doptor brings together every facet of internal operations — HR, task tracking, approvals, communications, and reporting — into a single, coherent platform designed for clarity and speed.",
 aboutParagraphs: [
 "Most organisations run on a patchwork of tools: spreadsheets for HR, email threads for approvals, separate software for timesheets, another for payroll. Each system demands its own login, its own format, its own learning curve. Doptor was built to end that fragmentation.",
 "We designed Doptor by spending time inside the offices that needed it most — small-to-mid-sized organisations in South and Southeast Asia, where teams are growing fast but administrative infrastructure hasn't kept pace. The result is a system that handles the full lifecycle of office operations without demanding enterprise-scale IT investment.",
 "From onboarding a new employee to closing a departmental report, Doptor keeps every action auditable, every data point connected, and every manager informed — without drowning anyone in notifications.",
 ],
 backgroundImage:
 "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop",
 accentColor: "royal",
 stats: [
 { value: "60%", label: "Reduction in admin overhead" },
 { value: "12+", label: "Integrated modules" },
 { value: "< 1 day", label: "Average onboarding time" },
 ],
 featuresHeading: "What Doptor handles for you",
 features: [
 {
 title: "Workflow Automation",
 description:
 "Define approval chains, recurring tasks, and escalation rules once — Doptor handles execution without reminders. From leave approvals to purchase requisitions, every flow is logged and traceable.",
 iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
 },
 {
 title: "Human Resources",
 description:
 "Manage the complete employee lifecycle: recruitment pipelines, contracts, attendance, payroll computation, performance reviews, and exit formalities — all in one place, accessible to the right people.",
 iconPath:
 "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
 },
 {
 title: "Resource & Asset Tracking",
 description:
 "Know where every asset is assigned, when it was last serviced, and who is responsible. Doptor's resource module covers physical inventory, digital licences, and project-level allocations simultaneously.",
 iconPath:
 "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
 },
 {
 title: "Reports & Compliance",
 description:
 "Auto-generated monthly and quarterly reports keep leadership informed without manual compilation. Built-in audit trails ensure every decision and change is documented for regulatory or internal review.",
 iconPath:
 "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
 },
 ],
 useCasesHeading: "Who uses Doptor",
 useCases: [
 {
 title: "Growing SMEs",
 description:
 "Organisations scaling from 30 to 300 people who need structure without the overhead of enterprise-grade ERP systems.",
 },
 {
 title: "NGOs & Social Enterprises",
 description:
 "Mission-driven teams that need lean, cost-effective administration software that doesn't compromise on compliance.",
 },
 {
 title: "Multi-location Offices",
 description:
 "Businesses operating across cities or countries, where unified visibility into people and processes is critical.",
 },
 {
 title: "Project-based Teams",
 description:
 "Consultancies, agencies, and studios where resources shift between engagements and billing must align with hours.",
 },
 ],
 ctaHeading: "See Doptor in your office",
 ctaBody:
 "Book a walkthrough with our team. We'll map Doptor to your current workflows and show you exactly what changes — and what doesn't.",
 },
 {
 slug: "angan",
 name: "Aangan",
 tagline:
 "A homestay management platform rooted in the realities of independent hospitality.",
 category: "Homestay Management",
 description:
 "Aangan gives independent homestay operators full control over reservations, guest communications, housekeeping schedules, and revenue tracking — without the complexity of hotel software built for chains.",
 aboutParagraphs: [
 "The homestay industry in South Asia is growing fast, driven by travellers seeking authentic, locally rooted experiences. But the operators behind these spaces — families, small collectives, independent hosts — are managing everything manually: WhatsApp bookings, handwritten registers, cash accounting. Aangan was built specifically for them.",
 "We talked to dozens of homestay hosts across the hills of Meghalaya, the backwaters of Kerala, and the lanes of Rajasthan. The software they needed wasn't a stripped-down hotel PMS. It needed to be culturally intuitive, affordable, and genuinely useful for someone running three rooms and a shared kitchen — not a 200-room resort.",
 "Aangan handles the operational side of hospitality so hosts can focus on what they do best: creating memorable stays. It manages bookings from multiple channels, automates guest communication, keeps housekeeping organised, and produces income reports that actually make sense at tax season.",
 ],
 backgroundImage:
 "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&auto=format&fit=crop",
 accentColor: "emerald",
 stats: [
 { value: "3x", label: "Faster booking management" },
 { value: "40%", label: "Fewer missed reservations" },
 { value: "100%", label: "Built for independent hosts" },
 ],
 featuresHeading: "What Aangan takes off your plate",
 features: [
 {
 title: "Multi-channel Reservations",
 description:
 "Sync bookings from your own website, WhatsApp, Airbnb, Booking.com, and walk-ins into one calendar. No double-bookings, no missed confirmations, no juggling five tabs.",
 iconPath:
 "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
 },
 {
 title: "Guest Communication",
 description:
 "Automated confirmation messages, check-in instructions, local guides, and post-stay review requests — sent at the right moment, in the guest's preferred language, without you lifting a finger.",
 iconPath:
 "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
 },
 {
 title: "Housekeeping Scheduler",
 description:
 "Assign cleaning tasks, track room status in real time, and receive alerts before a guest checks in to a room that isn't ready. Works on any smartphone — no training required.",
 iconPath:
 "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
 },
 {
 title: "Revenue & Tax Reports",
 description:
 "Monthly income summaries, occupancy rates, channel-wise revenue breakdown, and GST-ready reports — automatically generated so your accountant has everything they need without you compiling spreadsheets.",
 iconPath:
 "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
 },
 ],
 useCasesHeading: "Aangan is designed for",
 useCases: [
 {
 title: "Family-run Homestays",
 description:
 "Hosts managing 2–10 rooms who need something more organised than WhatsApp but simpler than hotel software.",
 },
 {
 title: "Rural Tourism Collectives",
 description:
 "Groups of village homestays operating under a shared brand, needing centralised booking and distributed payout management.",
 },
 {
 title: "Heritage & Boutique Properties",
 description:
 "Properties with distinct character where guest experience documentation — preferences, special requests, repeat-stay history — is as important as operations.",
 },
 {
 title: "Eco-lodges & Retreat Centres",
 description:
 "Wellness and nature stays with seasonal programming, workshop scheduling, and meal-plan management needs.",
 },
 ],
 ctaHeading: "Ready to simplify your homestay operations?",
 ctaBody:
 "Let's walk through how Aangan fits your property. A 30-minute session is usually enough to see the difference.",
 },
 {
 slug: "data-analysis",
 name: "Data Dashboards",
 tagline: "Turn your organisation's data into decisions — not just charts.",
 category: "Analytics Platform",
 description:
 "Custom-built data dashboards that pull from your existing databases, field tools, and third-party APIs to give decision-makers a single, reliable view of what's actually happening.",
 aboutParagraphs: [
 "The problem most organisations have isn't a lack of data. It's that the data lives in too many places, in too many formats, owned by too many people — and by the time it reaches a report, it's already old. Our data dashboard solutions are designed to change that architecture entirely.",
 "We build bespoke dashboards tailored to your specific data environment — whether that's a PostgreSQL database, a Google Sheet shared between field teams, a government open data portal, or a combination of all three. The dashboard becomes the single source of truth: always current, always accessible to the right people, never requiring a data analyst to manually compile a weekly report.",
 "We've built dashboards for development organisations tracking programme outcomes across districts, for businesses monitoring supply chain metrics in real time, and for research teams visualising longitudinal data across years. Each dashboard is designed around how decisions actually get made in that organisation — not around what's easy to build.",
 ],
 backgroundImage:
 "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop",
 accentColor: "indigo",
 stats: [
 { value: "Real-time", label: "Data refresh rates" },
 { value: "50+", label: "Data source connectors" },
 { value: "< 4 weeks", label: "From brief to live dashboard" },
 ],
 featuresHeading: "What our dashboards do",
 features: [
 {
 title: "Live Data Connections",
 description:
 "Connect directly to your databases, APIs, spreadsheets, or data warehouses. Dashboards update automatically — no manual exports, no stale reports, no CSVs emailed every Monday morning.",
 iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
 },
 {
 title: "Interactive Exploration",
 description:
 "Click into any chart to filter, drill down, and cross-reference. Decision-makers can ask their own questions without waiting for an analyst to run a new query and send another slide deck.",
 iconPath:
 "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
 },
 {
 title: "Role-based Access",
 description:
 "Field staff see their data. District managers see their region. Leadership sees the full picture. Granular access controls ensure everyone has exactly what they need — and nothing they shouldn't.",
 iconPath:
 "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
 },
 {
 title: "Automated Reports",
 description:
 "Schedule PDF and email reports to go out to stakeholders on a cadence you define. Weekly summaries, monthly reviews, donor reports — compiled and delivered without anyone having to remember.",
 iconPath:
 "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
 },
 ],
 useCasesHeading: "Organisations we build for",
 useCases: [
 {
 title: "Development Organisations",
 description:
 "NGOs and foundations tracking programme outcomes, beneficiary data, and grant utilisation across multiple geographies.",
 },
 {
 title: "Research & Policy Teams",
 description:
 "Teams handling longitudinal survey data, census analysis, or policy impact measurement that needs clear visual communication.",
 },
 {
 title: "Supply Chain & Operations",
 description:
 "Businesses that need real-time visibility into inventory, logistics, vendor performance, and fulfilment rates.",
 },
 {
 title: "Leadership & Boards",
 description:
 "Executive teams who need a live, reliable picture of the organisation without relying on weekly manual reports from their teams.",
 },
 ],
 ctaHeading: "What would your organisation see?",
 ctaBody:
 "Share your data challenge with us. We'll design a dashboard architecture and walk you through what it could look like — before you commit to anything.",
 },
 {
 slug: "social-media",
 name: "Social Dashboards",
 tagline: "One place to understand everything your audience is telling you.",
 category: "Social Media Analytics",
 description:
 "Unified social media dashboards that consolidate performance metrics, audience insights, and campaign data from every platform — so your team can make better content and communication decisions, faster.",
 aboutParagraphs: [
 "Managing social media for an organisation often means switching between five different platform analytics tabs, manually copying numbers into a spreadsheet, and hoping the person who owns the Instagram login is available when leadership asks for a report. Our social media dashboards eliminate all of that.",
 "We build custom social analytics platforms that pull data from Instagram, Facebook, X (Twitter), LinkedIn, YouTube, and regional platforms into a single, coherent interface. Performance metrics are presented in context — not just reach and impressions, but what content drives action, which audience segments are growing, and where campaigns are underperforming before the budget is spent.",
 "For organisations where communications is both a strategic function and a public accountability mechanism — development organisations, social enterprises, cultural institutions — our dashboards also track narrative sentiment, media mentions, and community response patterns over time.",
 ],
 backgroundImage:
 "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&auto=format&fit=crop",
 accentColor: "rose",
 stats: [
 { value: "10+", label: "Platforms in one view" },
 { value: "Daily", label: "Automated reporting" },
 { value: "360°", label: "Audience intelligence" },
 ],
 featuresHeading: "What the dashboard gives you",
 features: [
 {
 title: "Cross-platform Overview",
 description:
 'All your channels — Instagram, LinkedIn, Facebook, YouTube, X — in one view, with consistent metrics so you\'re comparing like with like. No more switching tabs or reconciling different definitions of "engagement".',
 iconPath:
 "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
 },
 {
 title: "Content Performance Analysis",
 description:
 "Understand not just how each post performed, but why. See patterns in formats, timings, topics, and tones that correlate with your highest-performing content — and use that to inform what you create next.",
 iconPath:
 "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
 },
 {
 title: "Sentiment & Mention Tracking",
 description:
 "Monitor how your brand, campaigns, or issues are being discussed across social platforms and news sources. Classify audience sentiment over time and get alerted to shifts in public perception before they escalate.",
 iconPath:
 "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
 },
 {
 title: "Campaign Attribution",
 description:
 "Track the journey from post to action. Correlate social activity with website traffic, form submissions, and conversions using UTM-level granularity — so you know exactly what drove results and what didn't.",
 iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
 },
 ],
 useCasesHeading: "Built for teams who communicate at scale",
 useCases: [
 {
 title: "Communications & Comms Teams",
 description:
 "Professionals managing multi-channel content calendars who need performance data without spending hours extracting it from native platforms.",
 },
 {
 title: "Development & Advocacy Organisations",
 description:
 "Organisations using social media for public campaigns, community engagement, or fundraising — where narrative measurement matters as much as reach.",
 },
 {
 title: "Brands & Creative Agencies",
 description:
 "Teams managing social presence for multiple clients who need consolidated, client-ready reporting without manual compilation.",
 },
 {
 title: "Research & Monitoring Teams",
 description:
 "Policy researchers, journalists, and analysts tracking how specific issues, topics, or individuals are covered and discussed online over time.",
 },
 ],
 ctaHeading: "See your social data differently",
 ctaBody:
 "Tell us which platforms you're on and what decisions you're trying to make. We'll show you what a dashboard built for your specific use case could look like.",
 },
];

export const productsGridData = products.map((p) => ({
 slug: p.slug,
 name: p.name,
 tagline: p.tagline,
 category: p.category,
 description: p.description,
 backgroundImage: p.backgroundImage,
 accentColor: p.accentColor,
}));
