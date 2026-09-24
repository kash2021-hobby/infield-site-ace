# Infield: Workforce Control

Build a single-page, highly engaging, high-converting, 100% mobile-responsive landing page for INFIELD — a smart workforce management app built primarily for construction companies (also usable by service centers, hospitals and field sales teams). Target audience: Indian construction company owners, contractors and site managers who struggle with proxy attendance, workers leaving the site, wasted time calling people, and salary disputes.

COPY PRINCIPLES (apply everywhere)

- Every headline names a real pain or a clear outcome, not a feature.

- Short, punchy, simple English. Speak directly to the owner ("you", "your site", "your money").

- Every section ends with a small outcome line or micro-CTA so the visitor always knows the next step.

- Primary CTA text everywhere: "Get My Free Demo →" (never generic "Submit").

DESIGN REFERENCE

Use the attached reference image for LAYOUT and STYLE only: section structure, two-tone headlines, pill buttons, eyebrow labels, card style, spacing, alternating navy/white sections, photo overlays, premium construction feel. Do NOT use the reference's yellow. All colors must match the attached INFIELD logo. Use the logo in the navbar and footer. There must be exactly 10 main sections in this exact order (they follow our explainer video scene-by-scene), plus top bar, navbar and footer.

TECH

- React + Tailwind + Framer Motion + Lucide icons.

- Scroll-triggered animations in every section (fade/slide-up, staggered children, count-up numbers, animated map pins, moving icons) so scrolling feels like watching the video.

- A thin blue scroll-progress bar at the very top of the page.

- App visuals (phone mockups, maps, dashboards, notifications) built in code/SVG, not images. Use high-quality construction photos only as backgrounds (Sections 1, 7, 10) with a navy overlay.

- Respect prefers-reduced-motion.

DESIGN SYSTEM (matched to INFIELD logo)

- Primary Blue #2D5BE3 (buttons, icons, highlights) | Hover #1E46C7

- Navy #0B1F4B (headings, navy sections) | Deep Navy #06132F (top bar, footer)

- Sky Accent #6EA8FF (second headline line on navy sections)

- Light Blue Bg #F3F6FD | Soft Blue Tint #E6EDFC | White #FFFFFF | Body Grey #5B6B82

- App status colors (inside mockups only): Green #22C55E Available, Amber #F59E0B Busy, Grey #9CA3AF Offline, Red #EF4444 Alert.

- Font: Poppins.

- Two-tone headlines: line 1 navy (light sections) or white (navy sections); line 2 Primary Blue on light sections, Sky Accent on navy sections.

- Eyebrow label: small uppercase text with a short blue line before it, above every headline.

- Buttons: fully rounded pill, Primary Blue, white bold text, arrow icon; hover = lift + darker blue + soft glow. Secondary = white/navy outline pill.

- Cards: white, rounded-xl, soft shadow, circular blue icon badge overlapping the card top.

- Navy sections: subtle blueprint line pattern in background.

- Section backgrounds: 1 Navy photo | 2 White | 3 Light Blue | 4 Navy | 5 White | 6 Light Blue | 7 Navy photo | 8 White | 9 Light Blue | 10 Navy photo | Footer Deep Navy.

TOP BAR (deep navy, desktop only)

Email | Phone | WhatsApp (+91 9164060961) left; social icons right.

NAVBAR (white, sticky, shadow on scroll)

Logo left | Features, How It Works, Payroll, Contact | blue pill "Get My Free Demo →". Mobile: logo + hamburger → full-screen navy menu with large links + CTA; closes on link tap and smooth-scrolls.

SECTION 1 — THE PROBLEM (Hero)

- Eyebrow: "FOR CONSTRUCTION COMPANIES & FIELD TEAMS"

- Headline: "You're Paying 50 Workers." / "Do You Know Where They Are?"

- Sub: "Proxy attendance. Workers missing from site. 20 calls a day just to find someone. Every day it costs you time and money — and you don't even see it happening."

- Three pain chips animate in one by one: "📞 Endless calls to find people", "🕒 Attendance marked, worker gone", "💸 Month-end salary fights"

- Buttons: "Get My Free Demo →" (blue) + "See How It Works" (outline, scrolls down).

- Micro-trust line under buttons (small, white/70%): "✓ Free personalised demo  ✓ [Setup support included]  ✓ No obligation"

- Right visual: manager's phone surrounded by animated worker icons drifting between a construction site, service center and hospital; location pins popping in and out (controlled chaos). Question bubbles appear one by one: "Who is available?", "Who is outside?", "Who is where?"

SECTION 2 — THE SOLUTION

- Eyebrow: "MEET INFIELD"

- Headline: "Now Imagine Knowing All of It —" / "In One Glance."

- Sub: "INFIELD puts every worker, every site and every rupee of payroll on one phone screen. No more calls. No more guessing. No more registers and Excel sheets."

- Visual: the chaos freezes and turns into one clean phone mockup with the INFIELD logo; five icons (Employees, Location, Attendance, Sales, Salary) connect to it with animated blue lines.

