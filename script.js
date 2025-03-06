document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт загружен!");
    
    // Добавим эффект затемнения заголовка при прокрутке
    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#222";
        } else {
            header.style.backgroundColor = "#333";
        }
    });
});
