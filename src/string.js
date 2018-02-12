// 获取带字符串的字节长度
export function getByteLen(val) {
  let len = 0;
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i);
    if (a > 127 || a === 94) {
      len += 2
    } else {
      len += 1
    }
  }
  return len
}
// 获取url中的 query 的参数和值存放在一个对象中。
export function getQueryObj(str) {
  var s = str.split('?')
  var s1 = s[1].split('=')
  var a = String(s1)
  var s2 = a.split('&')
  var s3 = String(s2)
  var s4 = s3.split(',')
  var obj = {}
  for (var i = 0; i < s4.length - 1; i++) {
      if(i % 2 == 0) {
          var l = s4[i]
          var n = s4[i + 1]
          obj[l]= n
      }
  }
  return obj
}

export default { getByteLen, getQueryObj }
