import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ReactGA from "react-ga4";
import "./index.css";
import App from "./App.jsx";

// Initialize Google Analytics if tracking ID is present
const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID;
if (gaTrackingId) {
  ReactGA.initialize(gaTrackingId);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  </StrictMode>,
);
