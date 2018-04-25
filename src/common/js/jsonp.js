import originJSONP from 'jsonp'


function param(data){

  let url = ''
  for(let i in data) {
//不知道这里为啥 i变成了k 
    let  value = data[i] !== undefined? data[i] : ''
    url += '&${k}=${encodeURIComponent(value)}'
  }
    return url ? url.substring(1) : ''
}

export default function jsonp(url, data, option) {
  url += (url.indexOf('?')<0?'?':'&')+param(data) 
  return new Promise((resolve, reject) => {

    originJSONP(url, option, (err, data) => {

      if (!err) {
        resolve(data)
      } else {

        reject(err)
      }
    })
  })
}



/* eslint-disable */