const express = require('express')
const cors = require('cors');

const app = express();
const port = 3000;

const OK = 0;
const WRONG_CREDENTIALS_ERROR = 10;

app.use(cors());

app.get('/login', (req, res) => {
    
    const userName = req.query.userName;
    const password = req.query.password;

    let response = "";
    if ("admin" === userName && "admin" === password) {

        var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        let userData = {
            token : Buffer.from((year+month+day)).toString('base64'),
            userName: "admin",
            language: "en",
            company: "101"
        }

        response = {
            result: userData,
            error: {
                code: OK,
                message: ""
            }
         }
    } else {
        response = {
            result: "",
            error: {
                code: WRONG_CREDENTIALS_ERROR,
                message: "Incorrect credentials"
            }
         }
    }

    console.log(response);

    res.send(response);
});

app.listen(port, () => console.log("wizCRM-api app listening on port "+port+" !"));
