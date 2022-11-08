const leftSidebar = document.querySelector(".left-sidebar");
const btnGroup = document.querySelector(".btn-group");
const leftButton = document.querySelector("#left");
const leftColse = document.querySelector("#left-close");

leftButton.addEventListener("click", () => {
    leftSidebar.style.animation = "leftsidebar 1s linear 0.5s both";
    leftSidebar.style.opacity = 1;
    leftSidebar.style.visibility = "visible";
});

leftColse.addEventListener("click", () => {
    leftSidebar.style.visibility = "hidden";
    leftSidebar.style.opacity = 0;
    leftSidebar.style.animation = "none";
});
