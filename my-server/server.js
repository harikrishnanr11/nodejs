import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
    <head><title>server</title></head>
    <h1 style="color:green;">HELLO WORLD </h1>
    </body>
    </html>`);
    
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
 