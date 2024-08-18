//mongo.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/react-login-tut", {
    
}).then(() => {
    console.log(`connection successful`);
}).catch((e) =>{
    console.log(`no connection`);
})

const newSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    
    password:{
        type: String,
        require: true
    }

})


const collection = mongoose.model("collection",newSchema)

module.exports = collection