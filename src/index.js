let links = document.querySelector("#links");
let icon = document.querySelector("#icon");

document.addEventListener("DOMContentLoaded", function () {
    let liPrim = document.querySelector(".liPrim");
    liPrim.style.opacity = 1;

    if (window.innerWidth < 1024) {
        links.classList.add("hidden");
        icon.addEventListener("click", clickMenu);
    }
    else {
        icon.removeEventListener("click", clickMenu);
    }
});

function clickMenu() {
    if (links.classList.contains("hidden")) {
        links.classList.remove("hidden");
        links.classList.add("flex", "flex-col");
    } else {
        links.classList.add("hidden");
    }
}

function ocultarPrimerImg() {
    let liPrim = document.querySelector(".liPrim");
    liPrim.style.opacity = 0;
}

function llamarPrimerImg() {
    let liPrim = document.querySelector(".liPrim");
    liPrim.style.opacity = 1;
}
