const http = require('http')
const ss = require('./lib/ServStatic')
// --------------------------------------------------
const PORT = process.env.PORT || 9761
// --------------------------------------------------

let server = http.createServer(main)
server.listen(PORT)
console.log('Server Start at ' + PORT)

async function main(request,response){
    try{
        let servfile = await ss.serv(request)   //ส่งค่ากลับด้วย await ด้วย function promise 
        let url = servfile.fullpath
       // console.log("servfile" ,  servfile)
        if(servfile.status === true){
        url = (url.split('.')[1])
        // request.url = /  <<<< split '.' ???? <<<<<<  [ '/' ]  <<<<<< [0]
       // console.log(url)
        let data = {
            css : "text/css",
            image : "image/jpeg",
            htm : "text/html",
            html : "text/html",
            jpg : "image/jpeg",
            jpeg : "image/jpeg",
            ico : "image/x-icon"

        }
        // css -> text/css
        // htm -> text/html
        // html -> text/html
        // jpg -> image/jpeg
        // jpeg -> image/jpeg
        // ico  -> image/x-icon
            response.writeHead(200, {'Content-Type' : data[url] })
        }else{
            response.writeHead(404, {'Content-Type' : 'text/plain'})
            response.write('404 not found')
        }
      
        response.write(servfile["data"])
    } catch(error){
        console.log(error)
    }
    response.end()
    
}


//main().then()  then ใช้กับ promise เท่านั้นนะ 

// --------------------------------------------------

// function onListenner (request,response)
// {
//     let fullpath
//    // console.log( process.cwd() + request.url )
//     console.log(request.url)
//     if(request.url === '/'){
//         fullpath = process.cwd() + '/static/index.htm'
//     }else{
//         fullpath = process.cwd() + request.url
//     }
        
//    // console.log(fullpath)
//     fs.readFile( fullpath , function (err,data) {

//         if(err){
//             response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8'} )
//             response.write('404 not found')
//         }else{
//             response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'} )
//             response.write(data)
//         }
//         response.end()
//     })
    
//}


 