// # Recupero elementi
// card per stampare output
const cardStamp = document.getElementById("card-output");

// overlay elements
const overlayEl = document.getElementById("overlay");
const overlayBtn = document.getElementById("overlay-btn");
const overlayImg = document.getElementById("overlay-img");

// numero di card da generare
const cardToGen = 6;

// # Svolgimento
/** funzione che attiva e disattiva l'overlay
 */
const overlayHandler = () => {
  // raccolgo le card
  const allCards = document.querySelectorAll(".card");

  // per ogni card
  allCards.forEach((singleCard) => {
    // raccogli il nodo <img>
    const imagesEl = singleCard.children[1].firstElementChild;

    // ! switch on
    // al click della singola card
    singleCard.addEventListener("click", () => {
      // rimuovi d-none all'overlay
      overlayEl.classList.remove("d-none");

      // per ogni card
      allCards.forEach((singleCard) => {
        // aggiungi d-none
        singleCard.classList.add("d-none");
      });

      // stampa l'img nell'overlay
      overlayImg.innerHTML = `<img src="${imagesEl.src}" alt="img" />`;
    });

    // ! switch off
    // al click del bottone
    overlayBtn.addEventListener("click", () => {
      // aggiungi d-none all'overlay
      overlayEl.classList.add("d-none");

      // per ogni card
      allCards.forEach((singleCard) => {
        // rimuovi il d-none
        singleCard.classList.remove("d-none");
      });
    });
  });
};

/** funzione che genera e stampa card con un'immagine ed una descrizione
 * @param {number} numCardToGen  numero di card da stampare
 */
const stampGeneratedImageCards = (numCardToGen, stampEl) => {
  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${numCardToGen}`)
    .then((res) => res.json())
    .then((images) => {
      // per ogni immagine generata
      images.forEach((img) => {
        // stampa le singole card
        stampEl.innerHTML += `           
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card">
              <img class="card-pin" src="./img/pin.svg" alt="pin" />
              <div class="card-body">
                <img src="${img.url}" alt="img" />
                <div class="pt-3 pb-1">${img.title}</div>
              </div>
            </div>
          </div>`;
      });

      // overlay
      overlayHandler();
    });
};

// # Output
stampGeneratedImageCards(cardToGen, cardStamp);
