const http = require("http")
const fs = require("fs")
const port = 300

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" })

  fs.readFile("index.html", function (err, data) {
    if (err) {
      res.writeHead("Error:file Not found")
    } else {
      res.write(data)
    }
    res.end()
  })
})

server.listen(port, function (err) {
  if (err) {
    console.log("Something went wrong", err)
  } else {
    console.log("Server is listening on port " + port)
  }
})
// console.log("Hello from the server")
fs.writeFile("hello.txt", "Hello World", (err) => {
  return
})
