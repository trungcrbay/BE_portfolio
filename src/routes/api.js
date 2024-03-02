
const express = require('express');
const { getUsersApi, postCreateUserApi, putUpdateUserApi, deleteUserApi, postCreateContactApi, postUploadSingleFile, postUploadMultipleFile } = require('../controller/apiController');
const { postCreateProject, getProject } = require('../controller/projectController');
const { postCreateSkill, getSkill } = require('../controller/skillController');
const apiRouter = express.Router();

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
apiRouter.post("/file",postUploadSingleFile)
apiRouter.post("/files",postUploadMultipleFile)
apiRouter.post("/projects",postCreateProject)
apiRouter.get("/projects",getProject)
apiRouter.post("/skills",postCreateSkill)
apiRouter.get("/skills",getSkill)


module.exports = apiRouter;