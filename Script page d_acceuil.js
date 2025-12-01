var p1 = false;

document.getElementById("Pseudoselected").addEventListener("change", function () {
    var gdt = document.getElementById("Pseudoselected").value;
    var Pseudoactually = gdt.length;
    console.log(Pseudoactually);
    if (Pseudoactually < 1) {
        alert("Veuillez entrer au moin 1 charactère");
        p1 = false;
    } else {
        p1 = true;
    }

});

document.getElementById("Playbutton").addEventListener("click", function () {
    if (p1 == true) {
        window.location.href = "Compteur.html";

    }

});

document.getElementById("numberofquestion").addEventListener("change", function () {
    let numberquestion = document.getElementById("numberofquestion").value;
    localStorage.setItem("numberquestion", numberquestion);
});

document.getElementById("timer").addEventListener("change", function () {
    let reallytime = document.getElementById("timer").value;
    localStorage.setItem("reallytime", reallytime);
});
