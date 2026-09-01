let lockCount = 0;
let previousOverflowY = null;

/**
 * Locks body vertical scrolling. Returns an unlock function.
 * Safe to call from multiple components (reference counted).
 */
export function lockBodyScroll() {
  if (typeof document === "undefined") return () => {};

  lockCount += 1;

  if (lockCount === 1) {
    previousOverflowY = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";
  }

  return function unlockBodyScroll() {
    if (typeof document === "undefined") return;

    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.body.style.overflowY = previousOverflowY || "";
      previousOverflowY = null;
    }
  };
}




