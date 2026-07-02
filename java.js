const starter = document.querySelector(".starter");

starter.addEventListener("animationend", () => {
    starter.remove();
});
