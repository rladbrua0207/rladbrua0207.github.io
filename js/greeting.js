const login_form = document.querySelector("#login_form");
const login_input = login_form.querySelector("#login_input");
const todo_header = document.querySelector(".todo_header");
const USER_NAME = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = login_input.value;
    localStorage.setItem(USER_NAME,username);
    login_form.classList.add("hidden");
    paintGreeting();
}

function paintGreeting(){
    const span = document.createElement("span");
    span.innerHTML = `Hello, ${localStorage.getItem(USER_NAME)}`;
    span.classList.add("greeting");
    todo_header.prepend(span); //todo_header.insertBefore(span, todo_header.firstChild);
}

if(localStorage.getItem(USER_NAME)){
    login_form.classList.add("hidden");
    paintGreeting();
}else{
    login_form.classList.remove("hidden");
}

login_form.addEventListener("submit", onLoginSubmit);

