const express = require('express')
const cors = require('cors');

const app = express();
const port = 3000;

const OK = "0";
const WRONG_CREDENTIALS_ERROR = "10";

app.use(cors());

app.get('/login', (req, res) => {
    
    const userName = req.query.userName;
    const password = req.query.password;

    var response = "";
    if ("admin" === userName && "admin" === password) {

        var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        response = {
            result: Buffer.from((year+month+day)).toString('base64'),
            errorCode: OK,
            errorMessage: ""
         }
    } else {
        response = {
            result: "",
            errorCode: WRONG_CREDENTIALS_ERROR,
            errorMessage: "Incorrect credentials"
         }
    }

    res.send(response);
});

app.listen(port, () => console.log("wizCRM-api app listening on port "+port+" !"));