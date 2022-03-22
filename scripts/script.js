const button = document.querySelector("button")
const header = document.querySelector("header.show")
const main = document.querySelector("main.show")
const footer = document.querySelector("footer.show")
const message = document.querySelector("div.was-clicked")
const seconds = document.querySelector("div.was-clicked span")

button.addEventListener("click", () => {
        header.classList.remove("show")
        main.classList.remove("show")
        footer.classList.remove("show")
        button.classList.remove("show")
        message.classList.add("show")

        setTimeout(() => {
                seconds.innerText -= 1
        }, 1000)

        setTimeout(() => {
                seconds.innerText -= 1
        }, 2000)
        
        setTimeout(() => {
                seconds.innerText -= 1
        }, 3000)

        setTimeout(() => {
                seconds.innerText -= 1
        }, 4000)

        setTimeout(() => {
                seconds.innerText -= 1
        }, 5000)
})