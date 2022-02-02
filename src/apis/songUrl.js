/**
 * @Author: litfa
 * @Date: 2022-01-30 15:11:14
 * @LastEditTime: 2022-01-30 15:12:01
 * @LastEditors: litfa
 * @Description: 获取音乐 url
 * @FilePath: /music-app/src/apis/songUrl.js
 * @
 */
export default (id) =>
  uni.$http.get('/song/url',
    {
      id
    }
  )