function onClickToSave() {
    debugger;
    let inputName = document.getElementById("txtName").value;
    localStorage.setItem("Name", inputName);
}

function onClickToLoad() {
    debugger;
    let inputName = localStorage.getItem("Name");
    document.getElementById("txtName").value = inputName;

}