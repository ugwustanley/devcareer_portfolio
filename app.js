var mode = document.querySelector(".mode");
var img_box = document.querySelector(".img-box");
var info_box = document.querySelector(".info-box");
var ball = document.querySelector("#ball");
var img = document.querySelector(".port-img");
var icons = document.getElementsByClassName("icon");
var text = document.getElementsByClassName("text");
var stack = document.getElementsByClassName("stack");
var line = document.querySelector(".line");
var master = document.querySelector(".master-builder");
function darkmode(){
    if(window.getComputedStyle(ball).getPropertyValue("background-color") == "rgb(68, 68, 68)" ){
        ball.style.backgroundColor = "#ffffff";
        mode.style.borderColor = "#ffffff"
        info_box.style.backgroundColor = "#444444";
        line.style.backgroundColor = "wheat";
        ball.style.float = "right";
        img_box.style.backgroundColor = "white";
        img.style.borderColor = "#444444";
        master.style.borderWidth = "3px"
        for(i=0; i < text.length ; i++){
            text[i].style.color = "white"
        }
        for(i=0; i < icons.length ; i++){
            icons[i].style.backgroundColor = "white";
            icons[i].style.borderWidth = "0px";
        }
        for(i=0; i < stack.length ; i++){
            stack[i].style.backgroundColor = "white";
            stack[i].style.color = "#000";
        }
    }else{
        ball.style.backgroundColor = "#444444";
        ball.style.float = "left";
        mode.style.borderColor = "#444444";
        info_box.style.backgroundColor = "#ffffff";
        line.style.backgroundColor = "#05B993";
        img_box.style.backgroundColor = "#05B993";
        img.style.borderColor = "#fff";
        master.style.borderWidth = "0px"
        for(i=0; i < icons.length ; i++){
            icons[i].style.backgroundColor = "transparent";
            icons[i].style.borderWidth = "3px";
        }
        for(i=0; i < text.length ; i++){
            text[i].style.color = "black"
        }
        for(i=0; i < stack.length ; i++){
            stack[i].style.backgroundColor = "#444444";
            stack[i].style.color = "#ffffff";
        }
    }
}