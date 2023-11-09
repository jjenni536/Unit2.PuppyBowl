// create variables to store api link
const apiPlayersLink = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf`;

// create variable to link to div in html and test
const puppyCards = document.getElementById(`puppyPlayerCards`);
// console.log(puppyCard);

// test links
console.log();

// create variable to house array of players once retrieved from
// the fetch function below 
const state = {
    players: []
}
// retrieve all players and their info via fetch
const getAllPlayers = async () => {
        const data = await fetch(`${apiPlayersLink}/players`);
        const response =  await data.json();
        state.players = response.data.players;

// console.log(response.data.players);
// render players on the screen
    renderAllPlayers();
}

const renderAllPlayers = () => {
const pupNames = state.players.map((individualPup) => {
return `<li id="${individualPup.id}">${individualPup.name}</li>`;
});


const ol = document.createElement(`ol`);
puppyCards.append(ol)
ol.innerHTML = pupNames.join(``);

const nameList = document.querySelectorAll(`li`);
// console.log(nameList);

// create function to grab the puppy player details
const puppyDetails = async (Id) => {
    const response =  await fetch (`${apiPlayersLink}/players/${Id}`);
    const jsonResponse = await response.json()
    const pupDetails = await jsonResponse.data
    console.log(pupDetails);
}
// add event listeners for namesList, loop through name list first
nameList.forEach((puppyName) => {
puppyName.addEventListener(`click`,(event) => {
    puppyDetails(event.target.id)
    // console.log(`click working!`);


    // renderInformation();



}) 
});


}

getAllPlayers();
// make sure prior content in puppy card div gets cleared
//     puppyCard.innerHTML = ``;

// // create foreach loop to create cards for each player
//     state.players.forEach(player => {
//     const pupCard = document.createElement(`div`);
//     pupCard.innerHTML = `<h2>${player.name}</h2> <h3>${player.breed}</h3> <p>${player.status}</p>`

// }
