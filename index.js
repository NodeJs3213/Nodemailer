const express = require("express");
const app = express();
//const data = require("./data.json");
const nodemailer = require("nodemailer");
let PORT = process.env.PORT || 3000;

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "bhanu.bossab@gmail.com",
        pass: "udlporcujffzooce"
    },
    tls: {
        rejectUnauthorized: false,
    },
})

let mailOptions = {
    from: "bhanu.bossab@gmail.com",
    to: "bhanu.bojjab@gmail.com",
    subject: "Testing Email",
    text: "First email sent from Nodejs using Nodemailer",
}

transporter.sendMail(mailOptions, function(err, success){
    if(err){
        console.log(err)
    } else {
        console.log("Email Sent Successfully!")
    }
})

app.get("/", (req,res) =>{
    res.send("Hello world");
});

app.listen(PORT, () => {

})