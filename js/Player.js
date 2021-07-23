class Player
{
    constructor()
    {
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    getCount()  //This function will read the playerCount value from the database (read)
    {
        var playerCountRef = db.ref('playerCount');
        playerCountRef.on("value", function(data){playerCount = data.val()});
    }

    updateCount(count) // This function will update the playerCount value in the database (write)
    {
        db.ref('/').update({playerCount: count}); // '/' refers to main database inside which playerCount is created
    }

    update() // This function will update name & distance of a player in the database
    {
        var playerIndex = "players/player" +this.index;  
        db.ref(playerIndex).set({name: this.name, distance: this.distance});
    }

    getPlayerInfo() //To capture data of all the players from the database into a variable allPlayers
    {
        var playerInfoRef = db.ref('players');
        playerInfoRef.on("value", function(data){allPlayers = data.val();});
        console.log(allPlayers);
    }
};














