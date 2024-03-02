
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require("mongoose");
const port = 8081
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload');
var cors = require('cors')

const MyUser = require('./model/user')
const Contact = require('./model/contact')
const Project = require('./model/project')
const Skill = require('./model/skill')
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
//const test = new MyUser({age:21,name:'ddd'});
//test.save()
//const projects = new Project({});
//projects.save()

//const skills = new Skill({});
//skills.save()
//scheme with MVC


//config web routing
app.use(cors());
app.use('/', webRoutes);
app.use('/v1', apiRoutes);


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