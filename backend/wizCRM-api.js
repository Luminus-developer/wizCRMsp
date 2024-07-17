const express = require('express')
const cors = require('cors');
const NodeCache = require('node-cache');

const app = express();
const port = 3000;

const OK = 0;
const WRONG_CREDENTIALS_ERROR = 10;
const WRONG_USER_ROLE_ERROR = 20;

const cache = new NodeCache();

app.use(cors());


app.get('/getMenu',(req, res) => {

    const role = req.query.role;

    let userData = "{}";

    if (role === 'admin') {

        userData={
           "menu": [
                    {
                        id: 'contacts',
                        label: 'Contacts',
                        children: [
                            { id: 'leads', label: 'Leads' },
                            { id: 'prospects', label: 'Prospects' },
                            { id: 'customers', label: 'Customers' },
                          ],
                    },
                    {
                        id: 'sales',
                        label: 'Sales'
                    }
           ]
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
            result: userData,
            error: {
                code: WRONG_USER_ROLE_ERROR,
                message: "Role "+role+" is not valid"
            }
         }
    }

    console.log(response);

    res.send(response);
});

app.get('/login', (req, res) => {

    const userName = req.query.userName;
    const password = req.query.password;

    let response = "";

    const inMemoryData = cache.get(userName);

    if (inMemoryData !== undefined) {
        console.log('Cache hit (in-memory):', userName);
        console.log("Data in Cache: "+JSON.stringify(inMemoryData));
        response = {
            result: inMemoryData,
            error: {
                code: OK,
                message: ""
            }
         }
         res.send(response);
         return;
    } 

     console.log("Check Credentials userName: "+userName+" password: "+password);

    if ("admin" === userName && "admin" === password) {

        let nowInSeconds =Math.round(Date.now() / 1000);

        let tokenBase64  = btoa(nowInSeconds);

        console.log ("Token in Base64: "+tokenBase64);

        let userData = {
            token : tokenBase64,
            userName: "admin",
            role: "admin",
            language: "en",
            company: "101",
            tokenTimeout: 900  // Validità del Token espressa in secondi
        }

        response = {
            result: userData,
            error: {
                code: OK,
                message: ""
            }
         }

         cache.set(userName, userData, /* optional expiration in seconds */);

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
