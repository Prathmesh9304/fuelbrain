# EduWell.com — Design Reference Guide

A complete breakdown of the visual design, layout structure, and UI patterns used on [edu-well.com](https://edu-well.com/) to help replicate a similar look and feel.

---

## 1. Brand Identity

| Property   | Value                                              |
| ---------- | -------------------------------------------------- |
| Brand Name | **EduWell / Eduwell**                              |
| Tagline    | _"Find the Best Tutors Near You"_                  |
| Tone       | Friendly, trustworthy, professional, child-focused |
| Logo       | Full-color horizontal logo with icon + wordmark    |

---

## 2. Color Palette

Based on the visual style of the site (edtech / tutoring niche):

| Role                   | Color                     | Notes                             |
| ---------------------- | ------------------------- | --------------------------------- |
| **Primary**            | `#F4A623` / Amber-Orange  | Used for CTAs, highlights, badges |
| **Secondary / Accent** | `#1A73E8` / Blue          | Links, nav active state           |
| **Background (Light)** | `#FFFFFF` / White         | Main page background              |
| **Background (Alt)**   | `#F8F9FA` / Off-white     | Section alternating backgrounds   |
| **Dark Background**    | `#0D1B2A` / Deep Navy     | Footer, dark banner sections      |
| **Text (Primary)**     | `#1C1C1E` / Near-black    | Headings and body text            |
| **Text (Muted)**       | `#6B7280` / Gray          | Subtitles, meta text              |
| **Success/Star**       | `#FFD700` / Gold          | Star ratings                      |
| **CTA Button**         | `#F4A623` with white text | Primary action button             |

---

## 3. Typography

| Element                 | Style                                                              |
| ----------------------- | ------------------------------------------------------------------ |
| **Primary Font**        | Sans-serif (likely **Inter**, **Poppins**, or similar Google Font) |
| **H1 Hero**             | ~48–60px, Bold, dark color                                         |
| **H2 Section Headings** | ~32–40px, Bold or Semi-bold                                        |
| **H3 Card Headings**    | ~20–24px, Semi-bold                                                |
| **Body Text**           | ~16px, Regular weight, line-height ~1.6                            |
| **Small/Meta**          | ~13–14px, muted gray                                               |
| **CTA Button Text**     | ~16px, Bold, uppercase or title case                               |
| **Emoji in headings**   | Used sparingly for friendly tone (e.g., 🏆)                        |

---

## 4. Layout & Grid

- **Max container width:** ~1200–1280px, centered
- **Horizontal padding:** ~24–48px on sides
- **Section vertical padding:** ~60–100px top and bottom
- **Grid system:** CSS Grid / Flexbox; commonly 2-column or 3-column card grids
- **Responsive:** Mobile-first; hamburger menu on mobile
- **Section alternating:** Light white and off-white backgrounds alternate

---

## 5. Site Structure (Page Sections Top → Bottom)

### 5.1 Top Bar (Pre-header)

- Thin bar above the main nav
- Contains: Social icons (Facebook, Instagram, YouTube), "Refer & Earn" link, Phone number, Login link
- Background: Dark (navy or deep teal)
- Text: White or light gray, small font size (~13px)

---

### 5.2 Navigation Bar

- **Sticky** top navigation
- **Left:** Logo (image-based)
- **Right:** Nav links + CTA button
- Nav links: Home, Why Eduwell (dropdown), K-12 Tutoring (mega menu), Pricing, Testimonial, Join Eduwell (dropdown), Contact & Support
- **CTA Button:** `"Book Free Demo"` — amber/orange background, rounded corners, bold white text
- **Dropdown:** Multi-level (up to 3 levels deep for K-12 Tutoring → Subject → Level)
- **Mobile:** Hamburger icon, slide-in or accordion menu

---

### 5.3 Hero Section

- **Layout:** Two-column (text left, image right)
- **Badge:** Small pill/badge at top — e.g., `🏆 Tired of Struggling Alone?`
- **H1:** Large, bold, 2–3 lines — e.g., _"It's Time to Level Up Your Grades with Eduwell"_
- **Subtext:** 1–2 lines describing the value proposition
- **Bullet points:** 2 short benefit lines with checkmark icons
- **CTA Buttons:** Two buttons side-by-side — Primary filled (`Book Your Free Demo`) + Ghost/outlined (`How It Works`)
- **Hero Image:** Student or study-related lifestyle photo, right-aligned
- **Background:** White or very light gradient

---

### 5.4 Lead Capture / Contact Form Section

- Heading: _"Excel in Your School Subjects"_
- Subtext: _"Fill the below mentioned form to sync up with our tutors in less than a minute."_
- **Inline form** with fields (Name, Email, Phone, Subject, etc.)
- Two trust badges below form: _"Timely Progress Updates"_, _"24/7 Service Availability"_

---

### 5.5 Feature Icon Grid / Benefits Strip

- **8-column icon grid** (scrollable on mobile, wrapping grid on desktop)
- Each item: Small icon + short label (2–4 words)
- Items include: Customized learning plans, Make learning exciting, Nail your homework, Tech-enabled platform, Crack selective exams, Scholarship success, Future-ready tech skills, Learning aids & assessments
- Style: Light card or flat icon with label below

---

### 5.6 "Empowering Every Child" Section

- **Heading:** `The Ultimate 1-on-1 Online Learning Experience` + `Empowering Every Child to Succeed`
- **Two-column layout:**
  - **Academic Tutoring** card (left)
  - **Non-Academic Courses** card (right)
- Each card has: Icon/image, heading, short description paragraph
- **CTA Button** centered below: `Book Your Free Demo`
- **Background:** White or light off-white

---

### 5.7 Course Tabs Section

- **Heading:** _"Adding Value to Every Conversation"_
- **Tab switcher:** `Academic Tutoring` | `Non-academic Courses`
- **Academic tab:** Grid of subject cards — English, Maths, Science (each with level labels: Primary / Secondary / Senior Secondary)
- **Non-Academic tab:** Grid of course pills/cards — Coding, Chess, Music, Languages, Robotics, Art, Abacus, Exam Prep, Public Speaking, Digital Art, Vedic Math, Creative Writing, Phonics, Handwriting
- Card style: Rounded rectangle, icon + course name + subtitle

---

### 5.8 Testimonials Section (First Instance)

- **Heading:** _"Loved and Trusted by Parents Across the Globe"_
- **Sub-badge:** `5/5 Ratings!`
- **Layout:** 3-column card grid (or carousel on mobile)
- **Each card:** Avatar photo, Name, ★★★★★ stars, Quote text in blockquote style
- **Card style:** White card, subtle shadow, rounded corners

---

### 5.9 Full-Width CTA Banner

- **Dark/colored full-width banner** with background image overlay
- **Heading:** _"Want to Become an Academic All-Rounder? Discover EduWell's Online Tutoring Excellence"_
- **Subtext:** Short value statement
- **Two CTA buttons:** `Book Your Free Demo` + `Talk to Our Education Consultant`
- **Style:** High-contrast, bold, centered layout

---

### 5.10 About / Stats Section

- **Two-column layout:** Text content left, image right
- **Heading:** _"Attain True Academic Success with Expert-Led Tutoring at EduWell"_
- **Body:** 2–3 paragraphs about the company
- **3 Feature Highlights** (icon + bold title + description):
  - Personalized Learning, Flexible Scheduling
  - Targeted Support for A/B Grades
  - 4.9/5 Trust Score
- **CTA link/button:** `Start Your Learning Journey Now`

---

### 5.11 Stats Counter Row

- **3–4 animated counters** in a row
- Each counter: Large bold number + "+" or "%" suffix + label below
- Numbers: `100+ Group of Tutors`, `50+ Courses`, `97% Success Rate`, `Certified Students`
- **Style:** Centered, large font, colored accent numbers, gray label

---

### 5.12 FAQ Accordion

- **Heading:** _"Student's Encouraging Feedback"_ (dual-purpose — FAQ + reviews)
- Standard accordion (click to expand/collapse)
- 5 questions covering: What is Eduwell, Who are instructors, How to enroll, Live vs recorded, Age groups
- **Style:** Clean list, chevron/plus icon on right, border-bottom separator

---

### 5.13 Testimonials Section (Second Instance / Carousel)

- Repeated testimonial section — likely a slider/carousel version
- Same 3 testimonials with avatars and star ratings

---

### 5.14 Contact / Consultation CTA Section

- **Heading:** _"Consult with Our Team of Experts!"_
- Short descriptor text
- **Side-by-side layout:** Form (left) + Support image or banner (right)
- Includes phone/WhatsApp quick connect option
- Trust note: _"Send us a quick message, and we'll get back to you promptly"_

---

### 5.15 Footer

- **Dark navy background**
- **Logo** top-left with tagline
- **4–5 column grid:**
  - Column 1: About blurb + contact details (email, phone, location)
  - Column 2: Quick Links
  - Column 3: General Tutoring
  - Column 4: Your Learning Partner
  - Column 5: Non-Academic Courses + Partner with Us
- **Footer bottom bar:** Copyright text + Social media icons (Facebook, Instagram, YouTube)
- **Text:** Light gray/white on dark background
- **Link hover:** Amber/orange color

---

## 6. UI Components

### Buttons

| Type          | Style                                                                                |
| ------------- | ------------------------------------------------------------------------------------ |
| Primary CTA   | Amber/Orange background, white bold text, rounded corners (~8px), padding ~14px 28px |
| Secondary CTA | Outlined/ghost style, border matching primary, transparent background                |
| Nav CTA       | Same as Primary, slightly smaller                                                    |

### Cards

- White background
- Subtle box shadow: `0 4px 16px rgba(0,0,0,0.08)`
- Border radius: `12px–16px`
- Padding: `24px`
- Hover: Slight lift effect (`transform: translateY(-4px)`)

### Badges / Pills

- Small rounded pill: `border-radius: 999px`
- Light colored background (amber tint, blue tint)
- Small bold text inside

### Star Ratings

- Gold filled stars `★★★★★`
- Displayed on testimonial cards and section headers

### Section Headings Pattern

- **Pre-heading** (small caps or colored label above)
- **Main H2** (large, bold, dark)
- **Subtext paragraph** (muted gray, ~16–18px, max-width ~600px, centered)

---

## 7. Navigation Patterns

- **Multi-level mega menu** for K-12 Tutoring (3 levels deep)
- **Simple dropdowns** for Why Eduwell, Join Eduwell
- **Active state:** Underline or colored text
- **Mobile:** Full-screen or slide-in overlay menu with accordion sub-items

---

## 8. Imagery Style

- **Hero image:** Bright, lifestyle photo of student studying or with laptop
- **Section images:** Real photos (not illustrations), warm and inviting
- **Icons:** Flat colorful icons, consistent style across feature grids
- **Avatar photos:** Circular crop for testimonial headshots
- **Banners:** Full-width background images with dark overlay + white text

---

## 9. Spacing & Visual Rhythm

| Token                        | Value          |
| ---------------------------- | -------------- |
| Section padding (top/bottom) | `80px – 100px` |
| Card gap                     | `24px – 32px`  |
| Heading margin-bottom        | `16px`         |
| Sub-heading margin-bottom    | `32px`         |
| Button padding               | `14px 28px`    |
| Border radius (cards)        | `12px – 16px`  |
| Border radius (buttons)      | `6px – 8px`    |

---

## 10. Animations & Interactions

- **Counter animation:** Numbers count up from 0 on scroll into view
- **Card hover:** Subtle shadow lift (`translateY` + shadow increase)
- **CTA button hover:** Slight darkening of background color
- **Accordion:** Smooth expand/collapse with CSS transition
- **Tabs:** Instant switch with active underline indicator
- **Testimonial carousel:** Swipe-enabled on mobile, auto-play dots navigation

---

## 11. Key Design Principles to Replicate

1. **Trust signals everywhere** — ratings, counters, testimonials, tutor count
2. **Strong CTA repetition** — "Book Free Demo" button appears in every major section
3. **Child-safe, warm palette** — amber/orange tones feel energetic but not aggressive
4. **Clean whitespace** — generous padding keeps the layout breathable
5. **Social proof layered in** — star ratings, parent quotes, success percentages
6. **Mobile-first** — all sections stack gracefully on smaller screens
7. **Clear hierarchy** — pre-label → H2 → subtext → cards → CTA pattern repeated

---

_Reference captured from: https://edu-well.com/ — May 2026_
