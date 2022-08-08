const express = require("express");
const bodyParser = require("body-parser");
const request = require("requests");

const app = express();
const https = require("https");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/singup.html")
})

app.post("/" , (req , res) => {
    console.log(req);
    var name = req?.body?.fname ;
    var email = req?.body?.email;
    console.log(name , email);

    var data = {
        members : [
            {
                email_address : email,
                status : "subscribed",
                merge_fields:{
                    FNAME: name
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);
    const url =  "https://us13.api.mailchimp.com/3.0/lists/e5ec73bd11";
    const options = {
        method : "POST",
        auth : "percy:bee97b8964cbd944aeec253c7743b518-us13",
    }

    const request =  https.request(url , options , function(responce){
        responce.on("data" , (data) => {
            console.log(JSON.parse(data));
        })

    })
    request.write(jsonData);
    request.end();
})

app.listen(3000 , () => {
})

//api key
// bee97b8964cbd944aeec253c7743b518-us13

//audience id
// e5ec73bd11