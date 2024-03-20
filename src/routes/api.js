
const express = require('express');
const { getUsersApi, postCreateUserApi, putUpdateUserApi, deleteUserApi, postCreateContactApi, postUploadSingleFile, postUploadMultipleFile } = require('../controller/apiController');
const { postCreateProject, getProject, searchProject } = require('../controller/projectController');
const { postCreateSkill, getSkill } = require('../controller/skillController');
const { postRegister, postLogin } = require('../controller/clientController');
const { verifyAccessToken } = require('../helpers/jwt_services');
const apiRouter = express.Router();

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
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
apiRouter.get("/abc", (req, res) => {
    res.status(200).json({
        data: "hello word with fisrt aopi",
    });
});

apiRouter.get("/users", getUsersApi)
apiRouter.post("/users", postCreateUserApi)
apiRouter.put("/users", putUpdateUserApi)
apiRouter.delete("/users", deleteUserApi)
apiRouter.post("/contact", postCreateContactApi)
apiRouter.post("/file", postUploadSingleFile)
apiRouter.post("/files", postUploadMultipleFile)
apiRouter.post("/projects", postCreateProject)
apiRouter.get("/projects", getProject)
apiRouter.post("/skills", postCreateSkill)
apiRouter.get("/skills", getSkill)
apiRouter.get("/projectss", searchProject);
apiRouter.post("/register", postRegister);
apiRouter.post("/login", postLogin);

apiRouter.get("/listUser", verifyAccessToken, (req, res, next) => {
    console.log(req.headers)
    const listUser = [{
        username: 'trung13@gmail.com'
    },
    {
        username: 'trfjd@gmail.com'
    }]

    res.json({
        listUser
    })
})
module.exports = apiRouter;