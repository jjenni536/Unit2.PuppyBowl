// create variables to store api link
const apiPlayersLink = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`;

// create variable to link to div in html and test
const puppyCard = document.getElementById(`puppyPlayerCard`);
console.log(puppyCard);

// test links
console.log();

// create variable to house array of players once retrieved from
// the fetch function below 
const state = {
    players: []
}
// retrieve all players and info via fetch
const getAllPlayers = async () => {
        const data = await fetch(apiPlayersLink);
        const response =  await data.json();
        state.players = response.data;

// render players on the screen
    renderAllPlayers();
}

const renderAllPlayers = () => {
state.players.map((individualPuppy) => {
console.log(individualPuppy);
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
