const years = document.querySelector("span")

const func = () => { 
    
        years.innerText = Number(years.innerText) + 1
        console.log(years.innerText)
    
}

func()