(function () {

  VueTruncate.install = function (Vue) {
    Vue.filter('truncate', function (value, length, clamp) {
      clamp = clamp || '...'

      return value.length > length 
        ? value.slice(value, length - clamp.length) + clamp
        : value
	  })
  }

  if (typeof exports == "object") {
    module.exports = install
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    window.VueTruncate = VueTruncate
    Vue.use(VueTruncate)
  }

})()