const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios').default;

const cors = require('cors');
//import axios from 'axios';
//import axios, {AxiosResponse} from 'axios';
//const data = require("./data.json");
const nodemailer = require("nodemailer");
let PORT = process.env.PORT || 3000;

/*app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api', api);
app.get('/', function(req, res){
    res.send('server is up and running!');
})

app.listen(3000, function(){
    console.log('server is listening');
})*/

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

//axios.get('https://api.github.com/repos/NodeJs3213/Node/pulls')
axios.get('https://reqres.in/api/products/3')
    .then((response) => {
            console.log(response.data);
    })

app.get("/", (req,res) =>{
    res.send("Hello world");
});

app.listen(PORT, () => {

})