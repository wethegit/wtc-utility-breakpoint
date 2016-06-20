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
; 'use strict';

(function()
{
  var _base;
  window.wtc || (window.wtc = {});
  (_base = window.wtc).utilities || (_base.utilities = {});

  (function(NS)
  {
    NS.Breakpoints = (function()
    {
      function Breakpoints() {}
      Breakpoints.BREAKPOINT_S = 1;
      Breakpoints.BREAKPOINT_M = 2;
      Breakpoints.BREAKPOINT_L = 3;
      Breakpoints.BREAKPOINT_XL = 4;
      Breakpoints.BREAKPOINT_XXL = 5;
      Breakpoints.getBreakpoint = function(all) {
        var bp, bps, rtn, _i, _len;
        if (all == null) {
          all = false;
        }
        bp = getComputedStyle(document.querySelector("body"), '::after').content;
        bp = bp.replace(/'|"/gi, '');
        bps = bp.split(/,\s*/);
        rtn = [];
        for (_i = 0, _len = bps.length; _i < _len; _i++) {
          bp = bps[_i];
          if (NS.Breakpoints['BREAKPOINT_' + bp]) {
            rtn.push(NS.Breakpoints['BREAKPOINT_' + bp]);
          }
        }
        if (!all) {
          return rtn[0];
        }
        return rtn;
      };
      /**
       * checkBreakpoint
       * @cl  {string} String, separated with spaces (S M L XL, XXL)
       * @return {boolean}
      */
      Breakpoints.checkBreakpoint = function(cl)
      {
        var b, breakpoints, current, _i, _len;
        breakpoints = cl.split(' ');
        current = this.getBreakpoint(true);
        for (_i = 0, _len = breakpoints.length; _i < _len; _i++) {
          b = breakpoints[_i];
          if (current.indexOf(b) >= 0) {
            return true;
          }
        }
        return false;
      };
      return Breakpoints;
    })();
  })(window.wtc.utilities);
})();