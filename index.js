const http = require("http");
const url = require('url');
const PORT = 8900;
const HOST = "localhost";

// const server = http.createServer((req , res) => {
// res.statusCode = 200;
// res.setHeader('content-type', 'text/plain');
// res.end('Ifeanyi Ezenandu');
// });

const server = http.createServer((req, res) => {
      const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
 
  //Get request
  if((filename === "./books" && req.method === "GET")){
  res.end(`This is ${req.method} Request from ${filename} route.`);
  // return getRequest();
}

  if((filename === "./books/author" && req.method === "GET")){
    // return getRequest2();
    res.end(`This is ${req.method} Request from ${filename} route.`);
  }
  
  //Post request
  if((filename === "./books/author" && req.method === "POST")){
  // return postRequest();
  res.end(`This is ${req.method} Request from ${filename} route.`);
}

  //Put request
  if((filename === "./books" && req.method === "PUT")){
  // return putRequest();
  res.end(`This is ${req.method} Request from ${filename} route.`);
}

  if((filename === "./books/author" && req.method === "PUT")){
    // return putRequest2();
    res.end(`This is ${req.method} Request from ${filename} route.`);
  }

  //Delete request
  if(filename === "./books" && req.method === "DELETE"){
  // return deleteRequest();
  res.end(`This is ${req.method} Request from ${filename} route.`);
}
});

function getRequest() {
  const options = {
    hostname: HOST,
    port: PORT,
    path: "/books",
    method: "GET",
  };

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });
  // req.write(message);
  req.end();

}

function getRequest2() {
  const options = {
    hostname: HOST,
    port: PORT,
    path: "/books/author",
    method: "GET",
  };

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });
  // req.write(message);
  req.end();
}

function postRequest() {
  const data = JSON.stringify({
    todo: "Buy the milk",
  });

  const options = {
    hostname: HOST,
    port: PORT,
    path: "/books/author",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Type": data.length,
    },
  };

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

function putRequest() {
  const data = JSON.stringify({
    todo: "Buy the milk",
  });

  const options = {
    hostname: HOST,
    port: PORT,
    path: "/books",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Content-Type": data.length,
    },
  };

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

function putRequest2() {
  const data = JSON.stringify({
    todo: "Buy the milk",
  });

  const options = {
    hostname: HOST,
    port: PORT,
    path: "/books/author",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Content-Type": data.length,
    },
  };

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

function deleteRequest() {
  const data = JSON.stringify({
    todo: "Data deleted",
  });

  const options = {
    hostname: HOST,
    port: PORT,
    path: "/books",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Content-Type": data.length,
    },
  };

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
