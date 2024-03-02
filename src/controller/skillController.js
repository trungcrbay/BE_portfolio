
const Skill = require('../model/skill')


const getSkill = async (req, res) => {
    let results = await Skill.find();
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

const postCreateSkill = async (req, res) => {
    let description = req.body.description;
    let arrResult = await apiUploadMultitleFile(req.files.images);

    console.log("check result customers: ", arrResult.detail);

    let project = await Skill.create({
        description: description,
        images: arrResult,
    });

    return res.status(200).json({
        errorCode: 0,
        data: project,
    });
};



module.exports = {
    getSkill, postCreateSkill
}