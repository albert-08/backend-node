const fs = require('fs')

fs.mkdir("platzi/node", { recursive: true }, err => {
    if(err) return console.log(err)
})