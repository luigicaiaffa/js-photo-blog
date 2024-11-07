// # Recupero elementi Html

// card per stampare output
const cardStamp = document.getElementById("card-output");
// const cardStamp2 = document.getElementById("card-output-2");
// const cardStamp3 = document.getElementById("card-output-3");
// const cardStamp4 = document.getElementById("card-output-4");
// const cardStamp5 = document.getElementById("card-output-5");
// const cardStamp6 = document.getElementById("card-output-6");

// card container
const allCards = document.querySelectorAll(".card");

// # Funzioni

const generateImageCards = (cardNum) => {
  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${cardNum}`)
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

// # Svolgimento
const cardGenNum = 6;

// # Output
generateImageCards(cardGenNum);
