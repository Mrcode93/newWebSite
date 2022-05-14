const mega = document.querySelector(".amer");
const menu = document.querySelector(".mega-menu");
const close = document.querySelector(".btn");

mega.addEventListener("click", function() {
    console.log("action clicked");
    menu.style.cssText = "transform:scaleY(1); z-index:999;transition: all .3s;";
});
close.addEventListener("click", function() {
    menu.style.cssText = "transform:scaleY(0); z-index:-1;transition: all .3s;";
});