const images = ["0","1","2","3","4","5"];
const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];
const app_container = document.querySelector(".app_container");
const bgImage = document.createElement("img");
const d_day_calculator_container = document.querySelector(".d_day_calculator_container");
const greeting = document.querySelector(".greeting");

function loadBackGround(){
    body.style.backgroundImage = `url(img/${chosenImage}.jpg)`
    if(chosenImage === "0" || chosenImage === "1"){
        app_container.style.backgroundColor = "rgba(92, 92, 92,0.8)";
        d_day_calculator_container.style.backgroundColor = "rgba(92, 92, 92,0.8)";

    }else{
        app_container.style.backgroundColor = "rgba(201, 240, 247,0.8)";
        d_day_calculator_container.style.backgroundColor ="rgba(201, 240, 247,0.8)";
    }
}
loadBackGround()