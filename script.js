const tds = document.querySelectorAll("td");
const stars = document.querySelectorAll("svg");

tds.forEach(td => {
    if (td.innerText === "online"){
        td.classList.add("online");
    }
    if (td.innerText === "offline"){
        td.classList.add("offline");
    }
});

stars.forEach(star => {
    star.addEventListener("click", () =>{
        star.classList.toggle("svg");
        star.parentNode.parentElement.classList.toggle("favorite");
        if (star.parentNode.parentElement.classList.contains("favorite")){
            alert("Vous avez marqué un serveur comme favori")
        } else alert("Vous avez enlevé un serveur comme favori")
    })
});