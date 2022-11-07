const leftsidebar = document.querySelector(".left-sidebar");
const btngroup = document.querySelector(".btn-group");
const leftbutton = document.querySelector("#left");

leftbutton.addEventListener("click", () => {
    console.log("click");
    leftsidebar.style.visibility = "visible";
});
