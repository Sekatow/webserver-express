const http = require("http");

http.createServer((req, res) => {

        res.writeHead(200, { "content-Type": "application/json" });

        let salida = {
            nombre: "Daniel",
            apellido: "Peña",
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write("hola mundo");
        res.end();

    })
    .listen(8080);



console.log("Listen port 8080");