const express = require('express');
const app = express();
//instanciar servidor
app.listen(8000, () =>
console.log("Levantando un servidor con Express")
);
//rutas en express
app.get("/home", (req,res) =>{
    res.send("Hola, estamos en el home")
}
)
//sendFile()
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about-us.html"))
});
