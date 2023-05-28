const mongoose = require('mongoose');

module.exports = () => {
    const ConnectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try{
        mongoose.connect(process.env.DB, ConnectionParams);
        console.log("DB Connected");
    }
    catch(error){
        console.log(error)
        console.log("DB not Connected")
    }
}