const http  = require('http')
const https = require('https')


module.exports = {
   
    request :  function onclientRequest(method , protocal , host , port , path ){
        console.log(host , port , method , path , protocal)
        
        
    if(method === 'GET' && protocal === 'http' && host === 'localhost' && port === 9818 && path === '/hi'){
        console.log(`Hello on Get`)
    }
    if(method === 'POST' && protocal === 'http' && host === 'localhost' && port === 9818 && path === '/hi'){
        console.log(`Hello on Post`)
    }
   // console.log(host , port , method , path , protocal)
    
    
    if(method === 'GET' && protocal === 'https' && host === 'covid19.th-stat.com' && port === 443 && path === '/api/open/today'){
        console.log(test)   
        const options = {
            host: 'covid19.th-stat.com',
            port: 443,
            method: 'GET',
            path: '/api/open/today',
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

    function convertStringtoJSON(data)
        {
            try{  
                return JSON.parse(data) 
            }catch(excp){  
                return data 
                }
        }
   
    
}
}
}  
