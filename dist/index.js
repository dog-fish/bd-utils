(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.bdUtils = {})));
}(this, (function (exports) { 'use strict';

// 交换数组中元素位置
function swap(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

// 去除数组重复元素，不支持引用类型
function unique(arr) {
  return arr.filter((v, i, _) => _.indexOf(v) === i);
}

// 快速生成有序数组
function newArray(num, from = 1) {
  return Array(num).fill().map((_, i) => i + from);
}

// 格式化时间
function formatDate(time, fmt) {
  let d = new Date(time);
  if (!fmt) return time;
  var obj = {
    'M+': d.getMonth() + 1,
    'D+': d.getDate(),
    'h+': d.getHours(),
    'm+': d.getMinutes(),
    's+': d.getSeconds(),
    'q+': Math.floor((d.getMonth() + 3) / 3),
    'S': d.getMilliseconds()
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var key in obj) {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? obj[key] : ('00' + obj[key]).substr(('' + obj[key]).length));
    }
  }
  return fmt;
}

// 持续时间
function duration(sec) {
  let h = ~~(sec / 3600);
  let m = ~~(sec % 3600 / 60);
  let s = sec % 3600 % 60;
  let ret = '';
  if (h) ret += `${h}时`;
  if (m) ret += `${m}分`;
  if (s) ret += `${s}秒`;
  return ret;
}

// 经过时间
function ago(time) {
  let between = Date.now() - Number(time);
  if (between < 60) {
    return ~~between + '秒前';
  } else if (between < 3600) {
    return ~~(between / 60) + '分前';
  } else if (between < 86400) {
    return ~~(between / 3600) + '小时前';
  } else {
    return ~~(between / 86400) + '天前';
  }
}

// 对象和数组的深拷贝
function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }
  const targetObj = source.constructor === Array ? [] : {};
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

// 节流函数，指定时间执行一次
function throttle(fn, waitTime, immediate, isDebounce) {
  let timer = null;
  let lastTime = 0; // last execute time

  return function () {
    function exec() {
      lastTime = +new Date();
      fn.apply(context, args);
    }

    function clear() {
      timer = null;
    }

    let context = this;
    let args = arguments;
    let nowTime = +new Date();
    let passTime = nowTime - lastTime;

    if (isDebounce && !timer) {
      exec();
    }

    if (timer) {
      clearTimeout(timer);
    }

    if (immediate && !timer) {
      exec();
    }

    if (!isDebounce && passTime > waitTime) {
      exec();
    } else {
      if (isDebounce) {
        timer = setTimeout(clear, waitTime);
      } else {
        timer = setTimeout(exec, waitTime - passTime);
      }
    }
  };
}

// 防抖函数，到达指定时间间隔执行
function debounce(fn, waitTime, immediate) {
  return throttle(fn, waitTime, immediate, true);
}

// 获取带字符串的字节长度
function getByteLen(val) {
  let len = 0;
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i);
    if (a > 127 || a === 94) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}
// 获取url中的 query 的参数和值存放在一个对象中。
function getQueryObj(str) {
  var s = str.split('?');
  var s1 = s[1].split('=');
  var a = String(s1);
  var s2 = a.split('&');
  var s3 = String(s2);
  var s4 = s3.split(',');
  var obj = {};
  for (var i = 0; i < s4.length - 1; i++) {
    if (i % 2 == 0) {
      var l = s4[i];
      var n = s4[i + 1];
      obj[l] = n;
    }
  }
  return obj;
}

function storageGet(key) {
  if (key) {
    let value = localStorage.getItem(key) || undefined;
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return value || undefined;
    }
  } else {
    // equal to getAll()
    let ret = {};
    this.forEach((key, value) => {
      ret[key] = value;
    });
    return ret;
  }
}

function storageSet(key, value) {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
  return this.get(key);
}



function storageClear() {
  localStorage.clear();
}

function storageLength() {
  return localStorage.length;
}

function storageGetAll() {
  let ret = {};
  this.forEach((key, value) => {
    ret[key] = value;
  });
  return ret;
}

function storageKeys() {
  let ret = [];
  this.forEach((key, value) => {
    ret.push(key);
  });
  return ret;
}

function storageHas(key) {
  let keys = this.keys();
  for (let i = 0; i < keys.length; i++) {
    if (key === keys[i]) {
      return true;
    }
  }
  return false;
}

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
};

exports.default = utils;
exports.swap = swap;
exports.unique = unique;
exports.newArray = newArray;
exports.formatDate = formatDate;
exports.duration = duration;
exports.ago = ago;
exports.deepClone = deepClone;
exports.throttle = throttle;
exports.debounce = debounce;
exports.getByteLen = getByteLen;
exports.getQueryObj = getQueryObj;
exports.storageSet = storageSet;
exports.storageGet = storageGet;
exports.storageClear = storageClear;
exports.storageLength = storageLength;
exports.storageGetAll = storageGetAll;
exports.storageKeys = storageKeys;
exports.storageHas = storageHas;

Object.defineProperty(exports, '__esModule', { value: true });

})));
