import { swap, unique, newArray } from './src/array.js'
import { formatDate, duration, ago } from './src/date.js'
import { deepClone } from './src/clone.js'
import { throttle, debounce } from './src/throtte.js'
import { getByteLen, getQueryObj } from './src/string.js'
import { storageSet, storageGet, storageClear, storageLength, storageGetAll, storageKeys, storageHas } form './storage.js'

const utils = {
  // array.js
  swap, unique, newArray,
  // date.js
  formatDate, duration, ago,
  // clone.js
  deepClone,
  // throtte.js
  throttle, debounce,
  // string.js
  getByteLen, getQueryObj,
  // storage.js
  storageSet, storageGet, storageClear, storageLength, storageGetAll, storageKeys, storageHas
}

export default utils
export {
  swap, unique, newArray,
  formatDate, duration, ago,
  deepClone,
  throttle, debounce,
  getByteLen,getQueryObj,
  storageSet, storageGet, storageClear, storageLength, storageGetAll, storageKeys, storageHas,
}
