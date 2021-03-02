
module.exports = {
   request


}  
    function request(method , protocal , host , port , path , data = ' ',headers){
        console.log(host , port , method , path , protocal)
        
        let payload  = convertJsontoString(data)  // check data ที่เข้ามาว่าเป็น string หรือไม่ 

        let schema = protocal === 'https' ? require('https') : require('http') 
        
        const options = {
            host: host,
            port: port,
            method: method,
            path: path,
            headers : headers !== null && headers !== undefined ? headers : {'content-Type' : 'application/json; charset=utf-8'} // javascript object

        }
       let req = schema.request( options , (resp) => {  

        let respdata = ''
        resp.setEncoding('utf8')  
    
        resp.on(`data`,(chunk) => {
            respdata += chunk.toString()
        })
    
        
        resp.on(`end`, function(){
            let resp = convertStringtoJSON(respdata);
            console.log(resp)
        })

    
    })
    req.write(payload)
    req.end()

    function convertStringtoJSON(data)
        {
            try{  
                return JSON.parse(data) 
            }catch(excp){  
                return data 
                }
        }
   
    function convertJsontoString(data)
        {
            try{  
                return JSON.stringify(data)
            }catch(excp){  
                return data 
                }
        }
    

}

