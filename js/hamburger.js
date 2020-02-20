function hamburger(){
    var menu = document.querySelector("nav")
    menu.classList.toggle("show")
    var btn = document.querySelector(".navButton")
    btn.classList.toggle("flip")
};
    var btn = document.querySelector(".navButton")
    btn.addEventListener("click",hamburger)
