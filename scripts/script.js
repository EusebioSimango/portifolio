const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2500,
        reset: true
    });
    
    ScrollReveal().reveal('section .text', { delay: 200 });
    ScrollReveal().reveal('section img', { delay: 200 });
    
    ScrollReveal().reveal('section .group', { delay: 500 });
    ScrollReveal().reveal('section img', { delay: 300 });
    
    ScrollReveal().reveal('section .project', { delay: 400 });
    ScrollReveal().reveal('section .service', { delay: 400 });

    ScrollReveal().reveal('section .text h1', { delay: 400 });
    
    ScrollReveal().reveal('section .container', { delay: 600 });

const links = document.querySelectorAll("header nav ul li a")

links.forEach(link => {
        link.addEventListener("click", () => {
        headerNav.classList.remove("show")
})})