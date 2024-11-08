// # Recupero elementi Html

// card per stampare output
const cardStamp = document.getElementById("card-output");

// layover elements
const layoverEl = document.getElementById("layover");
const layoverBtn = document.getElementById("layover-btn");

// # Svolgimento

// numero di card da generare
const cardToGen = 6;

/** funzione che attiva e disattiva il layover
 *
 */
const layoverHandler = () => {
  // raccogli le card
  const allCards = document.querySelectorAll(".card");

  // per ogni card al click della singola attiva il layover
  allCards.forEach((singleCard) => {
    singleCard.addEventListener("click", () => {
      layoverEl.classList.remove("d-none");
      imgCards.forEach((singleCard) => {
        singleCard.classList.add("d-none");
      });
    });
  });

  // disattiva il layover al click del bottone
  layoverBtn.addEventListener("click", () => {
    layoverEl.classList.add("d-none");
    allCards.forEach((singleCard) => {
      singleCard.classList.remove("d-none");
    });
  });
};

/** funzione che genera e stampa card con un'immaggine ed una descrizione
 *
 * @param {number} numCardToGen  numero di card da stampare
 */
const generateImageCards = (numCardToGen) => {
  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${numCardToGen}`)
    .then((res) => res.json())
    .then((imgsData) => {
      imgsData.forEach((img) => {
        cardStamp.innerHTML += `           
        <div class="col-12 col-md-6 cosl-xl-4">
        <div class="card">
            <img class="card-pin" src="./img/pin.svg" alt="pin" />
            <div class="card-body">
            <img src="${img.url}" alt="img" />
            <div class="pt-3 pb-1">${img.title}</div>
            </div>
            </div>
            </div>`;
      });

      layoverHandler();
    });
};

// # Output
generateImageCards(cardToGen);
