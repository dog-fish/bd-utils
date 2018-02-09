import { swap, unique, newArray } from './src/array.js'
import { formatDate, duration, ago } from './src/date.js'
import { deepClone } from './src/clone.js'
import { throttle, debounce } from './src/throtte.js'

const utils = {
  // array.js
  swap, unique, newArray,
  // date.js
  formatDate, duration, ago,
  // clone.js
  deepClone,
  // throtte.js
  throttle, debounce,
}

export default utils
export {
  swap, unique, newArray,
  formatDate, duration, ago,
  deepClone,
  throttle, debounce,
}
