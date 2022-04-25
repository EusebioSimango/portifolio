const links = document.querySelectorAll("header nav ul li a")

links.forEach(link => {
        link.addEventListener("click", () => {
        headerNav.classList.remove("show")
})})