- 2x2 outcome grid: "Know Everything, Live" – every worker's status in real time | "Attendance That Can't Be Faked" – location-verified check-ins [only if true] | "Alerts Before Problems Grow" – instant notifications | "Payroll Without Arguments" – salary auto-calculated from real hours.

SECTION 3 — KNOW WHO IS AVAILABLE

- Eyebrow: "LIVE AVAILABILITY"

- Headline: "Need Someone Urgently?" / "Find the Nearest Worker in Seconds."

- Sub: "Stop calling 10 people to find one. See who's free, who's nearest, and connect in one tap."

- Visual: phone with map; avatars with status dots (green/amber/grey); list: Employee A — 0.8 km (Available), Employee B — 1.5 km (Busy), Employee C — 2.2 km (Offline). Tap/hover shows a blue "Connect" button.

- Outcome line: "Less time chasing people. More time getting work done."

SECTION 4 — WORK RADIUS ALERT (navy)

- Eyebrow: "WORK RADIUS ALERTS"

- Headline: "Left the Site for 'Just 5 Minutes'?" / "You'll Know."

- Sub: "Set a work radius around every site. If anyone stays outside for more than 30 minutes, both you and the employee get an instant alert. No arguments. No confrontation. Just facts."

- Visual: building with dashed sky-blue radius; employee icon moves outside; timer 05 min → 15 min → 30 min (turns red); two white notification cards slide in:

  Manager: "⚠️ Employee Outside Work Radius — More than 30 minutes"

  Employee: "You are outside the designated work area."

SECTION 5 — AUTOMATICALLY RESUMES TRACKING

- Eyebrow: "FAIR FOR EVERYONE"

- Headline: "Tracks Work Time." / "Not Their Personal Life."

- Sub: "Breaks are normal. The moment an employee returns to the work area, tracking resumes automatically. Fair for you, fair for your team — so workers accept it, not fight it."

- Visual: icon moves back inside radius, alert fades out, green badge "Back in Work Area", tracking toggle switches ON, mini dashboard updates.

- Small privacy line: "🔒 Tracking only during work hours · Employee consent built-in"

SECTION 6 — FIELD SALES TRACKING

- Eyebrow: "FIELD SALES"

- Headline: "Did They Really Visit the Client?" / "Now You'll Know."

- Sub: "See every route, every client visit and your team's sales progress — without asking anyone for a single report."

- Visual: map with animated blue route connecting 3 client pins ticking off Visit 01 ✓, Visit 02 ✓, Visit 03 ✓. Then 4 count-up stat cards: Visits 8 | Clients Met 6 | Distance 24 km | Sales Progress 72% (animated progress bar).

- Micro-CTA text link: "See this with your own team → Get My Free Demo"

SECTION 7 — CONSTRUCTION / TECHNICIAN WORKFORCE (navy photo band)

- Eyebrow: "SITE ATTENDANCE"

- Headline: "32 Workers on Site." / "Counted Before Your First Chai."

- Sub: "Know who came, when they came, when they left and exactly how many hours they worked — for every site, automatically. No registers. No proxy attendance."

- Visual: 20–30 worker icons walk into a site illustration; big count-up "Workers Present: 32"; entry/exit chips (In 8:58 AM / Out 6:05 PM); stats: Present 32 | Absent 5 | On Leave 3.

- Tab toggle: "Construction Site" / "Service Center" swaps the illustration.

SECTION 8 — SALARY & PAYROLL

- Eyebrow: "PAYROLL"

- Headline: "Month-End Salary Fights?" / "Over."

- Sub: "Attendance becomes work hours. Work hours become salary. Calculated automatically for daily, weekly or monthly payouts — every rupee backed by proof."

- Visual: animated 4-step flow: Attendance → Work Hours → Salary → Payout. Three cards: Daily ₹800 | Weekly ₹5,600 | Monthly ₹24,000 (small note "Example figures").

- INTERACTIVE "HOW MUCH ARE YOU LOSING?" CALCULATOR (highlighted card, soft blue tint):

  Inputs: Number of workers (slider 10–500, default 50), Average daily wage in ₹ (default 800), Minutes lost per worker per day (slider 0–120, default 30).

  Formula: monthly loss = workers × (daily wage ÷ 480) × minutes × 26.

  Output in large animated count-up: "You could be losing ₹X every month" and "₹Y every year".

  Small note: "Estimate based on your inputs."

  Button: "Stop This Loss — Get My Free Demo →" (scrolls to form).

SECTION 9 — EVERYTHING IN ONE PLACE

- Eyebrow: "ALL-IN-ONE PLATFORM"

- Headline: "Replace Registers, Calls & Excel" / "With One App."

- Sub: "Availability, location, attendance, field activity, sales and payroll — all in one INFIELD dashboard."

- Six cards fly in and lock into a grid around a central dashboard mockup: Location, Employees, Attendance, Field Tracking, Sales, Payroll (each with a blue icon badge + one-line benefit).

