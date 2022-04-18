const sections = document.querySelectorAll("section")

document.addEventListener("scroll", () => {
      console.log("scrolling")
      
      const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
      console.log(checkpoint)

      sections.forEach(section => {

            const divTop = section.offsetTop
            const divHeight = section.offsetHeight


            const checkpointStart = checkpoint >= divTop
            const checkpointEnd = checkpoint <= divTop + divHeight


        if (checkpointStart && checkpointEnd) {
                section.classList.add("scroll")
      } else {
              section.classList.remove("scroll")
        }
      })
})

const links = document.querySelectorAll("header nav ul li a")

links.forEach(link => {
        link.addEventListener("click", () => {
        headerNav.classList.remove("show")
})})