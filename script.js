const Gameboard = (function(){
    const gameboard = [];

    for (let i = 0; i < 9; i++) {
        gameboard.push(i);
    }


    const getGameboard = () => {
        return gameboard;
    }

    return {
        getGameboard
    }
})();

const Player = (function(player){
    let players = [];
    player = player;
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
    
    const getPlayer = () => {
        //return an unpacked arr of the original players arr to protect privacy
        return [...players]
    }
    return {addPlayer, getPlayer};
})()