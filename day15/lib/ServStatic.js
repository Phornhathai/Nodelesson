module.exports = {
    serv
}
const http = require('http')
const fs = require('fs')
// --------------------------------------------------
const PORT = process.env.PORT || 9761
// --------------------------------------------------

let server = http.createServer( serv )
server.listen(PORT)
console.log('Server Start at ' + PORT)

// --------------------------------------------------

async function serv(request,response){
    let fullpath
    // console.log( process.cwd() + request.url )
     console.log(request.url)
     if(request.url === '/'){
         fullpath = process.cwd() + '/static/index.htm'
     }else{
         fullpath = process.cwd() + request.url
     }
         
    

}