const http = require('http')

require('dotenv').config()

const hbs = require('hbs')

const express = require('express')
const app = express()
const port = process.env.PORT

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {})

//Contenido estático desde carpeta 'public'
//******************************************************************
app.use(express.static('public'))

//Rutas custom
//******************************************************************
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Nombre X',
        titulo: 'Home prueba',
    })
})

app.get('/elements', function (req, res) {
    //res.sendFile(__dirname + '/public/elements.html')

    res.render('elements', {
        nombre: 'Nombre X',
        titulo: 'Elements',
    })
})

app.get('/generic', function (req, res) {
    //res.sendFile(__dirname + '/public/generic.html')

    res.render('generic', {
        nombre: 'Nombre X',
        titulo: 'Generic',
    })
})

app.get('*', function (req, res) {
    //Retorna código error y mensaje
    //res.status(404)
    //res.send('404 | Page not found')

    //Retorna página
    //res.sendFile(__dirname + '/public/404.html')

    res.render('404', {
        nombre: 'Nombre X',
        titulo: '404',
    })
})

app.listen(port, () => {
    console.log(`Example app listening at port=${port}`)
})

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
