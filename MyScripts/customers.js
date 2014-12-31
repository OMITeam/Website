var rmsg = "";
var lmsg = "";

function checkSignIn() {

}

function checkSignUp() {
    checkRUName();
    checkRName();
    checkREmail();
    checkRPassword();
    // בדיקה האם היו שגיאות בנתונים והחזרת אמת או שקר בהתאם
    if (rmsg.length != 0) {
        document.getElementById('errors').innerHTML = rmsg;
        rmsg = "";
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

function checkRUName() {
    if (isEmpty(document.getElementById("runame").value)) {
        rmsg += "<li>You must enter Username</li>";
        return;
    }
}

function checkRName(){
    // בדיקה שהולד שם
    if (isEmpty(document.getElementById("rfname").value)) {
        rmsg += "<li>You must enter your Name</li>";
        return;
    }
}

function checkREmail() {
    email = "";
    email = document.getElementById("remail");
    if(isEmpty(email.value)){
        rmsg += "<li>You must enter Your Email Address</li>";
        return;
    }
    cemail = "";
    cemail = document.getElementById("rcemail");
    if(isEmpty(cemail.value)){
        rmsg += "<li>You must to Confirm your Email Address</li>";
        return;
    }

    if(email.value != cemail.value){
        rmsg += "<li>You must to Confirm your Email Address</li>";
        return;
    }
    zch = email.value.charAt(0);
    if(zch == '.' || zch == '@' || zch == '?' || zch == '!' || zch == ',' || zch == '\\' || zch == '|' || zch == '\"' || zch == '\'' || zch == "/"){
        rmsg += "<li>You must enter valid Email Address</li>";
        return;
    }
    
    if(email.value.indexOf("@") != email.value.lastIndexOf("@")){
        rmsg += "<li>You must enter valid Email Address</li>";
        return;
    }

}

function checkRPass() {
    if (isEmpty(document.getElementById("rpassword").value)) {
        rmsg += "<li>You must enter Password</li>";
        return;
    }
    if (document.getElementById("cpassword").value != (document.getElementById("password").value)) {
        rmsg += "<li>You must to Confirm Your Password</li>";
        return;
    }

    x = "";
    x = document.getElementById("password").value;
    if (x.length < 3 || x.length > 16){ 
        rmsg += "<li>The Password must be between 3 to 16 chars</li>";
        return;
    }
}
