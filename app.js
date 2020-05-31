const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){

    const today = new Date();

    const currentDay = today.getDay();

    if(currentDay === 6 || currentDay === 0)
    {
        res.write("It's Time to Read some Books and do some code");
    }
    else{
        res.write("It's time to Concentarte to University Studies");
    }

    res.send();
});




app.listen(process.env.PORT || 3000, ()=> console.log("Server is Running at 5000 Port"));
