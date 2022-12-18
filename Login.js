function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let un = "11123";
    let pw = "1909";
    if (isNaN(password) || password>=10000) {
        alert("Hay nhap mat khau hop le");
        return false;
    }
    if (isNaN(username) || username == "") {
        alert("Ban phai nhap username");
        return false;
    }
    if (password == "") {
        alert("Hay nhap mat khau");
        return false;
    }
    if (password == "" && username == "") {
        alert("Hay nhap thong tin");
        return false;
    }
    if (un == username && pw == password) {
        window.location="https://viblo.asia.vn";
        return true;
        
    }
    alert("That bai")
    return true;
}
// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Formget" && password == "formget#123"){
// alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }