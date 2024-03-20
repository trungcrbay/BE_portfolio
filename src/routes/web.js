

const express = require('express');
const { getCreatePage, postCreateUser, postUpdateUser, getUpdatePage, postDeleteUser } = require('../controller/homeController');

const router = express.Router();

/**
 * @swagger
 * /dit me may:
 *   get:
 *     summary: what the fuck what the fuck
 *     description: Retrieve wha what the fuckt the fuck a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
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