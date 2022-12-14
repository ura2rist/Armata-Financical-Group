!(function (a) {
  'use strict';
  function b(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    return a;
  }
  function c(a) {
    (this.options = b({}, this.options)), b(this.options, a), this._init();
  }
  var d = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd',
      msTransition: 'MSTransitionEnd',
      transition: 'transitionend',
    },
    e = d[Modernizr.prefixed('transition')];
  (c.prototype.options = { elementId: 'svg' }),
    (c.prototype._init = function () {
      (this.svg = document.getElementById(this.options.elementId)),
        (this.paths = this.svg.querySelectorAll('path')),
        this._initAnimation();
    }),
    (c.prototype._initAnimation = function () {
      for (var a = 0; a < this.paths.length; a++) {
        var b = this.paths[a],
          c = b.getTotalLength();
        (b.style.fillOpacity = 0),
          (b.style.strokeOpacity = 1),
          (b.style.transition = b.style.WebkitTransition = 'none'),
          (b.style.strokeDasharray = c + ' ' + c),
          (b.style.strokeDashoffset = c),
          b.getBoundingClientRect(),
          (b.style.transition = b.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out'),
          (b.style.strokeDashoffset = 0),
          this._fillPath(b);
      }
    }),
    (c.prototype._fillPath = function (a) {
      a.addEventListener(e, function () {
        (a.style.transition = a.style.WebkitTransition = 'none'),
          (a.style.transition = a.style.WebkitTransition =
            'fill-opacity 1s ease-in-out, stroke-opacity 1s ease-in-out'),
          (a.style.fillOpacity = 1),
          (a.style.strokeOpacity = 0);
      });
    }),
    (c.prototype.replay = function () {
      this._initAnimation();
    }),
    (a.DrawFillSVG = c);
})(window);
