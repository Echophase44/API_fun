document.querySelector("button").addEventListener("click", getDrinks);

function getDrinks() {
  let drinkType = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkType}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
