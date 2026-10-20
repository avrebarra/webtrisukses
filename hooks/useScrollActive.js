import { useState, useEffect } from "react";

// fixes missing cleanup in Header.jsx — minimal hook, no new dep
export default function useScrollActive(threshold = 20) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return active;
}
