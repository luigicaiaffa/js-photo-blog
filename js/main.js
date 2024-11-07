// # Recupero elementi Html

// card per stampare output
const cardStamp = document.getElementById("card-output");

// # Svolgimento

// numero di card da generare
const cardToGen = 6;

/** funzione che genera e stampa card con un'immaggine ed una descrizione
 *
 * @param {number} cardNum  numero di card da stampare
 */
const generateImageCards = (cardNumToGen) => {
  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${cardNumToGen}`)
    .then((res) => res.json())
    .then((imgsData) => {
      imgsData.forEach((img) => {
        cardStamp.innerHTML += `           
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <img src="${img.url}" alt="img" />
                  <div class="py-3">${img.title}</div>
                </div>
              </div>
            </div>`;
      });

      // debug
      console.log(imgsData);
    });
};

// # Output
generateImageCards(cardToGen);
