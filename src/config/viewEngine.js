const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    //config ejs
    app.set('views', path.join('./src', 'views')); //__dirname === src
    app.set('view engine', 'ejs')
    
    //config static files
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine