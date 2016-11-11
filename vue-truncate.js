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

      let truncateText = text.slice(0, length - clamp.length)
      let posLast = truncateText.length - 1

      while (truncateText[posLast] === ' ' || truncateText[posLast] === clamp[0])
	--posLast

      truncateText =  truncateText.slice(0, posLast + 1)

      return truncateText + (text.length > length ? clamp : '')
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
