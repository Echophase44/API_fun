fetch(`https://api.magicthegathering.io/v1/cards`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("img").src = data.cards[0].imageUrl;
    document.querySelector("h2").innerText = data.cards[0].name;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
