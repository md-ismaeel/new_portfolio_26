// /*
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap");
// @import "tailwindcss";

// /* Essential theme configuration */
// @theme {
//   /* Updated font families with modern combination */
//   --font-family-sans: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
//     Roboto, sans-serif;
//   --font-family-heading: "Playfair Display", Georgia, serif;

//   /* Core color palette */
//   --color-primary: #4285f4;
//   --color-primary-600: #1c6ef7;
//   --color-primary-700: #0066ff;
//   --color-accent: #d946ef;
//   --color-accent-warm: #f472b6;
//   --color-accent-cool: #22c55e;

//   /* Border colors for Tailwind */
//   --color-border: rgba(0, 0, 0, 0.1);
//   --color-border-light: rgba(0, 0, 0, 0.05);
//   --color-border-dark: rgba(255, 255, 255, 0.1);
//   --color-card-border: rgba(0, 0, 0, 0.08);

//   /* Enhanced spacing */
//   --spacing-18: 4.5rem;
//   --spacing-20: 5rem;
//   --spacing-24: 6rem;
//   --spacing-32: 8rem;
//   --spacing-40: 10rem;
//   --spacing-48: 12rem;
//   --spacing-64: 16rem;
//   --spacing-80: 20rem;

//   /* Modern shadows */
//   --shadow-card: 0 8px 30px rgba(0, 0, 0, 0.12);
//   --shadow-float: 0 20px 40px rgba(0, 0, 0, 0.15);
//   --shadow-glow: 0 0 50px rgba(66, 133, 244, 0.3);
// }

// /* CSS Variables for themes */
// :root {
//   --background: #ffffff;
//   --background-secondary: #fafafa;
//   --foreground: #171717;
//   --foreground-secondary: #404040;
//   --foreground-muted: #737373;
//   --card: #ffffff;
//   --card-border: rgba(0, 0, 0, 0.08);
//   --primary: #4285f4;
//   --primary-hover: #1c6ef7;
//   --accent: #d946ef;
//   --border: rgba(0, 0, 0, 0.1);
//   --ring: #4285f4;
// }

// .dark {
//   --background: #0a0a0a;
//   --background-secondary: #0f0f0f;
//   --foreground: #fafafa;
//   --foreground-secondary: #d4d4d4;
//   --foreground-muted: #737373;
//   --card: #0f0f0f;
//   --card-border: rgba(255, 255, 255, 0.08);
//   --primary: #60a5fa;
//   --primary-hover: #93c5fd;
//   --accent: #e879f9;
//   --border: rgba(255, 255, 255, 0.1);
//   --ring: #60a5fa;
// }

// /* Base system styles */
// * {
//   box-sizing: border-box;
//   border-width: 0;
//   border-style: solid;
//   border-color: var(--border);
// }

// html {
//   scroll-behavior: smooth;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   font-family: var(--font-family-sans);
// }

// body {
//   background-color: var(--background);
//   color: var(--foreground);
//   line-height: 1.6;
//   letter-spacing: -0.011em;
//   overflow-x: hidden;
//   font-family: var(--font-family-sans);
// }

// /* Selection styles */
// ::selection {
//   background-color: rgba(66, 133, 244, 0.15);
//   color: var(--primary);
// }

// /* Scrollbar styles */
// ::-webkit-scrollbar {
//   width: 8px;
//   height: 8px;
// }

// ::-webkit-scrollbar-track {
//   background-color: var(--background-secondary);
// }

// ::-webkit-scrollbar-thumb {
//   background-color: rgba(163, 163, 163, 0.3);
//   border-radius: 9999px;
//   transition: background-color 0.2s ease;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background-color: rgba(163, 163, 163, 0.5);
// }

// /* Focus styles */
// :focus-visible {
//   outline: 2px solid var(--ring);
//   outline-offset: 2px;
//   border-radius: 0.25rem;
// }

// /* Typography utilities */
// .text-balance {
//   text-wrap: balance;
// }

// .text-pretty {
//   text-wrap: pretty;
// }

// /* Background utilities - Fixed to match Tailwind naming */
// .bg-primary-background {
//   background-color: var(--background);
// }