- BEFORE vs AFTER comparison (two columns; red ✗ for Without, green ✓ for With; stacks on mobile):

  Without INFIELD: ✗ Paper registers & proxy attendance | ✗ Calling around to find workers | ✗ No idea who left the site | ✗ Sales visits you can't verify | ✗ Salary disputes every month

  With INFIELD: ✓ Location-verified attendance | ✓ Live availability on one screen | ✓ Instant work-radius alerts | ✓ Every visit tracked on a map | ✓ Auto-calculated, proof-backed payroll

- Trust strip: "🔒 Tracking only during work hours · Employee consent built-in · Secure data"

SECTION 10 — FINAL CTA + FORM (navy photo)

- Left side:

  Eyebrow: "GET STARTED"

  Headline: "Don't Just Manage Your Team." / "Organize It Smarter."

  Tagline: "One App. One Dashboard. Complete Workforce Control."

  "In your free demo, you'll:" with blue check icons — See INFIELD live with a setup like yours | Get a walkthrough of attendance & payroll for your team size | Get all your questions answered.

  Risk reversal line: "No obligation. No pressure. [We reply within 2 hours.]"

  Phone + email with sky-blue icons.

- Right side: white rounded form card titled "Get Your Free Demo":

  Full Name (required), Company Name (required), Phone with +91 prefix (required, 10-digit validation, inputMode="tel"), Email (optional, type="email"), Team Size (1–20, 21–50, 51–200, 200+), Industry (Construction, Service Center, Hospital, Field Sales, Other), Message (optional).

  Inline red validation errors; loading spinner while submitting.

  Button: "Get My Free Demo on WhatsApp →"

  Under button (small): "🔒 Your details are safe. We never spam."

- ON SUBMIT:

  a) Save the submission to a database table "demo_requests" (name, company, phone, email, team_size, industry, message, created_at) using Lovable Cloud / Supabase so no lead is lost.

  b) Redirect to WhatsApp: https://wa.me/919164060961?text=<encodeURIComponent(message)>. Trigger directly in the submit handler (window.location.href on mobile, window.open new tab on desktop) to avoid popup blocking.

  c) Message: "Hello INFIELD Team, I would like to book a demo.\n\nName: {name}\nCompany: {company}\nPhone: +91 {phone}\nEmail: {email}\nTeam Size: {teamSize}\nIndustry: {industry}\nMessage: {message}" (skip empty optional fields).

  d) Success state: green check + "Almost done! Please tap 'Send' in WhatsApp to confirm your demo. Our team will contact you shortly." + link "Didn't open WhatsApp? Click here" (re-opens the same link).

FLOATING WHATSAPP BUTTON (all screen sizes)

- Fixed bottom-LEFT (20px desktop / 16px mobile, plus env(safe-area-inset-bottom)).

- Circle 56px desktop / 52px mobile, #25D366, white WhatsApp SVG logo, shadow, highest z-index, gentle pulse every few seconds (off for reduced motion).

- Desktop hover tooltip sliding right: "Chat on WhatsApp".

- Opens https://wa.me/919164060961?text=Hi%20INFIELD%20Team%2C%20I%27m%20interested%20in%20your%20workforce%20management%20app. in a new tab. aria-label="Chat with us on WhatsApp".

- All other WhatsApp links on the page use the same number.

MOBILE FLOATING CTA

- Mobile only: blue pill "Get My Free Demo" fixed bottom-RIGHT (never overlapping the WhatsApp button). Smooth-scrolls to the form; hides when the form is in view. Add bottom padding to the footer so nothing is covered.

FOOTER (deep navy)

Logo on a white rounded badge (so it's visible on dark) | Features, How It Works, Payroll, Contact | social icons | "Manage Your Workforce. Smarter." | "© 2026 INFIELD. All rights reserved." | Privacy Policy | Terms & Conditions.

MOBILE REQUIREMENTS (critical)

- Mobile-first; perfect at 360, 375, 390, 414, 768, 1024, 1440px.

- Zero horizontal scroll (overflow-x-hidden on body, max-w-full on images/SVGs).

- Two-column layouts stack: text first, visual below. Grids: 1 col mobile, 2 tablet, 3–4 desktop. Stats 2x2 on mobile.

- clamp() typography: hero ~32–36px mobile, ~56–64px desktop; body min 16px.

- Tap targets min 44x44px; main buttons full-width on mobile.

- Mockups and maps scale proportionally and stay centered; calculator sliders easy to drag on touch.

- Hover interactions also work on tap.

- Lighter animations on mobile (10–12 worker icons instead of 30) for smooth 60fps; lazy-load images.

- Form inputs 16px (prevents iOS zoom).

- Section padding ~64px mobile, ~96px desktop.

SEO

Title: "INFIELD — Stop Proxy Attendance & Track Your Construction Workforce Live". Meta description: "Know who's on site, who left, and pay exact salaries automatically. INFIELD is the workforce management app for construction companies. Get your free demo." Open Graph tags; logo icon as favicon. Smooth scrolling for all anchor links.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://infield-site-ace.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c9f1ba42-9266-425a-9b07-b83a20159603).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
