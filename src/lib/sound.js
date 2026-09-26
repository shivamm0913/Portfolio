import { play, setEnabled, setVolume } from "cuelume";

let initialized = false;
let lastPlayTime = 0;

/**
 * Initializes Cuelume interaction sounds.
 * Plays the delightful "sparkle" recipe consistently on clicks across the app.
 * Absolutely NO hover sounds anywhere per design requirements.
 */
export function initSound() {
  if (initialized || typeof window === "undefined") return;

  try {
    // 1. Load sound preference
    const saved = localStorage.getItem("portfolio:sound_enabled");
    const isEnabled = saved === null ? true : saved === "true";
    setEnabled(isEnabled);
    setVolume(0.5);

    // 2. Play consistent "sparkle" sound on pointer clicks
    document.addEventListener(
      "pointerdown",
      (e) => {
        const currentlyEnabled = localStorage.getItem("portfolio:sound_enabled");
        if (currentlyEnabled === "false") return;

        // Prevent overlapping sound stutter on ultra-rapid clicks
        const now = performance.now();
        if (now - lastPlayTime < 70) return;
        lastPlayTime = now;

        const target = e.target;
        if (!target) return;

        // Interactive elements (buttons, links, controls) get standard volume
        const interactive = target.closest(
          "button, a, input, select, textarea, [role='button'], .clickable, .cursor-pointer"
        );

        if (interactive) {
          play("sparkle", { volume: 0.5 });
        } else {
          // Subtle page click sparkle
          play("sparkle", { volume: 0.25 });
        }
      },
      { passive: true }
    );

    initialized = true;
  } catch (err) {
    console.warn("Failed to initialize Cuelume audio:", err);
  }
}

/**
 * Plays the sparkle sound directly (e.g. for notifications or milestones).
 */
export function playSparkle(options = {}) {
  const currentlyEnabled = localStorage.getItem("portfolio:sound_enabled");
  if (currentlyEnabled === "false") return;
  play("sparkle", { volume: 0.5, ...options });
}

/**
 * Toggle sound on / off globally and persist in localStorage
 */
export function toggleSound() {
  const current = localStorage.getItem("portfolio:sound_enabled");
  const next = current === "false" ? true : false;
  localStorage.setItem("portfolio:sound_enabled", String(next));
  setEnabled(next);
  if (next) {
    play("sparkle", { volume: 0.5 });
  }
  return next;
}

export function isSoundEnabled() {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem("portfolio:sound_enabled");
  return saved === null ? true : saved === "true";
}

export { play, setEnabled, setVolume };