// .bg-secondary-background {
//   background-color: var(--background-secondary);
// }

// .bg-card {
//   background-color: var(--card);
// }

// .bg-primary {
//   background-color: var(--primary);
// }

// .bg-accent {
//   background-color: var(--accent);
// }

// /* Text color utilities */
// .text-primary {
//   color: var(--primary);
// }

// .text-foreground {
//   color: var(--foreground);
// }

// .text-foreground-secondary {
//   color: var(--foreground-secondary);
// }

// .text-foreground-muted {
//   color: var(--foreground-muted);
// }

// .border-custom {
//   border: 1px solid rgba(229, 229, 229, 0.5);
// }

// .border-top {
//   border-top: 1px solid rgba(229, 229, 229, 0.5);
// }

// .border-custom-card {
//   border-color: var(--card-border);
// }

// .border-custom-primary {
//   border-color: var(--primary);
// }

// .border-custom-accent {
//   border-color: var(--accent);
// }

// /* Dark mode variants */
// .dark .border-custom {
//   border: 1px solid rgba(38, 38, 38, 0.5);
// }
// .dark .border-top {
//   border-top: 1px solid rgba(38, 38, 38, 0.5);
// }

// /* Gradient text effects */
// .gradient-text {
//   background: linear-gradient(135deg, var(--primary), var(--accent));
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-size: 200% 200%;
//   animation: gradient-flow 6s ease infinite;
// }

// /* Glassmorphism */
// .glass {
//   backdrop-filter: blur(20px) saturate(180%);
//   background-color: rgba(255, 255, 255, 0.8);
//   border: 1px solid rgba(229, 229, 229, 0.5);
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
// }

// .dark .glass {
//   background-color: rgba(15, 15, 15, 0.8);
//   border: 1px solid rgba(38, 38, 38, 0.5);
// }

// /* Shadow utilities */
// .shadow-card {
//   box-shadow: var(--shadow-card);
// }

// .shadow-float {
//   box-shadow: var(--shadow-float);
// }

// .shadow-glow {
//   box-shadow: var(--shadow-glow);
// }

// /* Animation utilities */
// .animate-fade-in {
//   animation: fade-in 0.8s ease forwards;
// }

// .animate-scale-in {
//   animation: scale-in 0.5s ease forwards;
// }

// .animate-float {
//   animation: float 6s ease-in-out infinite;
// }

// /* Interactive states */
// .interactive {
//   transition: all 0.3s ease;
//   cursor: pointer;
// }

// .interactive:hover {
//   transform: translateY(-2px) scale(1.02);
// }

// .interactive-lift {
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
// }

// .interactive-lift:hover {
//   transform: translateY(-8px);
//   box-shadow: var(--shadow-float);
// }

// /* Background utilities */
// .bg-mesh {
//   background-image: radial-gradient(
//       at 40% 20%,
//       rgba(66, 133, 244, 0.3) 0px,
//       transparent 50%
//     ),
//     radial-gradient(at 80% 0%, rgba(217, 70, 239, 0.2) 0px, transparent 50%),
//     radial-gradient(at 0% 50%, rgba(217, 70, 239, 0.2) 0px, transparent 50%),
//     radial-gradient(at 80% 50%, rgba(255, 107, 53, 0.15) 0px, transparent 50%);
// }

// /* Container utilities */
// .container-narrow {
//   max-width: 48rem;
//   margin: 0 auto;
//   padding: 0 1rem;
// }

// .container-content {
//   max-width: 72rem;
//   margin: 0 auto;
//   padding: 0 1rem;
// }

// .container-wide {
//   max-width: 80rem;
//   margin: 0 auto;
//   padding: 0 1rem;
// }

// @media (min-width: 640px) {
//   .container-narrow,
//   .container-content,
//   .container-wide {
//     padding: 0 2rem;
//   }
// }

// /* Section spacing */
// .section-y {
//   padding: 5rem 0;
// }

// @media (min-width: 768px) {
//   .section-y {
//     padding: 8rem 0;
//   }
// }

