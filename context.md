# Project Context: FuelBrain Website

## Brand Overview
FuelBrain is a vibrant online education platform for kids (8-16) specializing in Chess, Coding, and Mathematics. The goal is logical development and intellectual growth through gamified, structured learning.

## Visual Identity
- **Theme:** Light mode, vibrant, high-energy.
- **Style:** 3D "Bento Grid" layout, large rounded corners (2xl/3xl), and interactive depth.
- **Color Palette:** Poppy Blue, Electric Orange, and Sunny Yellow.
- **Background:** Dynamic Framer Motion animations (floating Lucide icons and shifting gradients).

## Tech Stack & Architecture
- **Framework:** React.js
- **Styling:** Tailwind CSS (3D depth/glassmorphism).
- **Icons:** Lucide React (Main library).
- **Animation:** Framer Motion.
- **Project Structure:** - Modular Atomic Design.
  - Shared UI components in `src/components/ui/`.
  - Feature-specific components localized within their respective Page folders in `src/pages/`.
  - Barrel exports (`index.js`) for both `components/` and `pages/`.

## Page-Specific Requirements
1. **Home:** Hero section, Program Overview, Why Choose Us.
2. **Services:** Detailed course breakdown (No Pricing; CTAs link to Contact).
3. **Achievements:** Founder Profile (Omkar Andhere), 10 Levels of ICMAS Abacus, and Image Gallery (FIDE Certificate, Trophies, Medals).
4. **About:** Vision/Mission.
5. **Contact:** Form with WhatsApp floating button.

## Asset Reference
- `Omkar Andhere.jpeg`, `Omkar FIDE Certificate.jpeg`, `Trophies.jpeg`, `Medals.jpeg`.

## Environment Variables
- `VITE_WHATSAPP_NUMBER`: Defined in `frontend/.env`. This string configures the phone number for the WhatsApp floating button and contact information globally. Format must be the country code followed immediately by the number (e.g. `917709663121`). Do not use spaces or '+' signs.