let orders = JSON.parse(localStorage.getItem("ls_orders")) || [];
function onClickToOrder(){
    debugger;
    let onlineFlowerDelivery = new Object();
    onlineFlowerDelivery.flowerType = document.getElementById("txtFlowerType").value;
    onlineFlowerDelivery.flowerColor = document.getElementById("txtFlowerColor").value;
    onlineFlowerDelivery.personalixeIt = document.getElementById("txtPersonalizeIt").value;
    onlineFlowerDelivery.min = document.getElementById("txtMin").value;
    onlineFlowerDelivery.max = document.getElementById("txtMax").value;
    onlineFlowerDelivery.location = document.getElementById("txtReceiversLocation").value;
    orders.push(onlineFlowerDelivery);
    localStorage.setItem("ls_orders", JSON.stringify(orders));
    console.log(orders);
    document.getElementById("divResult").innerHTML = JSON.stringify(orders);
}

function onClickToUpdate(){
    debugger;
    orders[0].Comments = document.getElementById("txtComments").value;
    localStorage.setItem("ls_orders", JSON.stringify(orders));
    document.getElementById("divResult").innerHTML = JSON.stringify(orders);
}