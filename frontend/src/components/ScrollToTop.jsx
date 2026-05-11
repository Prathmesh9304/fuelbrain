import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Send a pageview to Google Analytics whenever the route changes
    if (import.meta.env.VITE_GA_TRACKING_ID) {
      ReactGA.send({ hitType: "pageview", page: pathname });
    }
  }, [pathname]);

  return null;
}
