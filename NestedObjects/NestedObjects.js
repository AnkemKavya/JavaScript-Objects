let shoppingCart = new Object(); 

function onClickToCreate() {
    debugger;
    shoppingCart.userId = "CART_2003";

    let user = new Object();
    user.name = "Kavya";
    user.phoneNo = "9876543210";
    shoppingCart.user = user;

    let items = [];
    item = new Object();
    item.title = document.getElementById("txtTitle").value;
    item.price = document.getElementById("txtPrice").value;
    item.quantity = document.getElementById("txtQuantity").value;
    items.push(item);
    // document.getElementById("txtTitle").value = "";
    // document.getElementById("txtPrice").value = "";
    // document.getElementById("txtQuantity").value = "";
    shoppingCart.items = items;

    let summary = [];
    let subtotal = items[0].price;
    summary.push(subtotal);
    let shipping = 50;
    summary.push(shipping);
    let total = subtotal + shipping;
    summary.push(total);
    shoppingCart.summary = summary;
    document.getElementById("divCreate").innerHTML = JSON.stringify(shoppingCart);
}