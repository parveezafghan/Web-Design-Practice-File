class Game{

    constructor(Enemy_healt,player_healt){

        this.Enemy_healt=Enemy_healt;
        this.player_healt=player_healt;
    }

    Game_Enemy(){

        if(this.Enemy_healt>=100){

            console.log("Enemy Eliminited");
        }
        else 
         console.log("Enemy healt="+this.Enemy_healt)
    }

    Game_playe_Demage(){

        if(this.player_healt==100){

            console.log("player number one is Eliminited");
        }


    }

    Game_player_healt(){

        if(this.player_healt==100){

            console.log("player number one is Eliminited");
        }
        else 
         console.log("Player health:"+this.player_healt);
    }
}



let Game_class_Activition=new Game(100,50);
Game_class_Activition.Enemy_healt();
Game_class_Activition.Game_playe_Demage();
Game_class_Activition.player_healt();