/**
 * Breakpoints
 * Simple static class to get the current breakpoint value.
 *
 * Usage:
 * if(Breakpoints.current === 3) {
 *  `Now you kow that this large`
 * }
 */

/**
 * Stores breakpoints values.
 * @type {Object}
 */
let BREAKPOINT = new Map();
BREAKPOINT.set('S', 1);
BREAKPOINT.set('M', 2);
BREAKPOINT.set('L', 3);
BREAKPOINT.set('XL', 4);
BREAKPOINT.set('XXL', 5);

class Breakpoints {
  /**
   * Get current breakpoint value
   *
   * @return {number} Number that correspond to the breakpoint.
  */
  static get current() {
    return BREAKPOINT.get(getComputedStyle(document.querySelector("body"), '::after').content.replace(/'|"/gi, ''));
  }
}

export default Breakpoints;
