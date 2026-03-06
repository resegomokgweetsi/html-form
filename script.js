document.getElementById("myForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(name === "" || email === "" || password === ""){
document.getElementById("message").innerHTML = "Please fill in all fields.";
}
else{
document.getElementById("message").innerHTML = "Form submitted successfully!";
}

});
