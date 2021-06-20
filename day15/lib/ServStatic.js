module.exports = {
    serv
}

// --------------------------------------------------
function serv(request,response){
    let fullpath
    // console.log( process.cwd() + request.url )
     console.log(request.url)
     if(request.url === '/'){
         fullpath = process.cwd() + '/static/index.htm'
     }else{
         fullpath = process.cwd() + request.url
     }
     fs.readFile( fullpath , function (err,data) {

        if(err){
            response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8'} )
            response.write('404 not found')
        }else{
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'} )
            response.write(data)
        }
        response.end()
    })
}
