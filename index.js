const button = document.getElementById("button")
const page = document.getElementById("question")

button.addEventListener("click", function(){
    page.innerHTML = `
    <h1>California Burrito!</h1>
    <img src='burrito.jpg'>
    `
})