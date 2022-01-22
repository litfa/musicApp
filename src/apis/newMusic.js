/**
 * @Author: litfa
 * @Date: 2022-01-22 13:40:25
 * @LastEditTime: 2022-01-22 15:37:50
 * @LastEditors: litfa
 * @Description: 新歌速递
 * @FilePath: /music-app/src/apis/newMusic.js
 * @
 */

export default () => uni.$http.get('/top/song',
  {
    type: 0
  }
)