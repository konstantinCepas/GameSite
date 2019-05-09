import {NewsPageLogic} from "../Business/news-logic.js";

export function RenderUser() {
    this.pageData = new NewsPageLogic();
    this.userData = null;
    var self = this;
    
    var userHeader = document.querySelector(".usermenu");
    var userIcon = document.createElement("div");
    var iUser = document.createElement("i");
    var webList = document.querySelector(".webmenu");
    var loginForm= document.querySelector(".login");
    var registerForm = document.querySelector(".register");
    var closeLogin = document.createElement("div");
    var submitLogin = document.createElement("button");
    var registerSpan = document.createElement("span");
    var loginSpan = document.createElement("span");
    var loginHere = document.createElement("a");
    var registerHere = document.createElement("a");
    var closeRegister = document.createElement("div")
    var submitRegister = document.createElement("button");
    var loginpopUp = document.createElement("div");
    var registerpopUp = document.createElement("div");
    var loginDivTab = document.createElement("div");
    var registerDivTab = document.createElement("div");
    var loginCustomSpan = document.createElement("span");
    var registerCustomSpan = document.createElement("span");
    var userInput = document.createElement("input");
    var userRegisterInput = document.createElement("input");
    var passInput = document.createElement("input");
    var passRegisterInput = document.createElement("input");
    var loginimg = document.createElement("img");
    var registerimg = document.createElement("img");
    var errorMessage = document.createElement("span");
    var errorMessagetwo = document.createElement("span");
    var logoutDiv = document.createElement("div");
    var logoutButton = document.createElement("span");
    var checkLogged = localStorage.getItem("loggedIn");
    var regsucces = document.createElement("span");
    logoutButton.className = "logoutbtn";
this.renderLogin = function() {
this.userLogin = function() {
    document.body.appendChild(loginpopUp);
    loginpopUp.className = "loginpopup";
    loginpopUp.appendChild(loginDivTab);
    loginDivTab.className = "loginform";  
    loginCustomSpan.className = "loginspantext"
    loginDivTab.appendChild(loginCustomSpan);
    loginCustomSpan.innerHTML = "User Login";
    loginDivTab.appendChild(closeLogin);
    closeLogin.innerHTML = "X";
    closeLogin.className = "closepop";
    loginForm.className = "is-disabledtwo";
    userInput.className = "user-input";
    userInput.placeholder = "Enter Username";
    passInput.id = "passinput";
    loginDivTab.appendChild(passInput);
    document.getElementById("passinput").type = "password";
    loginDivTab.appendChild(userInput);
    passInput.className = "passinput";
    passInput.placeholder = "Enter Password";
    loginDivTab.appendChild(loginimg);
    loginimg.src = "Pictures/probata.png";
    loginimg.className = "userimg"
    loginDivTab.appendChild(submitLogin);
    submitLogin.innerHTML = "Login";
    submitLogin.className = "submitLogin";
    loginDivTab.appendChild(registerSpan);
    registerSpan.innerHTML = "Don't have an account?";
    registerSpan.className = "registerSpan";
    registerSpan.appendChild(registerHere);
    registerHere.innerHTML = " Register Here!";
    registerHere.className = "registerHere";
    registerpopUp.remove();
    registerDivTab.remove();
    registerCustomSpan.remove();
    userRegisterInput.remove();
    passRegisterInput.remove();
    registerimg.remove();
    errorMessage.remove();
}
this.removeLogin = function() {
    loginForm.removeEventListener('click', this.userLogin);
    var loginpop = document.querySelector(".loginpopup");
    loginpop.remove();
    loginForm.className = 'login';
    registerForm.className = "register";
}
loginForm.addEventListener('click', this.userLogin);
closeLogin.addEventListener('click', this.removeLogin);

this.registerForm = function() {
    document.body.appendChild(registerpopUp);
    registerpopUp.className = "registerpopup";
    registerpopUp.appendChild(registerDivTab);
    registerDivTab.className = "registerform";  
    registerCustomSpan.className = "registerspantext"
    registerDivTab.appendChild(registerCustomSpan);
    registerCustomSpan.innerHTML = "User Registration";
    registerDivTab.appendChild(closeRegister);
    closeRegister.innerHTML = "X";
    closeRegister.className = "closeregister";
    registerForm.className = "is-disabledthree";
    userRegisterInput.className = "user-reginput";
    userRegisterInput.placeholder = "Enter Username";
    passRegisterInput.id = "pass-reginput";
    registerDivTab.appendChild(passRegisterInput);
    document.getElementById("pass-reginput").type = "password";
    registerDivTab.appendChild(userRegisterInput);
    passRegisterInput.className = "pass-reginput";
    passRegisterInput.placeholder = "Enter Password";
    registerDivTab.appendChild(registerimg);
    registerimg.src = "Pictures/gamec.png";
    registerimg.className = "userimg"
    registerDivTab.appendChild(submitRegister);
    submitRegister.innerHTML = "Register";
    submitRegister.className = "submitRegister";
    registerDivTab.appendChild(loginSpan);
    loginSpan.innerHTML = "Already have an account?";
    loginSpan.className = "loginSpan";
    loginSpan.appendChild(loginHere);
    loginHere.innerHTML = " Login Here!";
    loginHere.className = "loginHere";
    loginpopUp.remove();
    loginDivTab.remove();
    loginCustomSpan.remove();
    userInput.remove();
    passInput.remove();
    loginimg.remove();
    errorMessage.remove();
    errorMessagetwo.remove();
    regsucces.remove();
}
this.removeRegister = function() {
    var registerpopUp = document.querySelector(".registerpopup");
    registerpopUp.remove();
    registerForm.className = 'register';
    loginForm.className = "login";
}

registerForm.addEventListener("click", this.registerForm);
closeRegister.addEventListener("click", this.removeRegister);
loginHere.addEventListener("click", this.userLogin);
registerHere.addEventListener("click", this.registerForm);

this.registerButton = function() {
    var userReg = userRegisterInput.value;
    var passReg = passRegisterInput.value;
    if(userReg.length <= 5) {
        registerDivTab.appendChild(errorMessage);
        errorMessage.innerHTML = "Username must contain more than 5 characters!";
        errorMessage.className= "userError";

    } if (userReg.length > 5 && passReg.length <= 5 ) {
        registerDivTab.appendChild(errorMessage);
        errorMessage.innerHTML = "Password must contain more than 5 characters!";
        errorMessage.className = "passError";
    } if (userReg.length <= 5 || passReg.length <= 5) {
        registerDivTab.appendChild(errorMessage);
        errorMessage.innerHTML = "Username must contain more than 5 characters!";
        errorMessage.className = "userError";
        registerDivTab.appendChild(errorMessagetwo);
        errorMessagetwo.innerHTML = "Password must contain more than 5 characters!";
        errorMessagetwo.className = "passError";
    }
    
    else {
 var userData = self.pageData.postUserData(userReg,passReg)
 console.log("registered Succesfuly");
 userRegisterInput.value = "";
 passRegisterInput.value = "";
 userRegisterInput.remove();
 passRegisterInput.remove();
 errorMessage.remove();
 errorMessagetwo.remove();
 registerCustomSpan.remove();
 submitRegister.remove();
 registerpopUp.appendChild(regsucces);
 regsucces.innerHTML = "Registered Successfully!!";
 regsucces.className = "regsuccess";
    }
}
this.loginButton = function() {
    var userLogin = userInput.value;
    var userPass = passInput.value;
    var memberGet = self.pageData.getUserData(userLogin, userPass); 
    if(memberGet) {
        var loggedIn = localStorage.setItem("loggedIn",true);
        loginForm.remove();
        registerForm.remove();
        userHeader.appendChild(iUser);
        loginDivTab.remove();
        loginpopUp.remove()
        loginForm.className = "login";
        userHeader.appendChild(userIcon);
        userIcon.appendChild(iUser);
        iUser.className = "fas fa-user";
        iUser.id = "iUser";
        iUser.appendChild(logoutDiv);
        logoutDiv.className = "logoutdiv";
        logoutDiv.appendChild(logoutButton);
        logoutButton.innerHTML = "Logout";
    }else {
        loginDivTab.appendChild(errorMessage);
        errorMessage.innerHTML = "Please enter an existing username or password !!";
        errorMessage.className = "loginerror";
    }
} 

this.checkLoggedIn = function() {
    checkLogged = localStorage.getItem("loggedIn");
    console.log(checkLogged)
    if(checkLogged === "false") {
        checkLogged = false;
        iUser.remove();
        userIcon.remove();
        userHeader.appendChild(loginForm);
        userHeader.appendChild(registerForm);
        console.log(checkLogged);
    }  else {
    loginForm.remove()
    registerForm.remove();
    userHeader.appendChild(userIcon);
        userIcon.appendChild(iUser);
        iUser.className = "fas fa-user";
        iUser.id = "iUser";
        iUser.appendChild(logoutDiv);
        logoutDiv.className = "logoutdiv";
        logoutDiv.appendChild(logoutButton);
        logoutButton.innerHTML = "Logout";
        return checkLogged = true;
    }
    }
this.logoutClick = function() {
    var logOut = localStorage.setItem("loggedIn", false);
userHeader.appendChild(loginForm); 
userHeader.appendChild(registerForm);
iUser.remove(); 
}
logoutButton.addEventListener('click', this.logoutClick);

this.checkLoggedIn()
submitLogin.addEventListener("click", this.loginButton);

submitRegister.addEventListener('click',  this.registerButton)

}

}
