// create variables to store api link
const apiPlayersLink = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf`;

// create variable to link to div in html and test
const puppyCards = document.getElementById(`puppyPlayerCards`);
const puppyDetailsDiv = document.getElementById('puppyDetails');

// create variable to house array of players once retrieved from
// the fetch function below 
const state = {
    players: []
};
// retrieve all players and their info via fetch
const getAllPlayers = async () => {
    try {
        const data = await fetch(`${apiPlayersLink}/players`);
        const response =  await data.json();
        state.players = response.data.players;

// render players on the screen
    renderAllPlayers();
}
catch (error) {
    console.log('error fetching!', error);
}
};

const renderAllPlayers = () => {
const pupNames = state.players.map((individualPup) => {
return `<li id="${individualPup.id}">${individualPup.name}
<button class="details-button" data-id="${individualPup.id}">Details</button></li>`;
});

const ol = document.createElement(`ol`);
puppyCards.innerHTML = '';
puppyCards.append(ol);
ol.innerHTML = pupNames.join('');

const nameList = document.querySelectorAll(`li`);

// add event listeners for namesList, loop through name list first
nameList.forEach((puppyName) => {
puppyName.addEventListener(`click`,(event) => {
    puppyDetails(event.target.id);
});
});
};
// create function to grab the puppy player details
const puppyDetails = async (Id) => {
    try { 
    const response =  await fetch (`${apiPlayersLink}/players/${Id}`);
    const jsonResponse = await response.json()
    const pupDetails = await jsonResponse.data
    console.log(pupDetails);
}
   catch (error) {
    console.error('error!', error);
   }
};

getAllPlayers();
