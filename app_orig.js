const http = require('http')
const express = require('express')
const app = express()

//Las rutas de carpeta 'public' siempre tienen prioridad sobre las rutas custom

//Contenido estático desde carpeta 'public'
//******************************************************************
app.use(express.static('public'))

//Rutas custom
//******************************************************************
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.hbs')
})

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.hbs')
})

app.get('/helloWorld', function (req, res) {
    res.send('Hello World')
})

app.get('*', function (req, res) {
    //Retorna código error y mensaje
    //res.status(404)
    //res.send('404 | Page not found')

    //Retorna página
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(9001)

/*http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(
        200,
        {
            'Content-Type': 'application/csv'
        }
    )

    res.write('id, nombre\n')
    res.write('1, Fer\n')
    res.write('2, Maria\n')

    res.end()
})
.listen(9001)*/



//Ej. para descargar archivo
/*
http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(
        200,
        {
            'Content-Type': 'application/csv'
        }
    )

    res.write('id, nombre\n')
    res.write('1, Fer\n')
    res.write('2, Maria\n')

    res.end()
})
    .listen(9001)*/
