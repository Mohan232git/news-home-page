var ulContainer = document.querySelector(".navlist-container");

document.querySelector(".menu-icon").addEventListener("click" ,  ()=>{
    ulContainer.classList.add("show-menu-bar");
});

document.querySelector("#close-icon").addEventListener("click" , ()=>{
    ulContainer.classList.remove("show-menu-bar");
});
