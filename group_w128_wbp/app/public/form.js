


function informUser(result){
    const head = document.querySelector("#post-r");
    head.innerHTML = "Data Recieved and Stored";
    console.log(result);
}

function onResponse(response){
    return response.text();
}

// function emailSend(email){
//     email.send(email)({
//         Host: "smtp.outlook.com"
//         ,Username: "put Your Email here"
//         ,Password: "A Put your Password here"// Beware of Regex, for second quote, put a backwards slash flast.
//         ,To: email
//         ,From: "tvn22gku@UEA.ac.uk"
//         ,Subject: "Sending a email feature"
//         ,Body: "Website Delopment Module"
//     })
//     alert("Email Sent to Your Email.")
// }

function processSubmit(e){
    e.preventDefault();
    const fName = document.querySelector("#Fname").value;
    const lName = document.querySelector("#Lname").value;
    const email = document.querySelector("#email").value;
    const Interest = document.querySelector("#interests").value;
    const password = document.querySelector("#pass").value;

    
    // var nodemailer = require('nodemailer');


    const out = {
        Name: fName,
        name: lName,
        email: email,
        Interest: Interest,
        password: password
    };
    
    const result = JSON.stringify(out);
    window.localStorage.setItem("Firstname", fName);
    window.localStorage.setItem("Lastname", lName);
    window.localStorage.setItem("Email", email);
    window.localStorage.setItem("Interests", Interest);
    window.localStorage.setItem("Password", password);


    

    console.log(window.localStorage.getItem("Firstname"));
    const fetchOptions ={
        method: 'POST',
        headers:{
            'Accept': 'application/process', 'Content-Type':'application/json'
        },
        body: result
    }
    console.log("asdfsdf")
    

    fetch('http://localhost:3000/Sign-upForm', fetchOptions)
    .then(onResponse)
    .then(informUser(result));

}

const form = document.querySelector("#Subbutton");
form.addEventListener('click', processSubmit);
console.log("asdfsssssssssssssdf")
