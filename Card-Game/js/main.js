document.querySelector("#newDeck").addEventListener("click", getDeck);
document.querySelector("#playRound").addEventListener("click", playMatch);

if (!localStorage.getItem("currentDeckId")) {
  localStorage.setItem("currentDeckId", "");
}

function getDeck() {
  localStorage.clear;
  const url = "https://deckofcardsapi.com/api/deck/new/";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("currentDeckId", data.deck_id);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function playMatch() {
  currentDeckId = localStorage.getItem("currentDeckId");
  fetch(`https://deckofcardsapi.com/api/deck/${currentDeckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#player1").src = data.cards[0].image;
      document.querySelector("#player2").src = data.cards[1].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
