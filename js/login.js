document.addEventListener("click", loginListener);

function loginListener(event){
    var element = event.target;
    if(element.id == "loginButton") {
        location.href = "/oauth2/start?rd=/securebin/";
    } else if(element.id == "logoutButton") {
        location.href = "/oauth2/sign_out?rd=/securebin/";
    }
}
