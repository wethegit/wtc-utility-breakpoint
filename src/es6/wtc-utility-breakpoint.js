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
class Breakpoints {
  constructor() {
    this.BREAKPOINT_S = 1;
    this.BREAKPOINT_M = 2;
    this.BREAKPOINT_L = 3;
    this.BREAKPOINT_XL = 4;
    this.BREAKPOINT_XXL = 5;
  }

  /**
   * getBreakpoint
   * @all  {boolean} Return an array with all the breakpoints if true.
   * @return {number|array}
  */
  getBreakpoint(all = false) {
    let bp = getComputedStyle(document.querySelector("body"), '::after').content;
    bp = bp.replace(/'|"/gi, '');

    let bps = bp.split(/,\s*/);
    let rtn = [];

    for (let i = 0; i < bps.length; i++) {
      bp = bps[i];
      if (this['BREAKPOINT_' + bp]) {
        rtn.push(this['BREAKPOINT_' + bp]);
      }
    }

    if (!all) {
      return rtn[0];
    }

    return rtn;
  }
}

export default Breakpoints;
