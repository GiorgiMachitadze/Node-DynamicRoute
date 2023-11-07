const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname.startsWith("/user/")) {
    const username = parsedUrl.pathname.replace("/user/", "");

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello ${username}`);
  } else if (parsedUrl.pathname === "/users/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("All users");
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Resource not found" }));
  }
});

server.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
