const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/react-login-tut", {
    
}).then(() => {
    console.log(`connection successful`);
}).catch((e) =>{
    console.log(`no connection`);
})


const userDetailsSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            require: true
        },
        name:{
            type: String,
            require: true
        },
        phno:{
            type: String,
            require: true
        },
        from:{
            type: String,
            require: true
        },
        to:{
            type: String,
            require: true
        },
        date:{
            type: Date,
            require: true    
        },
        selectedClass:{
            type: String,
            require: true
        },
        flight_no:{
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: null
        },
        gate: {
            type: String,
            default: ""
        },
        seat:{
            type: String,
            default: ""
        }

    }
)

mongoose.model("pass_details",userDetailsSchema)

