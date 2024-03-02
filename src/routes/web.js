

const express = require('express');
const { getCreatePage, postCreateUser, postUpdateUser, getUpdatePage, postDeleteUser } = require('../controller/homeController');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.get('/v1', (req, res) => {
    // res.send('v1v1v1v1v1v1!')
    res.render('sample.ejs')
})

router.get("/create", getCreatePage);


router.post("/create-user", postCreateUser);

router.get('/update/:userId', getUpdatePage);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);

router.put('/user', (req, res) => {
    res.send('Got a PUT request at /user 123')
})

module.exports = router;