/**
 * @Author: litfa
 * @Date: 2022-01-29 19:50:34
 * @LastEditTime: 2022-01-30 17:06:48
 * @LastEditors: litfa
 * @Description: 搜索音乐
 * @FilePath: /music-app/src/apis/searchMusic.js
 * @
 */
export default (keywords, limit, offset, type) =>
  uni.$http.get('/cloudsearch',
    {
      keywords,
      limit: limit || 30,
      offset: offset || 0,
      type: type || 1
    }
  )
