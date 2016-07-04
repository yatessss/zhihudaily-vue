/**
 * Created by yatessss on 16/6/22.
 */

/**
 * 替换url
 * srcUrl 初始url
 * replace 要替换的部分
 */
exports.replaceUrl = (srcUrl) => {
  return srcUrl.replace(/http\w{0,1}:\/\/pic/g, 'https://images.weserv.nl/?url=pic')
}

/**
 * 字符串截取
 * '201604059' | subStr 4 => 2016
 * '201604059' | subStr -4 => 4059
 */
exports.subStr = (str, number) => {
  if (!str) return ''

  if (number < 0) {
    return str.substr(str.length + number)
  } else {
    return str.substr(0, number)
  }
}

/**
 * 格式化时间戳
 * 1461658688000 | formatTime "yyyy-MM-dd hh:mm:ss"
 */
exports.formatTime = (timeStamp, fmt) => { // author: meizz
  if (!timeStamp) {
    return ''
  }
  var _timeStamp = parseInt(timeStamp)
  if (_timeStamp.toString().length === 10) {
    _timeStamp *= 1000
  }
  !fmt && (fmt = 'yyyy-MM-dd')

  var t = new Date(_timeStamp)

  var o = {
    'M+': t.getMonth() + 1, // 月份
    'd+': t.getDate(),      // 日
    'h+': t.getHours(),     // 小时
    'm+': t.getMinutes(),   // 分
    's+': t.getSeconds(),   // 秒
    'q+': Math.floor((t.getMonth() + 3) / 3), // 季度
    'S': t.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/**
 * 把4位数转换成K
 *
 *
 */
exports.toK = (str) => {
  if (str > 999) {
    let item = (str / 1000) + ''
    return item.substring(0, item.length - 2) + 'K'
  } else {
    return str
  }
}
