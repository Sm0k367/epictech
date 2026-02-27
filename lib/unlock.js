// /lib/unlock.js

// KEY used to tag unlocked users in localStorage
const KEY = "epic-tech-ai-unlocked";

// Returns true if the user is marked as unlocked for this device/browser
export function isUnlocked() {
if (typeof window === "undefined") return false;
return !!window.localStorage.getItem(KEY);
}

// Run this when user returns from Stripe (e.g., from the /unlocked page)
export function setUnlocked() {
if (typeof window !== "undefined") {
window.localStorage.setItem(KEY, "yes");
}
}
