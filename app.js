document.getElementById("btnSave").addEventListener("click", saveCard);
let card = new Array();

function saveCard() {
  let frontContent = document.getElementById("frontCard").value;
  let backContent = document.getElementById("backCard").value;
  let mainCard = { front: frontContent, back: backContent };
  card.push(mainCard);
  clearUI();
  numCards();
  storeCards();
}

function storeCards() {
  let serializedCards = JSON.stringify(card);
  localforage
    .setItem("flashcards", serializedCards)
    .then(function () {
      return localforage.getItem("key");
    })
    .then(function (value) {
      alert("saved");
    })
    .catch(function (err) {
      console.log("error:" + err);
    });
}

numCards = () => {
  document.getElementById("numCards").innerHTML = card.length;
};

clearUI = () => {
  document.getElementById("frontCard").value = "";
  document.getElementById("backCard").value = "";
};
