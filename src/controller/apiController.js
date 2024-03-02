const MyUser = require('../model/user')
const ContactMe = require('../model/contact');
const { apiUploadSingleFile, apiUploadMultitleFile } = require('../services/fileServices');

const getUsersApi = async (req, res) => {
    let results = await MyUser.find();
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

const postCreateUserApi = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let address = req.body.address;
    let age = req.body.age;
    let result = await apiUploadSingleFile(req.files.image);
    console.log("check result customers: ", result);
    imgUrl = result.path;
    
    let user = await MyUser.create({
        email: email,
        name: name,
        city: city,
        address: address,
        age: age,
        image: imgUrl
    });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const putUpdateUserApi = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let address = req.body.address;
    let age = req.body.age;
    let userId = req.body.userId;
    let user = await MyUser.updateOne(
        { _id: userId },
        { name: name, email: email, city: city, address: address, age: age }
    );
    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const deleteUserApi = async (req, res) => {
    const userId = req.body.userId;
    let user = await MyUser.deleteOne({ _id: userId });
    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const postCreateContactApi = async (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;
    let content = req.body.content;

    let dataContact = await ContactMe.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        content: content
    });

    return res.status(200).json({
        errorCode: 0,
        data: dataContact,
    });
};

const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await apiUploadSingleFile(req.files.images);
    console.log("check result: ", result)
    return res.send('ok')
}

const postUploadMultipleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    console.log("checkk multiple files: ", req.files)
    if (Array.isArray(req.files)) {
        let result = await apiUploadMultitleFile(req.files);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}

module.exports = {
    getUsersApi, postCreateUserApi, putUpdateUserApi, deleteUserApi, postCreateContactApi, postUploadSingleFile,
    postUploadMultipleFile
}