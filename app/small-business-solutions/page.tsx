"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import AnimatedContent from "@/components/AnimatedContent"
import BlurText from "@/components/BlurText"
import {
  Check,
  ArrowRight,
  Wrench,
  MagnifyingGlass,
  ChartLineUp,
  Robot,
  Sparkle,
} from "@phosphor-icons/react"

const audiences = [
  "Handymen and home-service pros who want more leads and fewer missed calls.",
  "Laundromats, dry cleaners, and neighborhood shops ready to automate the boring stuff.",
  "Dance studios, music schools, gyms, and after-school programs that want parents to find them online.",
  "Restaurants, food trucks, bakeries juggling orders, reviews, and reservations.",
  "Salons, barbershops, nail studios, and med-spas booking clients the old-school way.",
  "Contractors, landscapers, cleaners, movers — anyone whose business lives on phone calls and word-of-mouth.",
  "Nonprofits, community orgs, and faith-based groups trying to do more with less.",
]

const serviceCategories = [
  {
    icon: Wrench,
    title: "Getting AI-Ready",
    items: [
      "Basic computer and device setup — laptops, tablets, printers, POS systems.",
      "Moving your business off paper and into modern cloud tools (Google Workspace, Microsoft 365, Dropbox).",
      "Introducing AI assistants like ChatGPT, Claude, or Copilot into the daily workflow.",
      "Setting up secure email, password management, and backup systems.",
      "Hands-on owner & staff training so the tech actually sticks.",
    ],
  },
  {
    icon: MagnifyingGlass,
    title: "Getting Found Online",
    items: [
      "Google Business Profile setup and optimization so you show up on Maps.",
      "Simple, modern websites built in days, not months.",
      "Local SEO — the work that gets your business to the top of \u201Cnear me\u201D searches.",
      "Review management and response workflows (auto-reply to Google, Yelp, Facebook).",
      "Social media starter kits — templates, scheduling, and AI-generated content.",
    ],
  },
  {
    icon: ChartLineUp,
    title: "Getting More Leads",
    items: [
      "AI-powered lead generation — finding and reaching the right customers for your business.",
      "Click-to-call ads, Google and Meta campaign setup, retargeting basics.",
      "Landing pages that actually convert visitors into phone calls and bookings.",
      "Email and SMS lists — building them, growing them, and using AI to write messages that get opened.",
      "Referral and loyalty program setup.",
    ],
  },
  {
    icon: Robot,
    title: "Automating the Day-to-Day",
    items: [
      "AI receptionist / chatbot — answers calls, texts, and website questions 24/7.",
      "Online booking and appointment reminders — fewer no-shows, more bookings.",
      "Digital invoicing, payments, and quote generation.",
      "Inventory and scheduling automation.",
      "Customer follow-up sequences (\u201Cthank you,\u201D \u201Chow\u2019d we do?,\u201D \u201Ccome back soon\u201D) that run on autopilot.",
    ],
  },
  {
    icon: Sparkle,
    title: "Leveling Up with AI",
    items: [
      "Custom AI tools trained on your business — your FAQs, your pricing, your brand voice.",
      "AI-powered photo and video for social, website, and ads.",
      "Translating your website and marketing into multiple languages automatically.",
      "Data dashboards — know which ads, services, and hours make you the most money.",
      "Quarterly \u201CAI tune-ups\u201D to keep your tools current as the technology evolves.",
    ],
  },
]

const stories = [
  {
    label: "The Handyman",
    body: "A one-person handyman operation was losing half his leads to voicemail. Our students set up an AI receptionist, a Google Business Profile, and a text-back system.",
    result: "Every call answered, every lead captured, calendar booked three weeks out.",
  },
  {
    label: "The Laundromat",
    body: "A family-owned laundromat still using a paper logbook. Students installed a cloud POS, set up a loyalty text program, and built a simple Spanish/English website.",
    result: "20%+ repeat-visit rate and a whole lot less paperwork.",
  },
  {
    label: "The Dance School",
    body: "A neighborhood dance school doing everything over email and Venmo. Students built an online booking and payment system, a parent-facing app for class updates, and an AI-written newsletter.",
    result: "Fewer missed payments, happier parents, and ten more students enrolled in a single season.",
  },
  {
    label: "The Dry Cleaner",
    body: "A third-generation dry cleaner with no website and no reviews strategy. Students built a simple site, claimed the Google profile, and automated \u201Chow did we do?\u201D texts after every pickup.",
    result: "4.8-star average on Google in under 90 days.",
  },
  {
    label: "The Barbershop",
    body: "A busy barbershop turning clients away because booking was chaos. Students set up online appointments, automated reminders, and a referral program.",
    result: "30% fewer no-shows and a steady Tuesday crowd, which used to be dead.",
  },
]

