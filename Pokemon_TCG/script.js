//let drinkType = document.querySelector("input").value.trim();
//drinkType = drinkType.replace(" ", "_");

// const image = document.querySelector();

fetch(`https://api.pokemontcg.io/v2/cards/xy1-1`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("img").src = data.data.images.small;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
