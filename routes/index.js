const router = require('express').Router();
const control = require('../resources/control.js');
let listaLibros = control.leer();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Biblioteca',
        message: 'Bienvenido a la biblioteca',
        listaLibros: listaLibros
    });
});

router.post('/registrar', (req, res) => {
    const { title, description, genero, autor, editorial } = req.body;
    const id = listaLibros.length + 1;
    listaLibros.push({ id, title, description, genero, autor, editorial });
    control.escibir(listaLibros);
    res.redirect('/');
});

router.post('/modificar', (req, res) => {
    const { id, title, description, genero, autor, editorial } = req.body;

    // Modificar libro donde id = id
    listaLibros.forEach(libro => {
        if (libro.id == id) {
            libro.title = title;
            libro.description = description;
            libro.genero = genero;
            libro.autor = autor;
            libro.editorial = editorial;
        }
    });

    control.escibir(listaLibros);
    res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    listaLibros = listaLibros.filter(libro => libro.id != id);
    control.escibir(listaLibros);
    res.redirect('/');
});

module.exports = router;
