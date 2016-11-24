/*
  Get Breakpoint method
  =======================================
  - *Author*          liamegan
  - *email*           liam@wethecollective.com
  - *Created*         2014-07-22 10:36:30
  - *namespace*       wtc.utilities
  - *Requirements*    n/a
  - *Description*     Returns the breakpoint that the browser is currently sized at
  - *Edited by*       Liam Egan
  - *Edited*          2016-06-20 11:51:50
  - *Version*         1.0
*/

const BREAKPOINT = {
  S: 1,
  M: 2,
  L: 3,
  XL: 4,
  XXL: 5
};

class Breakpoints {

  /**
   * getBreakpoint
   * @return {number} Number that correspond to the breakpoint.
  */
  static get getBreakpoint() {
    let bp = getComputedStyle(document.querySelector("body"), '::after').content;
    bp = bp.replace(/'|"/gi, '');

    let bps = bp.split(/,\s*/);
    let rtn = 0;

    for (let i = 0; i < bps.length; i++) {
      bp = bps[i];

      if (BREAKPOINT[bp]) {
        rtn = BREAKPOINT[bp];
        break;
      }
    }

    return rtn;
  }
}

export default Breakpoints;
