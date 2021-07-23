var db;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers; //undefined
//var backgroundImage;

function setup()
{
    createCanvas(500,500);

    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}
    
    
                                                        
function draw()
{
    if(playerCount === 4)
    {
        game.updateState(1);
    }
    if(gameState === 1)
    {
        clear();
        game.play();
    }
}

