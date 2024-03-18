
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require("mongoose");
const port = 8081
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload');
require('dotenv').config()
var cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
var createError = require('http-errors')
// app.use(helmet());
// app.use(morgan('combined'))


const Note = require('./model/note')
const Client = require('./model/client')
app.use(fileUpload());


// /https://stackoverflow.com/questions/9304888/how-to-get-data-passed-from-a-form-in-express-node-js
//config req.body to get data passes
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//example link image : http://localhost:8081/images/uploads/z5136325601544_cbd69152e437531d5012245a8a9fe382%20(1)%20-%201708771426585.jpg
//call controller 
const { getHomePage, getTest } = require('./controller/homeController')
const connection = require('./config/database')
//router.method('/route',handler)
app.get('/', getHomePage)
app.get('/test', getTest)
//config template engine
configViewEngine(app)

// app.use(express.static(path.join(__dirname, 'public')))

//test schema without MVC


//const skills = new Skill({});
//skills.save()
// const notes = new Note({});
// notes.save()
//scheme with MVC


//config web routing
app.use(cors());
app.use('/', webRoutes);
app.use('/v1', apiRoutes);

app.use((req, res, next) => {
    // res.status(404);
    // res.json({
    //     status: 404,
    //     message: 'not found',
    //     links: {
    //         'doc': 'https://your-docum   entation-url-here' // Replace this URL with your actual documentation URL
    //     }
    // });
    next(createError(404, 'Please login to view this page.'))
});

//hứng lỗi th trên sử dụng err.status và err.message
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        status: err.status || 500,
        message: err.message || err,
        links: {
            'doc': 'https://your-documentation-url-here' // Replace this URL with your actual documentation URL
        }
    });
});



(async () => {
    try {
        await connection(); //using mongoose
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
})();