const steps = [
  {
    n: "01",
    title: "Book a Free AI Assessment",
    body: "A 30-minute call with our team. We learn your business, your pain points, and where AI can actually move the needle. No pressure. No pitch deck.",
  },
  {
    n: "02",
    title: "We Scope a Simple Plan",
    body: "You get a short, plain-English project plan — what we\u2019ll do, who\u2019s doing it, how long it\u2019ll take, and what it costs. Most projects start under $1,500.",
  },
  {
    n: "03",
    title: "Students Get to Work — Supervised",
    body: "Your project is led by AscendIQ students and supervised by our instructors. You get professional quality, with the energy and affordability of the next generation.",
  },
  {
    n: "04",
    title: "We Train You Before We Leave",
    body: "Every engagement ends with a hands-on training session so you and your team actually know how to use what we built. No mystery software. No lock-in.",
  },
  {
    n: "05",
    title: "Optional: We Stay On",
    body: "Need ongoing help? We offer monthly \u201Cquiet support\u201D plans starting at $99/month so your tools keep working and evolving as AI does.",
  },
]

const whyAscend = [
  {
    title: "Affordable",
    body: "Top-tier AI help at a fraction of agency prices because our students are learning as they build.",
  },
  {
    title: "Local",
    body: "Real students from real schools in real communities — not an offshore contractor you\u2019ll never meet.",
  },
  {
    title: "Supervised",
    body: "Every project is led by certified AscendIQ instructors. The energy of students, the confidence of pros.",
  },
  {
    title: "Future-Proof",
    body: "We don\u2019t just install tools — we teach you how to keep using them as the AI world keeps changing.",
  },
  {
    title: "Mission-Driven",
    body: "Every engagement helps us prepare another young person for a career in the AI economy. Hiring us means hiring the future.",
  },
]

const packages = [
  {
    name: "Starter Package",
    price: "from $499",
    body: "Google Business Profile, review setup, basic AI assistant walkthrough.",
  },
  {
    name: "Growth Package",
    price: "from $1,499",
    body: "Website, lead capture, AI receptionist, booking setup, staff training.",
    featured: true,
  },
  {
    name: "Transformation Package",
    price: "from $3,499",
    body: "Full digital + AI overhaul: website, automation, AI tools trained on your business, 90-day support.",
  },
  {
    name: "Quiet Support",
    price: "$99 / month",
    body: "Ongoing maintenance, monthly tune-ups, and a student team on call.",
  },
]

