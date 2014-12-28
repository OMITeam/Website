var msg = "";

function checkSignUp() {
    checkUName();
    checkName();
    checkEmail();
    checkPassword();
    // בדיקה האם היו שגיאות בנתונים והחזרת אמת או שקר בהתאם
    if (msg.length != 0) {
        document.getElementById('errors').innerHTML = msg;
        msg = "";
        return false;
    }
    else {
        document.getElementById('errors').innerHTML = "Good Values";
        return true;
    }
}

function isEmpty(str) {
    return (str.length==0);
}

function isNumeric(str) {
    if (isNaN(str)) {
        return false;
    } else {
        return true;
    }
}

function checkUName() {
    if (isEmpty(document.getElementById("uname").value)) {
        msg += "<li> You must enter Username </li>";
    }
}

function checkName(){
    // בדיקה שהולד שם
    if (isEmpty(document.getElementById("fname").value)) {
        msg += "<li> You must enter your Name </li>";
    }
}

function checkEmail() {
    email = "";
    email = document.getElementById("email");
    if(isEmpty(email)){
        msg += "<li> You must enter Your Email-Address";
    }
}

function checkPass() {
    if (isEmpty(document.getElementById("password").value)) {
        msg += "<li> You must enter Password </li>";
    }
    if (document.getElementById("cpassword").value != (document.getElementById("password").value)) {
        msg += "<li> You must to Confirm Your Password </li>";
    }

    x = "";
    x = document.getElementById("password").value;
    if (x.length < 3 || x.length > 16){ 
        msg += "<li> The Password must be between 3 to 16 chars</li>";
    }
}
