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
// retrieve all players and info via fetch
const getAllPlayers = async () => {
    try {
        const data = await fetch(apiPlayersLink)
        const response =  await data.json()
        state.players = response.data
        console.log(state)

        // render onto page
    } catch(error) {
        console.log(`There's been an error!`)
    }
}
getAllPlayers();