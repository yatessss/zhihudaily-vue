/**
 * Created by yatessss on 16/6/22.
 */
import Vue from 'vue'

module.exports = (params) => {
  Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
  }
  // Vue.http.options.xhr = {
  //   withCredentials: true
  // }
  Vue.http.options.emulateJSON = true
  Vue
    .http({
      url: params.url,
      method: params.method,
      data: params.data || {}
    })
    .then((response) => {
      let data = response.data
      params.callback(data)
    }, (response) => {
      // error callback
    })
}
