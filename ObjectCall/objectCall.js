function call(Brand, Model, category, price, color) {
    let womensware = new Object();
    womensware.WesternWear = Brand;
    womensware.Footwear = Model;
    womensware.Jewellery = category;
    womensware.EthnicWear = price;
    womensware.Bags = color;
    womensware.FootwearBags = womensware.Footwear + womensware.Bags;

    _womensware = {
        WesternWear: Brand,
        Footwear: Model,
        WesternWearFootwear:this.WesternWear + this.Footwear
    }
    return womensware;





}
function onClickToCall() {
    debugger;
    let WesternWear = document.getElementById("txtWesternWear").value;
    let Footwear = document.getElementById("txtFootwear").value;
    let Jewellery = document.getElementById("txtJewellery").value;
    let EthnicWear = document.getElementById("txtEthnicWear").value;
    let Bags = document.getElementById("txtBags").value;
    let _womensWear = call(WesternWear, Footwear, Jewellery, EthnicWear, Bags)
    document.getElementById("pResult").innerHTML = JSON.stringify(_womensWear);
}