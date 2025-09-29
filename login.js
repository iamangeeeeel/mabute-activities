function checkLogin(){
let email = document.getElementById("Email").value;
//email = angel@gmail.com

let pass = document.getElementById("Password").value;
//pass = 987654321

let erroEmail = document.getElementById("Email-error");

console.log(email);
//angel@gmail.com
console.log(pass);

if (email === "angel@gmail.com"){
    console.log: The email you entered is incorrect" + email);
    else{
        console.log("Oppss... Your email is incorrect. Change it now!")
        erroEmail.innerHTML = "Your email is incorrect.";
    }
}
}