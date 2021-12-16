class Player{
constructor(){
    this.player = null
    
}
display(){
this.player = createSprite(40,550,80,80)
this.player.scale = 0.4
 this.player.addAnimation("playerWalking",hunterAnimation)

}
handlePlayer(){
    if(keyWentDown(RIGHT_ARROW)){
        this.player.x =     this.player.x+30

    }

    if(keyWentDown(LEFT_ARROW)){
        this.player.x =     this.player.x-20

    }

    if(keyWentDown(DOWN_ARROW)){
        this.player.y =     this.player.y+20

    }

    if(keyWentDown(UP_ARROW)){
        this.player.y =     this.player.y-20

    }


    if(keyDown(RIGHT_ARROW)){
        this.player.x =     this.player.x+20

    }

    if(keyDown(LEFT_ARROW)){
        this.player.x =     this.player.x-20

    }

    if(keyDown(DOWN_ARROW)){
        this.player.y =     this.player.y+20

    }

    if(keyDown(UP_ARROW)){
        this.player.y =     this.player.y-20

    }
}
}



