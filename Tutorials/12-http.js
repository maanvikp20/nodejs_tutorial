const http = require('http')

const server = http.createServer((req, res) => {
  // Conditional Rendering
  if(req.url === '/'){
    res.end("Welcome to the homepage")
  }
  else if(req.url === '/about'){
    res.end("There is not a thing to know about me ")
  }
  else{
    res.end("404 Life not Found: Get Good")
  }
})

server.listen(5000, () => {
  console.log(`listening on http://localhost:${5000}`)
})