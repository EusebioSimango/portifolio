const toggles = document.querySelectorAll(".toggle")
const headerNav = document.querySelector("header")
toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        headerNav.classList.toggle("show")
    })
});