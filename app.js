//backend app.js
const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

require("./pass_details")
require("./flights")
const User = mongoose.model("pass_details")
const Flight = mongoose.model("flights")

function genSeatNo() {
  const row = Math.floor(Math.random() * 20) + 1;
  const seatLetter = String.fromCharCode(65 + Math.floor(Math.random() * 6));
  const seatNumber = `${row}${seatLetter}`;

  return seatNumber;
}

app.get("/",cors(),(req,res)=>{

})

let userEmail;

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await collection.findOne({ email: email });
      const check2 = await User.findOne({email:email})
      if (user) {
        if (user.password === password) 
        {
          userEmail = email;
          if(!check2){
            res.json("exist");
          }
          else{
            res.json("booked")
          }

        } else {
          res.json("invalid");
        }
      } else {
        res.json("notexist");
      }
    } catch (e) {
      console.error(e);
      res.json("fail");
    }
  });



app.post("/signup",async(req,res)=>{
  

    const{email,password}=req.body
    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})
        if(check){
            userEmail = email;
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/booking", async (req, res) => {

  const { name, email, phno, from, to, date, selectedClass } = req.body;
  const data = {
    name: name,
    email: email,
    phno: phno,
    from: from,
    to: to,
    date: date,
    selectedClass: selectedClass
  };

  try{
  
    const check=await collection.findOne({email:email})
    const check2 = await User.findOne({email:email})
    const fly = await Flight.findOne({from: from, to: to})
    const seat_no = genSeatNo();
    const f1 = {
      flight_no: fly.flight_no,
      price: fly.price,
      gate: fly.gate,
      seat: seat_no
    }
    const combo = {...data, ...f1}

    if(check){
      if(!check2){
        userEmail = email;
        res.json("exist")
        await User.insertMany([combo])
      }
      else{
        res.json("booked")
      }

    }
    else{
        res.json("notexist")
    }

}
catch(e){
    res.json("fail")
}
});



app.get("/getUserInfo", async(req,res) => {
  try{
    const allUser = await User.find({email: userEmail});
    res.send({status: "ok", data:allUser});
  }catch(error){
    console.log(error)
  }
})

app.delete('/cancel',async(req,res)=> {
  try{
    await User.deleteOne({email: userEmail});
    res.json("cancelled")
  }
  catch(error){
    console.log(error)
  }
})

app.post('/deleteUser', async(req, res) => {
  try{
    User.deleteOne(
      {email: userEmail},function(err,res){
        console.log(err);
      }
    );
    res.send({status: "Ok",data : "deleted"});
  }
  catch(err){
    console.log(err)
  }
})

app.listen(8000,()=>{
    console.log("port connected");
})

