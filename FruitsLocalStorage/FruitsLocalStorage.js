let fruitsName = [];
fruitsName = JSON.parse(localStorage.getItem("ls_fruitsName")) || [];
function onClickArrayObjects() {
    debugger;
    let fruits = new Object();
    fruits.fruitName = document.getElementById("txtFruitName").value;
    fruits.category = document.getElementById("Category").value;
    fruits.price = Number(document.getElementById("txtPrice").value);
    fruits.country = document.getElementById("Country").value;
    fruits.state = document.getElementById("State").value;
    fruits.quantity = Number(document.getElementById("txtQuantity").value);
    localStorage.setItem("ls_fruitsName", JSON.stringify(fruitsName));
    fruitsName.push(fruits);
    console.log(fruitsName);
    document.getElementById("divFruits").innerHTML = JSON.stringify(fruitsName);
}