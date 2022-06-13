document.querySelector("button").addEventListener("click", getDrinks);

function getDrinks() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
