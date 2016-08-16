;(function () {

  var vueTruncate = {}

  vueTruncate.install = function (Vue) {
    
    /**
     * 
     * @param {String} value
     * @param {Number} length
     * @param {String} clamp
     * 
     */

    Vue.filter('truncate', function (value, length, clamp) {
      clamp = clamp || '...'

      return value.length > length 
        ? value.slice(value, length - clamp.length) + clamp
        : value
	  })
  }

  if (typeof exports == "object") {
    module.exports = vueTruncate
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueTruncate })
  } else if (window.Vue) {
    window.VueTruncate = vueTruncate
    Vue.use(VueTruncate)
  }

})()