const mongoose = require('mongoose');
const dbURI = "mongodb://127.0.0.1:27017/devconnector1234";
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,

            useUnifiedTopology: true
        });
        console.log("Connected to database.....");
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

};

module.exports = connectDB;