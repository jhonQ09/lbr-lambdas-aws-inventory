const fs = require("fs");

fs.readFile("ruta-del-archivo.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

var streamLectura = fs.createReadStream('./archivo-texto.txt');