export default function SmallBusinessSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808024_1px,transparent_1px),linear-gradient(to_bottom,#80808024_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
          <AnimatedContent direction="vertical" distance={30} duration={0.6}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              Small Business × AI × The Next Generation
            </p>
            <div
              role="heading"
              aria-level={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.08]"
            >
              <BlurText
                text="The AI upgrade your small business has been waiting for — delivered by the workforce of tomorrow."
                animateBy="words"
                direction="top"
                delay={60}
                className="justify-center"
              />
            </div>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AscendIQ students partner with small businesses to bring AI, automation, and modern tools into the day-to-day — from setting up your first smart computer to building a lead engine that fills your calendar. Affordable. Local. Built for how you actually run your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-8 text-base shadow-lg shadow-primary/20 font-medium transition-all hover:scale-[1.02] active:scale-[0.98]">
                <Link href="/contact?audience=small-business">Get a Free AI Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98]">
                <Link href="#what-students-can-do">
                  See What Students Can Do
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedContent direction="vertical" distance={30} duration={0.6}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Who This Is For
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance leading-tight">
              AI is the biggest shift happening in your industry. Most small businesses don&apos;t have the time or budget to figure it out.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>That&apos;s where we come in.</p>
              <p>
                AscendIQ trains the next generation of AI-fluent workers — and pairs them with small businesses who need real, practical help. No enterprise jargon. No six-figure consultants. Just capable, supervised students rolling up their sleeves to modernize your business, one tool at a time.
              </p>
            </div>

            <div className="mt-12">
              <p className="font-medium text-foreground mb-4">Built for:</p>
              <ul className="space-y-3">
                {audiences.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* What Our Students Can Do */}
      <section id="what-students-can-do" className="py-20 lg:py-28 border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <AnimatedContent direction="vertical" distance={30} duration={0.6}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              What Our Students Can Do for You
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance leading-tight max-w-3xl">
              Whether you&apos;re still on a paper calendar or running a 2017 website — we meet you where you are.
            </h2>
          </AnimatedContent>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {serviceCategories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <AnimatedContent
                  key={cat.title}
                  direction="vertical"
                  distance={30}
                  delay={i * 0.05}
                  duration={0.6}
                >
                  <div className="rounded-lg border border-border bg-background px-6 py-7 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="size-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="size-5" weight="bold" />
                      </div>
                      <h3 className="font-semibold text-xl text-foreground">{cat.title}</h3>
                    </div>
                    <ul className="space-y-2.5 text-sm">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex gap-2 text-muted-foreground">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContent>
              )
            })}
          </div>
        </div>
      </section>

      {/* Real Life Stories */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <AnimatedContent direction="vertical" distance={30} duration={0.6}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              What This Looks Like in Real Life
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance leading-tight max-w-3xl">
              A few examples of the businesses we love working with.
            </h2>
          </AnimatedContent>

          <div className="mt-14 space-y-6">
            {stories.map((story, i) => (
              <AnimatedContent
                key={story.label}
                direction="vertical"
                distance={20}
                delay={i * 0.05}
                duration={0.6}
              >
                <div className="rounded-lg border border-border bg-card px-6 py-6 sm:px-8 sm:py-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{story.label}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{story.body}</p>
                  <p className="mt-3 font-medium text-foreground">
                    <span className="text-primary">Result:</span> {story.result}
                  </p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 border-t border-border bg-card/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedContent direction="vertical" distance={30} duration={0.6}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              How It Works
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance leading-tight">
              From a free assessment to a fully modernized business — in five clear steps.
            </h2>
          </AnimatedContent>

          <ol className="mt-14 space-y-6">
            {steps.map((step, i) => (
              <AnimatedContent
                key={step.n}
                direction="vertical"
                distance={20}
                delay={i * 0.05}
                duration={0.6}
              >
                <li className="rounded-lg border border-border bg-background px-6 py-6 flex gap-5 items-start">
                  <span className="font-bold tracking-tight text-3xl sm:text-4xl text-muted-foreground/40 shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </li>
              </AnimatedContent>
            ))}
          </ol>
        </div>
      </section>

      {/* Why AscendIQ */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <AnimatedContent direction="vertical" distance={30} duration={0.6}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Why AscendIQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance leading-tight">
              The energy of students. The confidence of pros. The price your business can actually afford.
            </h2>
          </AnimatedContent>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyAscend.map((item, i) => (
              <AnimatedContent
                key={item.title}
                direction="vertical"
                distance={20}
                delay={i * 0.05}
                duration={0.6}
              >
                <div className="rounded-lg border border-border bg-card px-6 py-6 h-full">
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 border-t border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <AnimatedContent direction="vertical" distance={30} duration={0.6}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Transparent, Small-Business-Friendly Pricing
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance leading-tight">
              No retainers. No surprise invoices. Just flat, plain-English pricing.
            </h2>
          </AnimatedContent>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg, i) => (
              <AnimatedContent
                key={pkg.name}
                direction="vertical"
                distance={20}
                delay={i * 0.05}
                duration={0.6}
              >
                <div
                  className={`rounded-lg border bg-background px-6 py-7 h-full flex flex-col ${
                    pkg.featured
                      ? "border-primary/40 ring-1 ring-primary/20"
                      : "border-border"
                  }`}
                >
                  {pkg.featured && (
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                      Most Popular
                    </p>
                  )}
                  <h3 className="font-semibold text-lg text-foreground">{pkg.name}</h3>
                  <p className="mt-1 font-bold text-2xl text-foreground">{pkg.price}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {pkg.body}
                  </p>
                </div>
              </AnimatedContent>
            ))}
          </div>

          <AnimatedContent direction="vertical" distance={20} delay={0.2} duration={0.6}>
            <p className="mt-8 text-sm text-muted-foreground text-center">
              Nonprofits, minority-owned, and veteran-owned businesses automatically receive 20% off every package.
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimatedContent direction="vertical" distance={30} duration={0.6}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance leading-tight">
              Your business deserves to grow with the future — not get left behind by it.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              AscendIQ students are ready to help. Book your free AI assessment today and see what the next generation can build for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-8 text-base">
                <Link href="/contact?audience=small-business">Book My Free Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base">
                <Link href="/contact">Talk to a Human</Link>
              </Button>
            </div>
            <p className="mt-12 text-sm text-muted-foreground italic">
              AscendIQ — Preparing Workers for the AI Economy.
            </p>
          </AnimatedContent>
        </div>
      </section>

      <Footer />
    </main>
  )
}
