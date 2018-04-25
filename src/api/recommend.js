import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getRecommend() {

  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  //  https://c.y.qq.com/splcloud/fcgi-bin/p.fcg?g_tk=1313666192&format=jsonp&jsonpCallback=jsonp1

  const data = Object.assign({}, commonParams, {
    
    platform: 'h5',
    uin: 0,
    needNewCode: 1


  })

  return jsonp(url,data,options)


}
