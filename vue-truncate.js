(function () {

  vueTruncate.install = function (Vue) {
    Vue.filter('truncate', function (value, length) {
      return value.length > length 
        ? value.slice(value, length - 3) + '...'
        : value
	  })
  }

  if (typeof exports == "object") {
    module.exports = install
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    window.vueTruncate = vueTruncate
    Vue.use(vueTruncate)
  }

})()