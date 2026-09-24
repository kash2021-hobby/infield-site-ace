import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import {
  MapPin,
  Camera,
  IndianRupee,
  Bell,
  PhoneOff,
  UserX,
  PhoneCall,
  FileWarning,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Menu,
  X,
  HardHat,
  Clock,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

import heroImg from "../assets/infield-hero.jpg";
import siteBandImg from "../assets/infield-site-band.jpg";
import finalCtaImg from "../assets/infield-final-cta.jpg";

const WA_NUMBER = "919999999999"; // TODO: replace with INFIELD's real WhatsApp number

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INFIELD — Stop Proxy Attendance & Track Your Construction Workforce Live" },
      {
        name: "description",
        content:
          "Know who's on site, who left, and pay exact salaries automatically. INFIELD is the workforce management app for construction companies. Get your free demo.",
      },
      { property: "og:title", content: "INFIELD — Stop Proxy Attendance & Track Your Construction Workforce Live" },
      {
        property: "og:description",
        content:
          "Know who's on site, who left, and pay exact salaries automatically. INFIELD is the workforce management app for construction companies. Get your free demo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------- NAV ---------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#calculator", label: "Savings" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <HardHat className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-display text-xl font-800 font-extrabold tracking-tight">
            INFIELD
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Free Demo
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Get Free Demo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ---------------------------------- HERO --------------------------------- */

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground">
      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" />
      142 workers on site right now
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 md:pt-20 lg:grid-cols-2 lg:items-center lg:pb-24">
        <div>
          <LiveBadge />
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Know exactly who's on your site.{" "}
            <span className="text-primary">Right now.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            INFIELD stops proxy attendance, tracks every worker live, and
            calculates exact salaries automatically — so you stop losing money
            you can't even see.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
            >
              Get Your Free Demo <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Free 30-minute demo · No card needed · Works on any Android phone
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
            <img
              src={heroImg}
              alt="Construction site with workers tracked live by INFIELD"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
          {/* floating live card */}
          <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:w-80 animate-float-slow">
            <div className="rounded-xl border border-border bg-card p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Site A — Live
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse-dot" />
                  LIVE
                </span>
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" /> Ramesh K. — checked in 8:02 AM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" /> Sunita D. — checked in 8:15 AM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive" /> Proxy attempt blocked — 8:31 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PAIN POINTS ------------------------------ */

const pains = [
  {
    icon: UserX,
    title: "Proxy attendance",
    text: "One worker marks attendance for five friends who never showed up. You pay for ghosts.",
  },
  {
    icon: Clock,
    title: "Workers leaving early",
    text: "They check in, disappear by 11 AM, and you find out at the end of the month. Maybe.",
  },
  {
    icon: PhoneCall,
    title: "Endless phone calls",
    text: "\"Sir, how many people on Site B today?\" — 20 calls a day just to know what's happening.",
  },
  {
    icon: FileWarning,
    title: "Salary disputes",
    text: "\"I worked 26 days!\" \"No, you worked 21.\" No proof either way. Every month, the same fight.",
  },
];

function PainPoints() {
  return (
    <section className="bg-steel py-16 text-steel-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Sound familiar?
        </h2>
        <p className="mt-3 max-w-2xl text-steel-foreground/70">
          Every contractor we talk to loses money the same four ways. Most
          don't realise how much until they add it up.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <p.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-foreground/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- HOW IT WORKS ----------------------------- */

const steps = [
  {
    n: "1",
    title: "Worker checks in with a selfie",
    text: "At the site gate, the worker takes a selfie in the app. Face match + GPS confirm it's really them, really on site. No buddy punching possible.",
  },
  {
    n: "2",
    title: "You see every site live",
    text: "One dashboard shows who's on each site, who left early, and who never came — updated in real time, no phone calls needed.",
  },
  {
    n: "3",
    title: "Salaries calculate themselves",
    text: "At month end, exact payable days and overtime are already computed. No registers, no arguments, no overpayment.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Up and running in one day
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          No hardware to install. No training headaches. If your supervisor can
          use WhatsApp, they can use INFIELD.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="font-display text-6xl font-extrabold text-primary/20">
                {s.n}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-xl">
          <img
            src={siteBandImg}
            alt="Construction workers on an active site"
            className="h-56 w-full object-cover md:h-72"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FEATURES -------------------------------- */

const features = [
  {
    icon: Camera,
    title: "Selfie + GPS attendance",
    text: "Face recognition matches the worker to their photo. GPS confirms they're inside the site boundary. Proxy attendance dies here.",
  },
  {
    icon: MapPin,
    title: "Live site tracking",
    text: "See every worker's location on a map during work hours. Know the moment someone leaves the site — not at month end.",
  },
  {
    icon: IndianRupee,
    title: "Automatic salary calculation",
    text: "Payable days, half days, overtime, advances — all computed automatically. Export the sheet, pay with confidence.",
  },
  {
    icon: Bell,
    title: "Instant alerts",
    text: "Get notified when attendance is suspicious, a worker leaves early, or a site is understaffed. Act today, not next month.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Built for sites, not offices
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Dust, heat, patchy network, shared phones — INFIELD is designed for
          how construction actually works in India.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Also used by service centres, hospitals, and field sales teams —
          anywhere people work away from a desk.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- CALCULATOR ------------------------------- */

function Calculator() {
  const [workers, setWorkers] = useState(50);
  const [dailyWage, setDailyWage] = useState(800);

  const { monthly, yearly } = useMemo(() => {
    // Conservative: 8% of paid attendance is proxy/ghost/time-theft
    const leakage = 0.08;
    const m = Math.round(workers * dailyWage * 26 * leakage);
    return { monthly: m, yearly: m * 12 };
  }, [workers, dailyWage]);

  const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");

  return (
    <section id="calculator" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              How much is proxy attendance costing you?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Most contractors are shocked by this number. Drag the sliders to
              match your site.
            </p>
            <div className="mt-8 space-y-8">
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold">Workers on site</label>
                  <span className="rounded-lg bg-secondary px-3 py-1 font-display text-lg font-bold">
                    {workers}
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={10}
                  value={workers}
                  onChange={(e) => setWorkers(Number(e.target.value))}
                  className="mt-3 w-full accent-[oklch(0.66_0.19_48)]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold">Average daily wage</label>
                  <span className="rounded-lg bg-secondary px-3 py-1 font-display text-lg font-bold">
                    ₹{dailyWage}
                  </span>
                </div>
                <input
                  type="range"
                  min={400}
                  max={2000}
                  step={50}
                  value={dailyWage}
                  onChange={(e) => setDailyWage(Number(e.target.value))}
                  className="mt-3 w-full accent-[oklch(0.66_0.19_48)]"
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-steel p-8 text-steel-foreground shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-steel-foreground/60">
              Estimated leakage (conservative 8%)
            </p>
            <p className="mt-4 font-display text-5xl font-extrabold text-primary">
              {fmt(monthly)}
              <span className="text-lg font-semibold text-steel-foreground/60"> /month</span>
            </p>
            <p className="mt-2 font-display text-2xl font-bold">
              {fmt(yearly)} <span className="text-base font-medium text-steel-foreground/60">every year</span>
            </p>
            <div className="my-6 h-px bg-white/10" />
            <p className="text-sm leading-relaxed text-steel-foreground/70">
              That's money walking out of your gate every single month. INFIELD
              typically pays for itself within the first salary cycle.
            </p>
            <a
              href="#demo"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Stop the leakage — Get Free Demo <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ BEFORE / AFTER ---------------------------- */

const beforeAfter = [
  {
    before: "Register books that anyone can sign for anyone",
    after: "Selfie + GPS proof for every single check-in",
  },
  {
    before: "20 phone calls a day to know who's on site",
    after: "One live dashboard, all sites, zero calls",
  },
  {
    before: "Salary day = argument day",
    after: "Salary sheet with photo proof — no disputes",
  },
  {
    before: "Finding out about shortages at month end",
    after: "Instant alerts the moment something's wrong",
  },
];

function BeforeAfter() {
  return (
    <section className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Life before and after INFIELD
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Before
            </p>
            {beforeAfter.map((r) => (
              <div
                key={r.before}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <p className="text-muted-foreground">{r.before}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              After
            </p>
            {beforeAfter.map((r) => (
              <div
                key={r.after}
                className="flex items-start gap-3 rounded-xl border border-primary/30 bg-card p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <p className="font-medium">{r.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ----------------------------------- */

const faqs = [
  {
    q: "What if my site has poor network?",
    a: "INFIELD works offline. Attendance is captured on the phone and syncs automatically when the network returns. No data is ever lost.",
  },
  {
    q: "Do workers need their own smartphones?",
    a: "No. One supervisor phone per site is enough — workers check in on it one by one. If workers have their own phones, they can use those too.",
  },
  {
    q: "Can a worker cheat with a photo of a photo?",
    a: "No. INFIELD uses liveness detection — a printed photo or another phone screen won't pass. And GPS ensures they're physically inside the site boundary.",
  },
  {
    q: "How long does setup take?",
    a: "Same day. Add your sites on the map, upload your worker list (we help you), and you're live. Most companies are fully running within 24 hours.",
  },
  {
    q: "Is it only for construction?",
    a: "Construction is our home ground, but service centres, hospitals, security agencies, and field sales teams use INFIELD too — anywhere attendance happens away from a desk.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on your worker count and sites. Book a free demo and we'll give you an exact quote — most customers recover the cost in their first salary cycle.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
          Questions contractors ask us
        </h2>
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <span
                  className={`font-display text-2xl text-primary transition-transform ${openIdx === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {openIdx === i && (
                <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- DEMO FORM ------------------------------- */

function DemoForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [workers, setWorkers] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `Hi INFIELD! I'd like a free demo.\n\nName: ${name}\nCompany: ${company}\nPhone: ${phone}\nWorkers: ${workers || "Not sure yet"}`;
    window.open(waLink(msg), "_blank");
  }

  const inputCls =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="demo" className="relative overflow-hidden py-16 md:py-24">
      <img
        src={finalCtaImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-steel/85" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="text-steel-foreground">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            See your site live in 30 minutes
          </h2>
          <p className="mt-4 max-w-md text-lg text-steel-foreground/80">
            Fill this in and we'll WhatsApp you to schedule your free demo.
            We'll show INFIELD running on a real site, with your questions
            answered live.
          </p>
          <ul className="mt-6 space-y-3 text-steel-foreground/80">
            {[
              "Free 30-minute demo, no commitment",
              "Exact pricing for your worker count",
              "Setup help included — live within 24 hours",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={submit}
          className="rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
        >
          <h3 className="font-display text-xl font-bold">Get your free demo</h3>
          <div className="mt-5 space-y-4">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputCls}
            />
            <input
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
              className={inputCls}
            />
            <input
              required
              type="tel"
              pattern="[0-9+ -]{10,15}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp number"
              className={inputCls}
            />
            <input
              value={workers}
              onChange={(e) => setWorkers(e.target.value)}
              placeholder="How many workers? (optional)"
              className={inputCls}
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Send on WhatsApp
            </button>
            <p className="text-center text-xs text-muted-foreground">
              We'll reply on WhatsApp within a few hours, usually much faster.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

/* --------------------------------- FOOTER --------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <HardHat className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-display text-lg font-extrabold">INFIELD</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Workforce management for construction, service, and field teams.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
          <a href="#demo" className="hover:text-foreground">Demo</a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} INFIELD. All rights reserved.
      </p>
    </footer>
  );
}

/* ------------------------------ STICKY MOBILE CTA ------------------------- */

function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <a
        href="#demo"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground"
      >
        Get Your Free Demo <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

/* ---------------------------------- PAGE ---------------------------------- */

function Index() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Calculator />
        <BeforeAfter />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
