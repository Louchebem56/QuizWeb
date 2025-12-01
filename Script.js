let time = localStorage.getItem("reallytime");
function createtime() {
    let time = localStorage.getItem("reallytime");
    return time;
};
class Question {
    constructor(phrase, reponse1, reponse2, reponse3, reponse4, bonnereponse) {
        this.phrase = phrase;
        this.reponse1 = reponse1;
        this.reponse2 = reponse2;
        this.reponse3 = reponse3;
        this.reponse4 = reponse4;

        this.bonnereponse = bonnereponse;
    }
}
let score = 0;
const fquestion = [
    new Question(phrase = "Quel est la capitale de la France ?", reponse1 = "Paris", reponse2 = "Berlin", reponse3 = "Lisbone", reponse4 = "Rome", bonnereponse = 1)
    , new Question(phrase = "Qui a été l'empereur Romain le plus connue ?", reponse1 = "Musolini", reponse2 = "Jules César", reponse3 = "Auguste", reponse4 = "Napoléon", bonnereponse = 2)]

let reponsechoosen = 0;
let totalquestion = 1;
function randomquestion() {
    let randomize = Math.floor(Math.random() * fquestion.length);
    return randomize;
}
const widthquestion = localStorage.getItem("numberquestion");
function posquestionbutton(fquestion, [questionchoice]) {
    document.getElementById("boutton1").value = fquestion[questionchoice].reponse1;
    document.getElementById("boutton2").value = fquestion[questionchoice].reponse2;
    document.getElementById("boutton3").value = fquestion[questionchoice].reponse3;
    document.getElementById("boutton4").value = fquestion[questionchoice].reponse4;
    document.getElementById("Question1").innerHTML = fquestion[questionchoice].phrase;


}


document.addEventListener("DOMContentLoaded", function () {

    console.log(time);
    let questionchoice = randomquestion();
    posquestionbutton(fquestion, [questionchoice]);





    const timeactually = setInterval(() => {
        time--;
        document.getElementById("Timer").innerHTML = time;
        document.getElementById("score").innerHTML = "score :" + score;
        document.getElementById("totalquestion").innerHTML = totalquestion + "/" + widthquestion;

        if (reponsechoosen >= 1) {
            if (fquestion[questionchoice].bonnereponse == reponsechoosen) {
                score++;
                reponsechoosen = 0;
                alert("Bonne réponse !");

            } else {
                alert("Mauvaise réponse");
                reponsechoosen = 0;
                time = 20;
            }

            time = createtime();

            questionchoice = randomquestion();

            posquestionbutton(fquestion, [questionchoice]);

            totalquestion++;
        }

        if (totalquestion == widthquestion) {
            window.location.href = "Page d'acceuil.html";
        }
        if (time == 0) {

            time = createtime();
            questionchoice = randomquestion();

            posquestionbutton(fquestion, [questionchoice]);

            totalquestion++;


        }
    }, 1000);
});

document.getElementById("boutton1").addEventListener("click", function () {
    reponsechoosen = 1;


});

document.getElementById("boutton2").addEventListener("click", function () {
    reponsechoosen = 2;


});

document.getElementById("boutton3").addEventListener("click", function () {
    reponsechoosen = 3;


});

document.getElementById("boutton4").addEventListener("click", function () {
    reponsechoosen = 4;


});




