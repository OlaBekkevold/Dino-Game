const dino = document.getElementById("dino");

function jump() {
    dino.style.top = "50px";

    setTimeout(function(){
        dino.style.top = "135px"
}, 500);
}

document.addEventListener("keydown", jump);