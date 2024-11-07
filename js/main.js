// # Recupero elementi Html

// card per stampare output
const cardStamp1 = document.getElementById("card-output-1");
const cardStamp2 = document.getElementById("card-output-2");
const cardStamp3 = document.getElementById("card-output-3");
const cardStamp4 = document.getElementById("card-output-4");
const cardStamp5 = document.getElementById("card-output-5");
const cardStamp6 = document.getElementById("card-output-6");

// card container
const allCards = document.querySelectorAll(".card");

// # Funzioni

// genero e recupero le immagini e i testi delle card
fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      imgUrl.push(element.url);
      imgTitle.push(element.title);
    });
    console.log(imgUrl);
    console.log(imgTitle);
  });

// # Svolgimento

let imgUrl = [];
let imgTitle = [];
