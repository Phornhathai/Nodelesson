const http  = require('http')

http.createServer(onClientRequest).listen( 80 )

function onClientRequest(request , response){
    response.writeHead(200)
    response.write( "Hello World" )
    console.log(request.url)
    response.end()

}


