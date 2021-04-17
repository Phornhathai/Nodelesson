const http  = require('http')

const PORT = process.env.PORT || 7774

let server = http.createServer(onClientRequest)
    server.listen(PORT)

    console.log('Server started listening in ' + PORT )
    
function onClientRequest(request, response)
{
    response.writeHead(200 , {'Content-Type': 'application/json; charset=utf-8'})
    response.write(JSON.stringify({'message' : 'Hello World'}))
    response.end()
}
    


