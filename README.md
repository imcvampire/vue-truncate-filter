# vue-truncate-filter

A filter for Vuejs to truncate string

## Install:

### CommonJS

 Available through npm as `vue-truncate-filter`: `npm install vue-truncate-filter --save`

  ``` js
  var VueTruncate = require('vue-truncate-filter')
  Vue.use(VueTruncate)
  ```

### Direct include

 - You can also directly include it with a `<script>` tag when you have Vue already included globally. It will automatically install itself, and will add a global `VueTruncate`.

## Usage:

 ```html
  {{ text | truncate 100 '....' }}
 ```
 
## Params:
  - length (Number): Text will be truncated if it's length is more than this param.
  - clamp (String) (default: `...`): It will be added to end of text if it's truncated.
  
## License

[MIT](http://opensource.org/licenses/MIT)
