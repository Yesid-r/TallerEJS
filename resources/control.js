const fs = require('fs')

const path = './books.json'

function leer(){
    let rawdata = fs.readFileSync(path)
    let pets = JSON.parse(rawdata)
    return pets;
}
function escibir(listaLibros){
    let data = JSON.stringify(listaLibros)
    console.log(`data: ${data}`)
    fs.writeFile(path,data,'utf-8',(err)=>{
        if (err) throw err
        console.log('data written to file')
    })
}

module.exports = {leer, escibir}