document.getElementById("btnSave").addEventListener("click", saveCard);
let cards = new Array();

function saveCard() {
  let frontContent = document.getElementById("frontCard").value;
  let backContent = document.getElementById("backCard").value;
  let card = { front: frontContent, back: backContent };
  cards.push(card);
  console.log(cards);
  clearUI();
  numCardsOut();
  storeCards();
}

//Card Storage
storeCards = () => {
  let serializedCards = JSON.stringify(cards);
  localforage
    .setItem("flashcards", serializedCards)
    .then(() => {
      return localforage.getItem("key");
    })
    .then((value) => {
      alert(`Saved!`);
    })
    .catch((err) => {
      console.log(`Error:` + err);
    });
};

function numCardsOut() {
  document.getElementById("numCardsOut").innerHTML = cards.length;
}

function clearUI() {
  document.getElementById("frontCard").value = "";
  document.getElementById("backCard").value = "";
}
