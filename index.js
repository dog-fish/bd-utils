import { swap, unique, newArray } from './src/array.js'
import { formatDate, duration, ago } from './src/date.js'
import { log } from './src/debug.js'
import { throtte, debounce } from '/src/throtte.js'
import { deepClone } from '/src/deepClone.js'

const utils = {
  // array.js
  swap, unique, newArray,
  // date.js
  formatDate, duration, ago,
  // debug.js
  log
  // throtte.js
  throtte, debounce
  // deepClone.js
  deepClone
}

export default utils
export {
  swap, unique, newArray,
  formatDate, duration, ago,
  log,
  throtte, debounce,
  deepClone,
}
