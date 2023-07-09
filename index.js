const express = require('express')
const app = express()


app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))// manejo de datos json


app.set('PORT', process.env.PORT || 3000)
app.use('views', express.static(__dirname + '/views')) // utilizamos la carpeta views
app.set('view engine', 'ejs')// utilizamos el motor de plantillas ejs



app.listen(app.get('PORT'), () => {
    console.log(`Server on port ${app.get('PORT')}`)
})


 
app.use('/',require('./routes/index'))