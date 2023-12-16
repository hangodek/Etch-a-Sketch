const myContainer = document.querySelector(".container")

function createGrid () {
   for (let i = 0; i < 16; i++) {
    let temp1 = document.createElement("div");
    let temp2 = document.createElement("div");

    for (let i = 0; i < 16; i++) {
        let tempContainer = document.createElement("div");
        let para = document.createElement("p");
        para.textContent = "Testing";

        tempContainer.appendChild(para);
        tempContainer.setAttribute('class', 'penTrail');
        temp2.appendChild(tempContainer);
    }
    

    temp1.appendChild(temp2);
    myContainer.appendChild(temp1);
   }

   
}

createGrid();

const myTrail = document.querySelectorAll(".penTrail");

myTrail.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "red";
    })
})

const myBtn = document.querySelector(".myBtn");

myBtn.addEventListener("click", () => {
    let temp = prompt("Enter the number of square per side : ");
})