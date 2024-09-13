const express = require('express')
const app = express();
const port = 5500;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(express.static('public'));

app.get('/', (req, res) => {
    // send static file
    res.sendFile('Chapter1.html', (err) => {
        if (err){
            console.log(err);
            
        }
    })

});

app.post('/Sign-upForm', jsonParser, (req, res) => {
    console.log("test")
    const body = req.body;
    const Fname = body.firstname;
    const Lname = body.lastname;
    const email = body.email;
    const interest = body.interest;
    const password = body.password;
    res.send('POST: Firstname: ' + Fname + ',Lastname: ' + Lname + ',email: ' + email + ',interests: ' + interest + 'and password:' + password);
});

app.listen(port, () => {
    console.log(`My first app listening on port ${port}!`);
})