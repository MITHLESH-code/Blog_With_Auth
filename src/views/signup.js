

const form=document.querySelector("form");

form.addEventListener("submit",(e) => {

const password=document.getElementById("password").value;
const confirmpassword=document.getElementById("confirmpassword").value;

if(password !== confirmpassword){

    e.preventDefault();

    document.getElementById("error").textContent="password and confirm password dosent match";
}

});