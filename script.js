document.getElementById("myForm")
.addEventListener("submit",function(event){

event.preventDefault();

document.getElementById("message")
.innerHTML="Registration submitted successfully";

});
