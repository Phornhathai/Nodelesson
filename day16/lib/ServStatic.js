module.exports = {
    serv
}
const fs = require('fs')
// --------------------------------------------------
function serv(request){
    return new Promise((resolve) => {
   let fullpath = process.cwd() + request.url
    if(request.url === '/'){
        fullpath = process.cwd() + '/static/index.htm'
    }

    fs.readFile(fullpath , function(err, data){
      
           let result = {}
           if(err){
              result["status"] = false
              
           }else{
              result["status"] = true
              result["data"] = data
              result["fullpath"] = fullpath
           }
           resolve(result) 
       })
       
    })

}