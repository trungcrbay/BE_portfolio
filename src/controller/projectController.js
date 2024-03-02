
const MyUser = require('../model/user')
const Project = require('../model/project');
const { apiUploadSingleFile, apiUploadMultitleFile } = require('../services/fileServices');

const getProject = async (req, res) => {
    let results = await Project.find();
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

const postCreateProject = async (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let demo = req.body.demo;
    let source = req.body.source;
    let result = await apiUploadSingleFile(req.files.image);
    let arrResult = await apiUploadMultitleFile(req.files.techStack);

    console.log("check result : ", req.files.techStack);
    console.log("check result customers: ", arrResult.detail);
    let imgUrl = result.path;
    
    let project = await Project.create({
        title: title,
        description: description,
        demo: demo,
        source: source,
        image: imgUrl,
        techStack:arrResult,
    });

    return res.status(200).json({
        errorCode: 0,
        data: project,
    });
};


module.exports = {
    getProject,postCreateProject
}