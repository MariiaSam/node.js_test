const http = require('node:http')

const server = http.createServer((req, res) =>{
    
    if (req.method == "GET" && req.url === '/'){
    return res.end("Home")
    
    }
    if (req.method === "GET" && req.url === '/movies')
// console.log(req)
// console.log(res)

res.statusCode = 404
res.end("not found")

})


server.listen(8080, () => {
    console.log("SERVER")
})