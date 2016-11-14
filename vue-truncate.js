;(function () {

  var vueTruncate = {};

  vueTruncate.install = function (Vue) {
    
    /**
     * 
     * @param {String} text
     * @param {Number} length
     * @param {String} clamp
     * 
     */

    Vue.filter('truncate', function (text, length, clamp) {
      clamp = clamp || '...';
      length = length || 30;

      var tcText = text.slice(0, length - clamp.length);
      var last = tcText.length - 1;

      while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0])
	last -= 1;

      tcText =  tcText.slice(0, last);

      return tcText + (text.length > length ? clamp : '');
    });
  }

  if (typeof exports == "object") {
    module.exports = vueTruncate;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueTruncate });
  } else if (window.Vue) {
    window.VueTruncate = vueTruncate;
    Vue.use(VueTruncate);
  }

})()
