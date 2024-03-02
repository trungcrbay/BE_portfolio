
const MyUser = require('../model/user')

const getHomePage = async (req, res) => {
    const resultsData = await MyUser.find();
    res.render('home.ejs', { listUsers: resultsData })
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.userId;
    const user = await MyUser.findById(userId).exec();
    res.render("edit.ejs", { user: user });
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let address = req.body.address;
    let age = req.body.age;

    await MyUser.create({
        email: email,
        name: name,
        city: city,
        address: address,
        age: age
    });

    res.send("create new user successfully!");
};

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let address = req.body.address;
    let age = req.body.age;
    let id = req.body.id

    await MyUser.updateOne(
        { _id: id },
        {
            email: email,
            name: name,
            city: city,
            address: address,
            age: age
        }
    );

    res.send("update user successfully!");
    // res.redirec("update user successfully!"); 
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    await MyUser.deleteOne({ _id: userId });
    console.log("userId: ",userId);
    res.send("delete thanhf coong");
};

module.exports = {
    getHomePage, getTest, getCreatePage, postCreateUser, postUpdateUser,
    getUpdatePage, postDeleteUser
}