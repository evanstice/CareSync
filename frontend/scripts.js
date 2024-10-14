function signInClick() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
}

function createAccountClick() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //Checks if the password has a number and a capital letter
    if(username == "") {
        document.getElementById("message").innerHTML = "Invalid username"
    }
    else if(!(password.match(/[0-9]/) && (password.match(/[A-Z]/)))) {
        document.getElementById("message").innerHTML = "Password needs one number and one capital letter."
    }
    else{
        window.location.replace("home.html")
    }
}