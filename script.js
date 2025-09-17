/* ==============================
   Part 2: JavaScript Functions
   Scope, Parameters & Return Values
   ============================== */

// Global variable (used to demonstrate global vs local scope)
let isSliding = false;

/**
 * Toggle the sliding animation on the box.
 * Demonstrates use of global variable scope.
 */
function toggleBox() {
  const box = document.getElementById("box");
  isSliding = !isSliding; // Update global state

  if (isSliding) {
    box.classList.add("slide");
  } else {
    box.classList.remove("slide");
  }
}

/**
 * Reusable function that toggles a CSS class on any element.
 * @param {string} elementId - The element's ID.
 * @param {string} className - The CSS class to toggle.
 * @returns {boolean} - True if class was added, False if removed.
 */
function toggleClass(elementId, className) {
  const el = document.getElementById(elementId);

  if (el.classList.contains(className)) {
    el.classList.remove(className);
    return false; // class was removed
  } else {
    el.classList.add(className);
    return true; // class was added
  }
}

/**
 * Use the reusable toggleClass() to control keyframe animations.
 * Demonstrates function reusability and return values.
 */
function togglePulse() {
  let result = toggleClass("box", "pulse");
  console.log("Pulse animation active?", result);
}
