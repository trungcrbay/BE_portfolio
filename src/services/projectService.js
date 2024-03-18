const Project = require('../model/project');

const searchQueryProject = async (title) => {
    try {
        if (title) {
            let result = await Project.find({ "title": { $regex: '.*' + title + '.*', $options: 'i' } }).exec()
            return result;
        } else {
            let result = await Project.find().exec()
            return result;
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    searchQueryProject
}