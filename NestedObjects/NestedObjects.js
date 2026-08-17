let shoppingCart = new Object(); 
let items = [];

function onClickToAdd() {
    debugger;
    let item = new Object();
    let itemNo = items.length+1;
    // for(i=0; i< items.length; i++){
    //     itemNo = i;
    // }
    item.itemNo = itemNo;
    item.title = document.getElementById("txtTitle").value;
    
    item.price = Number(document.getElementById("txtPrice").value);
   
    item.quantity = document.getElementById("txtQuantity").value;
    items.push(item);
    document.getElementById("txtTitle").value = "";
    document.getElementById("txtPrice").value = "";
    document.getElementById("txtQuantity").value = "";
}

function onClickToCreate() {
    debugger;
    shoppingCart.userId = "CART_2003";

    let user = new Object();
    user.name = "Kavya";
    user.phoneNo = "9876543210";
    shoppingCart.user = user;

    shoppingCart.items = items;
    
    let summary = [];
    let subtotal = 0;
    for(i=0; i < items.length; i++) {
        subtotal += items[i].price;
    }
    summary.push(subtotal);
    let shipping = 50;
    summary.push(shipping);
    let total = subtotal + shipping;
    summary.push(total);
    shoppingCart.summary = summary;
    shoppingCart.alert=function(){

        alert(user.name);
    }
    document.getElementById("divCreate").innerHTML = JSON.stringify(shoppingCart);

shoppingCart.alert();
}