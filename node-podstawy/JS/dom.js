const element = document.addEventListener("click", (btn1) =>{
    alert("hallo world")
});

const element2 = document.querySelector("#btn2")
const body = document.querySelector('body') 

element2.addEventListener("click", (event) =>{
    body.innerHTML += 'Kurs alx wiele mnie uczy'

})

const warning = document.querySelectorAll("h1")
warning.forEach('.warning.')