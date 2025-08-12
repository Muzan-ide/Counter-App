let number = 0

const count = document.getElementById("count")
const increasebtn = document.getElementById("increase")
const decreasebtn = document.getElementById("decrease")
const resetbtn = document.getElementById("reset")

increasebtn.addEventListener("click", () => {
    number++;
    count.innerText = number;
});

decreasebtn.addEventListener("click", () => {
    number--;
    count.innerText = number;
});

resetbtn.addEventListener("click", () => {
    number = 0;
    count.innerText = number;
});