// /* Component classes */
// .card-modern {
//   background-color: var(--card);
//   /* border: 1px solid var(--card-border); */
//   border-radius: 1rem;
//   padding: 1.5rem;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
// }

// .dark .card-modern {
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
// }

// .card-modern:hover {
//   transform: translateY(-8px);
//   box-shadow: var(--shadow-float);
//   border-color: rgba(66, 133, 244, 0.2);
// }

// .dark .card-modern:hover {
//   border-color: rgba(96, 165, 250, 0.3);
// }

// /* Button system - Modern UI with beautiful gradient colors */
// .btn {
//   padding: 1rem 2.5rem;
//   border-radius: 1.25rem;
//   font-weight: 600;
//   font-size: 0.95rem;
//   letter-spacing: -0.01em;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   position: relative;
//   overflow: hidden;
//   border: none;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   backdrop-filter: blur(10px);
//   transform: translateZ(0);
// }

// .btn-primary {
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   color: #ffffff;
//   box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   position: relative;
// }

// .btn-primary::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   padding: 1px;
//   background: linear-gradient(
//     135deg,
//     rgba(255, 255, 255, 0.3),
//     rgba(255, 255, 255, 0.1),
//     rgba(255, 255, 255, 0.2)
//   );
//   border-radius: inherit;
//   mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//   mask-composite: xor;
//   -webkit-mask-composite: xor;
//   pointer-events: none;
// }

// .btn-primary::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: -100%;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     90deg,
//     transparent,
//     rgba(255, 255, 255, 0.3),
//     transparent
//   );
//   transition: left 0.6s;
// }

// .btn-primary:hover {
//   background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
//   transform: translateY(-2px) scale(1.02);
//   box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
// }

// .btn-primary:hover::after {
//   left: 100%;
// }

// .btn-primary:active {
//   transform: translateY(0) scale(0.98);
//   box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
// }

// .btn-secondary {
//   background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
//   color: #8b4513;
//   border: 1px solid rgba(139, 69, 19, 0.2);
//   position: relative;
//   overflow: hidden;
//   box-shadow: 0 2px 10px rgba(252, 182, 159, 0.3);
// }

// .btn-secondary::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   padding: 1px;
//   background: linear-gradient(
//     135deg,
//     rgba(139, 69, 19, 0.15),
//     rgba(252, 182, 159, 0.1),
//     rgba(139, 69, 19, 0.15)
//   );
//   border-radius: inherit;
//   mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//   mask-composite: xor;
//   -webkit-mask-composite: xor;
//   pointer-events: none;
//   opacity: 0;
//   transition: opacity 0.3s ease;
// }

// .btn-secondary::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: -100%;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     90deg,
//     transparent,
//     rgba(139, 69, 19, 0.1),
//     transparent
//   );
//   transition: left 0.6s;
// }

// .btn-secondary:hover {
//   background: linear-gradient(135deg, #fed7aa 0%, #fb923c 100%);
//   transform: translateY(-2px) scale(1.02);
//   border-color: rgba(139, 69, 19, 0.3);
//   box-shadow: 0 6px 20px rgba(252, 182, 159, 0.4);
//   color: #7c2d12;
// }

// .btn-secondary:hover::before {
//   opacity: 1;
// }

// .btn-secondary:hover::after {
//   left: 100%;
// }

// .btn-secondary:active {
//   transform: translateY(0) scale(0.98);
//   box-shadow: 0 2px 8px rgba(252, 182, 159, 0.25);
// }

// /* Dark mode variants */
// .dark .btn-primary {
//   background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
//   box-shadow: 0 4px 20px rgba(67, 56, 202, 0.4);
//   border-color: rgba(255, 255, 255, 0.15);
// }

// .dark .btn-primary:hover {
//   background: linear-gradient(135deg, #3730a3 0%, #6d28d9 100%);
//   box-shadow: 0 8px 30px rgba(67, 56, 202, 0.5);
// }

// .dark .btn-secondary {
//   background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
//   color: #f3f4f6;
//   border-color: rgba(243, 244, 246, 0.2);
//   box-shadow: 0 2px 10px rgba(31, 41, 55, 0.3);
// }

