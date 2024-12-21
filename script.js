const cards = document.querySelectorAll(".mega-card");

cards.forEach(cards =>{
    const btn= cards.querySelector("button");
    const panel1= cards.querySelector(".panel-1");
    const panel2= cards.querySelector(".panel-2");

    btn.addEventListener("click", () => {
        panel1.classList.toggle("panel-1-open");
        panel2.classList.toggle("panel-2-open");
        btn.classList.toggle("btn-open");

    });
});