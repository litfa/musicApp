/**
 * @Author: litfa
 * @Date: 2022-01-22 17:00:05
 * @LastEditTime: 2022-01-22 17:00:38
 * @LastEditors: litfa
 * @Description: 飙升榜
 * @FilePath: /music-app/src/apis/hotMusic.js
 * @
 */
export default () => uni.$http.get('/playlist/detail',
  {
    id: 3779629
  }
)