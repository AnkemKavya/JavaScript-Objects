
let movie = new Object();
function onClickToCreate() {
    debugger;
    movie.title = document.getElementById("txtTitle").value;
    movie.director = document.getElementById("txtDirector").value;
    movie.budget = document.getElementById("txtBudget").value;
    movie.genre = document.getElementById("txtGenre").value;
    movie.hero = document.getElementById("txtHero").value;
    movie.heroin = document.getElementById("txtHeroin").value;
    movie.rating = document.getElementById("txtRating").value;
    document.getElementById("divCreate").innerHTML = JSON.stringify(movie);
}

function onClickToRead() {
    debugger;
    document.getElementById("divRead").innerHTML = JSON.stringify(movie.title);
}

function onClickToUpdate() {
    debugger;
    movie.rating = "9.8";
    movie.villan = "Rana Daggubati";
    document.getElementById("divUpdate").innerHTML = JSON.stringify(movie);
}

function onClickToDelete() {
    debugger;
    delete movie.villan;
    document.getElementById("divDelete").innerHTML = JSON.stringify(movie)
}