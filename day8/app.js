const http  = require('http')
const https = require('https')

const options = {
    host: `covid19.th-stat.com`,
    port: 443,
    method: `GET`,
    path: `/api/open/today`,
}

const options1 = {
    host: `orapiweb2.pttor.com`,
    port: 443,
    method: `POST`,
    path: `/api/oilprice/search`,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }

}


let req = https.request( options , (resp) => {  

    let respdata = ``
   //resp.setEncoding('utf8')    // If response data use UTF-8 encoding such as thai lang

    resp.on(`data`,(chunk) => {
        respdata += chunk.toString()
    })

    
    resp.on(`end`, function(){
        let resp = convertStringtoJSON(respdata);
        console.log(resp)
    })

})
req.end()

let payload = { 
    provinceId: 1, 
    districtId: null, 
          year: 2021, 
         month: 2, 
      pageSize: 20, 
     pageIndex: 0
  }
payload = JSON.stringify(payload) 
// You need to convert JSObject to string before.

let req1 = https.request( options1 , (resp) => {  

    let respdata = ``
    resp.setEncoding('utf8')    // If response data use UTF-8 encoding such as thai lang

    resp.on(`data`,(chunk) => {
        respdata += chunk.toString()
    })

    
    resp.on(`end`, function(){
        let resp = convertStringtoJSON(respdata);
        console.log(resp)
    })

})
req1.write(payload)
req1.end()

function convertStringtoJSON(data)
        {
            try{  
                return JSON.parse(data) 
            }catch(excp){  
                return data 
                }
        }


        



