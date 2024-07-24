
//Gameboard
const Gameboard = (function(){
    const gameboard = [];

    for (let i = 0; i < 9; i++) {
        gameboard.push(i);
    }


    const getGameboard = () => {
        return gameboard
    }

    const setGameboard = (index, player) => {
        return gameboard[index] = player;
    }

    return {
        getGameboard, setGameboard
    }
})();


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
        return playerIcons
    }

    const assignIcon = () => {
        let index = Math.round(Math.random()*1) 
        if (players.length === 0){
            alert("Error! Must add a player!")
        }
        else if (players.length === 1){
            return player1 = playerIcons[index];
        } else if (players.length === 2) {
            //retrieve the value from playerIcons that is not assigned to player1
            //Remove player1 icon from playerIcons list and assign remaining icon to player2
            playerIcons = playerIcons.filter(x => x != player1);
            return player2 = playerIcons[0]
        }
    }

    return {addPlayer, getPlayer, assignIcon, getPlayerIcons};
})()

//Game Mechanics
const Game = (function(){
    let playerIcons = Player.getPlayerIcons();
    let playerTurn;


    const takeTurn = () => {
        if(!playerTurn) {
            playerTurn = playerIcons[0];
        } else if (playerTurn === playerIcons[0]) {
            playerTurn = playerIcons[1];
        } else {
            playerTurn = playerIcons[0];
        }
    }

    const setPiece = (index) => {
        Gameboard.setGameboard(index, playerTurn)

    }

    const assessWin = () => {

    }

    const showPlayerTurn = () => {
        return playerTurn;
    }

    return {takeTurn, setPiece, assessWin, showPlayerTurn}
})()

const Domboard = (function(){

})()