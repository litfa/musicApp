/**
 * @Author: litfa
 * @Date: 2022-02-04 18:19:09
 * @LastEditTime: 2022-02-04 18:20:46
 * @LastEditors: litfa
 * @Description: 搜索建议
 * @FilePath: /music-app/src/apis/searchSuggest.js
 * @
 */
export default (keywords, type) =>
  uni.$http.get('/search/suggest',
    {
      keywords,
      type: type || 'mobile'
    }
  )
