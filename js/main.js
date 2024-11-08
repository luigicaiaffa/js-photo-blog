// # Recupero elementi
// card per stampare output
const cardStamp = document.getElementById("card-output");

// layover elements
const layoverEl = document.getElementById("layover");
const layoverBtn = document.getElementById("layover-btn");
const layoverImg = document.getElementById("layover-img");

// numero di card da generare
const cardToGen = 6;

// # Svolgimento
/** funzione che attiva e disattiva il layover
 *
 */
const layoverHandler = () => {
  // raccolgo le card
  const allCards = document.querySelectorAll(".card");

  // per ogni card
  allCards.forEach((singleCard) => {
    // raccogli il nodo <img>
    const imagesEl = singleCard.children[1].firstElementChild;

    // ! switch on
    // al click della singola card
    singleCard.addEventListener("click", () => {
      // rimuovi d-none al layover
      layoverEl.classList.remove("d-none");

      // per ogni card
      allCards.forEach((singleCard) => {
        // aggiungi d-none
        singleCard.classList.add("d-none");
      });

      // stampa l'img nel layover
      layoverImg.innerHTML = `<img src="${imagesEl.src}" alt="img" />`;
    });

    // ! switch off
    // al click del bottone
    layoverBtn.addEventListener("click", () => {
      // aggiungi d-none al layover
      layoverEl.classList.add("d-none");

      // per ogni card
      allCards.forEach((singleCard) => {
        // rimuovi il d-none
        singleCard.classList.remove("d-none");
      });
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
      // per ogni immagine generata
      imgsData.forEach((img) => {
        // stampa le card
        cardStamp.innerHTML += `           
          <div class="col-12 col-md-6 cosl-lg-4">
            <div class="card">
              <img class="card-pin" src="./img/pin.svg" alt="pin" />
              <div class="card-body">
                <img src="${img.url}" alt="img" />
                <div class="pt-3 pb-1">${img.title}</div>
              </div>
            </div>
          </div>`;
      });

      // layover on/off
      layoverHandler();
    });
};

// # Output
generateImageCards(cardToGen);
