"use client";
import posthog from 'posthog-js';

// Initialize PostHog only in production to avoid noisy network errors in dev.
const PH_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

try {
  if (typeof window !== "undefined" && PH_KEY && process.env.NODE_ENV === "production") {
    posthog.init(PH_KEY, {
      api_host: "https://us.i.posthog.com",
      autocapture: false,
      capture_pageview: false,
      disable_session_recording: true,
      capture_performance: false,
      request_batching: true,
    });

    // Gracefully shut down on tab close/navigation to avoid aborted requests.
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        try {
          posthog.shutdown();
        } catch {
          // noop
        }
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange, { passive: true });

    // Clean up listener on hot reload
    if (import.meta && (import.meta as unknown as { hot?: { dispose(cb: () => void): void } }).hot) {
      (import.meta as unknown as { hot?: { dispose(cb: () => void): void } }).hot?.dispose(() => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
      });
    }
  }
} catch (err) {
  // Swallow errors to prevent crashing or noisy logs
  // eslint-disable-next-line no-console
  console.warn("PostHog initialization skipped:", err);
}
