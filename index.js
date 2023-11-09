// create variables to store api links
const apiBaseLink = `https://fsa-puppy-bowl.herokuapp.com/api/`;
const apiPlayersLink = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`;

// test links
// console.log(apiPlayersLink)

// create variable to house array of players once retrieved from
// the fetch function below
const state = {
    players: []
}
