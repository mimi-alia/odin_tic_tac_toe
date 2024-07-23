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