// .dark .btn-secondary:hover {
//   background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
//   border-color: rgba(243, 244, 246, 0.3);
//   box-shadow: 0 6px 20px rgba(31, 41, 55, 0.4);
//   color: #ffffff;
// }

// .dark .btn-secondary::after {
//   background: linear-gradient(
//     90deg,
//     transparent,
//     rgba(243, 244, 246, 0.1),
//     transparent
//   );
// }

// @keyframes spin {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }

// /* Accessibility improvements */
// @media (prefers-reduced-motion: reduce) {
//   .btn,
//   .btn::before,
//   .btn::after {
//     transition: none !important;
//     animation: none !important;
//   }
// }

// @media (hover: none) {
//   .btn:hover {
//     transform: none;
//     box-shadow: none;
//   }
// }

// .display-md {
//   font-family: var(--font-family-heading);
//   font-size: clamp(2rem, 6vw, 3.5rem);
//   font-weight: 600;
//   line-height: 1;
//   letter-spacing: -0.03em;
//   text-wrap: balance;
// }

// .display-sm {
//   font-family: var(--font-family-heading);
//   font-size: clamp(1.5rem, 4vw, 3rem);
//   font-weight: 600;
//   line-height: 1.1;
//   letter-spacing: -0.02em;
//   text-wrap: balance;
// }

// .heading-xl {
//   font-family: var(--font-family-heading);
//   font-size: clamp(2rem, 5vw, 3.5rem);
//   font-weight: 600;
//   line-height: 1.1;
//   letter-spacing: -0.025em;
//   text-wrap: balance;
// }

// .heading-lg {
//   font-family: var(--font-family-heading);
//   font-size: clamp(1.5rem, 4vw, 2.5rem);
//   font-weight: 600;
//   line-height: 1.2;
//   letter-spacing: -0.02em;
//   text-wrap: balance;
// }

// .heading-md {
//   font-family: var(--font-family-heading);
//   font-size: clamp(1.25rem, 3vw, 2rem);
//   font-weight: 600;
//   line-height: 1.25;
//   letter-spacing: -0.015em;
// }

// .heading-sm {
//   font-family: var(--font-family-heading);
//   font-size: 1.4rem;
//   font-weight: 600;
//   line-height: 1.25;
//   letter-spacing: -0.01em;
// }

// .body-xl {
//   font-size: 1.25rem;
//   line-height: 1.7;
//   color: var(--foreground-secondary);
//   text-wrap: pretty;
// }

// .body-lg {
//   font-size: 1.125rem;
//   line-height: 1.7;
//   color: var(--foreground-secondary);
//   text-wrap: pretty;
// }

// .body-md {
//   font-size: 1rem;
//   line-height: 1.6;
//   color: var(--foreground-secondary);
// }

// .caption {
//   font-size: 0.875rem;
//   line-height: 1.5;
//   color: var(--foreground-muted);
//   letter-spacing: 0.01em;
// }

// /* Keyframe animations */
// @keyframes fade-in {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes scale-in {
//   from {
//     opacity: 0;
//     transform: scale(0.95);
//   }
//   to {
//     opacity: 1;
//     transform: scale(1);
//   }
// }

// @keyframes float {
//   0%,
//   100% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(-20px);
//   }
// }

// @keyframes gradient-flow {
//   0%,
//   100% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
// }

// /* Responsive design */
// @media (max-width: 640px) {
//   .section-y {
//     padding: 3rem 0;
//   }

//   .card-modern {
//     padding: 1.5rem;
//   }

//   .btn {
//     padding: 0.875rem 2rem;
//     font-size: 0.9rem;
//   }
// }

// /* Accessibility improvements */
// @media (prefers-reduced-motion: reduce) {
//   *,
//   *::before,
//   *::after {
//     animation-duration: 0.01ms !important;
//     animation-iteration-count: 1 !important;
//     transition-duration: 0.01ms !important;
//     scroll-behavior: auto !important;
//   }
// }

// @media (hover: none) {
//   .interactive:hover,
//   .interactive-lift:hover,
//   .card-modern:hover,
//   .btn:hover {
//     transform: none;
//     box-shadow: none;
//   }
// }

// */