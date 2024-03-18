
const Note = require('../model/note')

const getNoteContent = async (req, res) => {
    const noteId = req.params.userId;
    const note = await Note.findById(noteId).exec();
    res.render("edit.ejs", { note: note });
}

const postNoteContent = async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;

    await Note.create({
        title: title,
        content: content,
    });

    res.send("create new note content successfully!");
};

const postUpdateContent = async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;

    await Note.updateOne(
        { _id: id },
        {
            title: title,
            content: content,
        }
    );

    res.send("update note content successfully!");
};

const postDeleteContent = async (req, res) => {
    const userId = req.params.id;
    await Note.deleteOne({ _id: userId });
    console.log("userId: ", userId);
    res.send("delete thanhf coong");
};

module.exports = {
    getNoteContent, postNoteContent, postUpdateContent, postDeleteContent
}