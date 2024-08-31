const menuIcon = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".close-icon");
const menuList = document.querySelector(".menu-list");

const airpodsTitle = document.querySelector(".title");


menuIcon.addEventListener("click", () => {
    airpodsTitle.style.visibility = "hidden";
    menuList.style.display = "flex";
    menuIcon.style.display = "none";
    menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
    menuList.style.display = "none";
    airpodsTitle.style.visibility = "visible";
    menuIcon.style.display = "block";
    menuClose.style.display = "none";
});


// choose color of airpods
const chooseColor = document.querySelectorAll(".choose-color-img");
const contentItem = document.querySelectorAll(".content-item");


const open = (e) => {
    const clickedItem = e.currentTarget;
    const button = clickedItem.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(item => item.classList.remove("choose-color-active"));

    clickedItem.classList.add("choose-color-active");


    contentItem.forEach(item => item.classList.remove("content-item-active"));

    contentActive.forEach(item => item.classList.add("content-item-active"))
};


chooseColor.forEach(element => {
    element.addEventListener("click", open)
});