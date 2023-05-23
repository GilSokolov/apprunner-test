const http = require("http");
const https = require("https");
const port = +process.env.PORT || 8080;
https
  .get("https://jsonplaceholder.typicode.com/todos/1", (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

http
  .createServer(function (req, res) {
    // add a HTTP header:
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .listen(port);
