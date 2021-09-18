//You can edit ALL of the code here

const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  let searchEpisodesBox = document.querySelector("#searchEpisodes");
  searchEpisodesBox.addEventListener("keyup", searchEpisodes);
}

function searchEpisodes(){
  let searchEpisodesBox = document.querySelector("#searchEpisodes");
  console.log(searchEpisodesBox.value);

  const allEpisodes = getAllEpisodes();
  let filteredEpisodes = allEpisodes.filter(filterEpisodes);
  makePageForEpisodes(filteredEpisodes);
}

function filterEpisodes(episode){
  let searchEpisodesBox = document.querySelector("#searchEpisodes");
  console.log(searchEpisodesBox.value);

  rootElem.innerHTML = "";

  if(episode.name.toLowerCase().includes(searchEpisodesBox.value.toLowerCase()) || episode.summary.toLowerCase().includes(searchEpisodesBox.value.toLowerCase())){
    return true;
  }else {
    return false;
  }
}











function makePageForEpisodes(episodeList) {
  
  let numberOfEpisodes = document.getElementById("number-of-episodes");

  /*---Decides whether to show the word "episode" in the singular or plural
based on the amount of results---*/

  let episodeAmount = "";
  if(episodeList.length == 1){
    episodeAmount = "episode"
  }else if(episodeList.length != 1){
    episodeAmount = "episodes"
  }

/*------------------------------------*/
  numberOfEpisodes.textContent = "Displaying" + " " + episodeList.length + " " + episodeAmount;

  episodeList.forEach(createCard);
}

function createCard(episode){
  let cardSpan = document.createElement("span");
  cardSpan.id = "card-container";
  let cardTitle = document.createElement("h2");
  cardTitle.innerText = episode.name;
  cardSpan.appendChild(cardTitle);

/*--------------------------------------------------------------*/
/*adds a 0 before the number if it is a single digit number*/
  let seasonPadding = "";
  if(episode.season < 10){
    seasonPadding = "0";
  }else {
    seasonPadding = "0";
  }

  let episodePadding = "";
  if(episode.number < 10){
    episodePadding = "0";
  }else {
    episodePadding = "";
  }

  let seasonNumber = "S" + seasonPadding;
  let episodeNumber = "E" + episodePadding;
/*--------------------------------------------------------------*/

  let cardNumber = document.createElement("p");
  cardNumber.innerText = seasonNumber + episode.season + episodeNumber + episode.number;
  cardSpan.appendChild(cardNumber);

  let cardImage = document.createElement("img");
  cardImage.src = episode.image.medium;
  cardImage.alt = episode.name;
  cardImage.title = episode.name;
  cardImage.className = "imgCenter";
  cardSpan.appendChild(cardImage);

  let cardEpisodeSummary = document.createElement("span");
  cardEpisodeSummary.innerHTML = episode.summary;
  cardSpan.appendChild(cardEpisodeSummary);

  cardSpan.className = "episodeCard";
  rootElem.appendChild(cardSpan);
  
}

window.onload = setup;
