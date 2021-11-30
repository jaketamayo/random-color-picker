const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    const randHex = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randHex;
    color.innerHTML = "#" + randHex;
})