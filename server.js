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

const text =
  "Hello World, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. "
fs.writeFile("hello.txt", text, (err) => {
  console.log("An error occurred", err)
})
