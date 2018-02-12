export function storageSet(key, value) {
  value = JSON.stringify(value)
  localStorage.setItem(key, value)
  return this.get(key)
},

export function storageGet(key) {
  if (key) {
    let value = localStorage.getItem(key) || undefined
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      return value || undefined
    }
  } else { // equal to getAll()
    let ret = {}
    this.forEach((key, value) => {
      ret[key] = value
    })
    return ret
  }
},

export function storageRemove(key) {
  localStorage.removeItem(key)
  return this.get(key)
},

export function storageClear() {
  localStorage.clear()
},

export function storageLength() {
  return localStorage.length
},

export function forEach(callback) {
  if (typeof callback !== 'function') return
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    let value = this.get(key)
    callback(key, value)
  }
},

export function storageGetAll() {
  let ret = {}
  this.forEach((key, value) => {
    ret[key] = value
  })
  return ret
},

export function storageKeys() {
  let ret = []
  this.forEach((key, value) => {
    ret.push(key)
  })
  return ret
},

export function storageHas(key) {
  let keys = this.keys()
  for (let i = 0; i < keys.length; i++) {
    if (key === keys[i]) {
      return true
    }
  }
  return false
}

export default { storageSet, storageGet, storageClear, storageLength, storageGetAll, storageKeys, storageHas }
