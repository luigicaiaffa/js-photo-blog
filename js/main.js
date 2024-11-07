// # Fetch

// genero e recupero le immagini e i testi delle card
fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((el) => {
      console.log(el.url);
      console.log(el.title);
    });
  });
