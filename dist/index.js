(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('../../../src/throtte.js'), require('../../../src/deepClone.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '../../../src/throtte.js', '../../../src/deepClone.js'], factory) :
	(factory((global.dbUtils = {}),global.throtte_js,global.deepClone_js));
}(this, (function (exports,throtte_js,deepClone_js) { 'use strict';

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

function log() {
  console.log.apply(console, arguments);
}

const utils = {
  // array.js
  swap, unique, newArray,
  // date.js
  formatDate, duration, ago,
  // debug.js
  log,
  // throtte.js
  throtte: throtte_js.throtte, debounce: throtte_js.debounce,
  // deepClone.js
  deepClone: deepClone_js.deepClone
};

exports.default = utils;
exports.swap = swap;
exports.unique = unique;
exports.newArray = newArray;
exports.formatDate = formatDate;
exports.duration = duration;
exports.ago = ago;
exports.log = log;
exports.throtte = throtte_js.throtte;
exports.debounce = throtte_js.debounce;
exports.deepClone = deepClone_js.deepClone;

Object.defineProperty(exports, '__esModule', { value: true });

})));
