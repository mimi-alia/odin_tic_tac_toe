
//Gameboard
const Gameboard = (function(){
    const gameboard = [];

    for (let i = 0; i < 9; i++) {
        gameboard.push(i);
    }


    const getGameboard = (playerChoice) => {
        return gameboard;
    }

    return {
        getGameboard, 
    }
})();

//Game Mechanics
const Game = (function(){
    const setPiece = () => {
        let playerChoice = 
        Gameboard.getGameboard();

    }

    const assessWin = () => {

    }

    return {setPiece, assessWin}
})()

//Player Assignment
const Player = (function(player){
    let players = [];
    let playerIcons = ["x", "o"];
    let player1, player2;

    //add players to player array, limit to two players
    const addPlayer = function(player){

        if(players.length > 1) {
            console.log("ERROR! Only 2 players per game!");
        } else if (players.length === 0) {
            players.push(player)
        } else if (players.length <=2){
            if(players[0] !== player[1]) {
                players.push(player);
            }
        }
    }
    
    //display character array
    const getPlayer = () => {
        //return an unpacked arr of the original players arr to protect privacy
        return [...players]
    }

    const getPlayerIcons = () => {
        return [player1, player2]
    }

    const assignIcon = () => {
        let index = Math.round(Math.random()*1) 
        if (players.length === 0){
            alert("Error! Must add a player!")
        }
        else if (players.length === 1){
            return player1 = playerIcons[index]
        } else {
            //retrieve the value from playerIcons that is not assigned to player1
            //Remove player1 icon from playerIcons list and assign remaining icon to player2
            playerIcons.pop(player1)
            return player2 = playerIcons[0]
        }
    }

    return {addPlayer, getPlayer, assignIcon, getPlayerIcons};
})()

const Domboard = (function(){

})()