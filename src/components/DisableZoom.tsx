"use client";

import { useEffect } from "react";

/**
 * DisableZoom component prevents the user from zooming in or out using keyboard shortcuts,
 * Ctrl/⌘ + mouse wheel, and pinch-to-zoom (gesture events on Safari).
 *
 * IMPORTANT: Disabling zoom can negatively impact accessibility. Use with caution.
 */
export default function DisableZoom() {
  useEffect(() => {
    // Prevent zoom with Ctrl/⌘ + wheel
    const wheelHandler = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Prevent zoom with keyboard shortcuts (Ctrl/⌘ + '+', '-', '0')
    const keydownHandler = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        [
          "=",
          "+",
          "-",
          "0",
          "Equal",
          "NumpadAdd",
          "NumpadSubtract",
          "Digit0",
        ].includes(e.key)
      ) {
        e.preventDefault();
      }
    };

    // Safari/iOS pinch-zoom gesture events
    const gestureHandler = (e: Event) => {
      e.preventDefault();
    };

    const opts: AddEventListenerOptions & { passive: false } = { passive: false };
    window.addEventListener("wheel", wheelHandler, opts);
    window.addEventListener("keydown", keydownHandler, opts);
    window.addEventListener("gesturestart", gestureHandler, opts);
    window.addEventListener("gesturechange", gestureHandler, opts);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("keydown", keydownHandler);
      window.removeEventListener("gesturestart", gestureHandler);
      window.removeEventListener("gesturechange", gestureHandler);
    };
  }, []);

  return null;
}
