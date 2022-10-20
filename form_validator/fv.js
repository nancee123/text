function sub(){
    var username=document.getElementById("username")
    var username_v=username.value;
    // console.log(username);
    if (username_v == ""){
       username.style.outlineColor = "#E74C3C";
       username.style.border = "solid 2px #E74C3C";
       username.style.borderRadius = "5px";
       var usertext=document.getElementById("up");
       usertext.style.visibility = "visible";
    }
    else if(username_v.length >= 3){
        username.style.outlineColor = "#2ECC71";
        username.style.border = "solid 2px #2ECC71";
        username.style.borderRadius = "5px";
        var usertext=document.getElementById("up");
        usertext.style.visibility = "hidden";
    }

    var email=document.getElementById("email")
    var email_v=email.value;
    // console.log(email);
    if (email_v == ""){
        email.style.outlineColor = "#E74C3C";
        email.style.border = "solid 2px #E74C3C";
        email.style.borderRadius = "5px";
        var emailtext=document.getElementById("ep");
        emailtext.style.visibility = "visible";
    }

    var password=document.getElementById("password")
    var password_v=password.value;
    // console.log(password);
    if (password_v == ""){
        password.style.outlineColor = "#E74C3C";
        password.style.border = "solid 2px #E74C3C";
        password.style.borderRadius = "5px";
        var passwordtext=document.getElementById("pp");
        passwordtext.style.visibility = "visible";
    }
    else if(password_v.length >= 6){
        password.style.outlineColor = "#2ECC71";
        password.style.border = "solid 2px #2ECC71";
        password.style.borderRadius = "5px";
        var passwordtext=document.getElementById("pp");
        passwordtext.style.visibility = "hidden";
    }

    var password2=document.getElementById("password2")
    var password_v2=password2.value;
    // console.log(password);
    if (password_v2 == ""){
        password2.style.outlineColor = "#E74C3C";
        password2.style.border = "solid 2px #E74C3C";
        password2.style.borderRadius = "5px";
        var passwordtext2=document.getElementById("pp21");
        passwordtext2.style.visibility = "visible";
    }
    else{
        if(password_v==password_v2){
            password2.style.outlineColor = "#2ECC71";
            password2.style.border = "solid 2px #2ECC71";
            password2.style.borderRadius = "5px";
            var passwordtext2=document.getElementById("pp21");
            passwordtext2.style.visibility = "hidden";
            var passwordtext2=document.getElementById("pp22");
            passwordtext2.style.visibility = "hidden";
        }
        else{
            password2.style.outlineColor = "#E74C3C";
            password2.style.border = "solid 2px #E74C3C";
            password2.style.borderRadius = "5px";
            var passwordtext2=document.getElementById("pp21");
            passwordtext2.style.visibility = "hidden";
            var passwordtext2=document.getElementById("pp22");
            passwordtext2.style.visibility = "visible";
        }
    }
    
}