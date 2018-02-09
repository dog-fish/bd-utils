import { swap, unique, newArray } from './src/array.js'
import { formatDate, duration, ago } from './src/date.js'
import { throtte, debounce } from '/src/throttle.js'
import { deepClone } from '/src/clone.js'

const utils = {
  // array.js
  swap, unique, newArray,
  // date.js
  formatDate, duration, ago,
  // throtte.js
  throtte, debounce,
  // deepClone.js
  deepClone,
}

export default utils
export {
  swap, unique, newArray,
  formatDate, duration, ago,
  throtte, debounce,
  deepClone,
}
