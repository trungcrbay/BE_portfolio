
const mongoose = require("mongoose");

var dbState = [
    {
        value: 0,
        label: "disconnected",
    },
    {
        value: 1,
        label: "connected",
    },
    {
        value: 2,
        label: "connecting",
    },
    {
        value: 3,
        label: "disconnecting",
    },
];

const connection = async () => {
    try {
        const options = {
            user: "root",
            pass: "123456",
            dbName: 'trungcrbay'
        }
        // await mongoose.connect("mongodb://localhost:27017/",options);
        await mongoose.connect("mongodb://localhost:27017", options);

        //https://stackoverflow.com/questions/19599543/check-mongoose-connection-state-without-creating-new-connection
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find((f) => f.value == state).label, "to db") // connected to db
    } catch (error) {
        handleError("ERROR CONNECTION :", error);
    }
};

module.exports = connection;


