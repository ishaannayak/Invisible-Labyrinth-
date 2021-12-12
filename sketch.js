var caveImg, desertImg, seaImg
var cave, desert, ocean
var hunterAnimation
var player
var caveWallsGroup, desertWallGroup, seaWallGroup, fireGroup
var diamondImg
var gameState = 1
var fireImg
var desertFlag = false
var oceanFlag = false
var fireSound
var introImg
var congrats
// var currX = 0; 
// var currY = 0;
// var currZ = -10;
function preload(){
caveImg = loadImage("Images/CAVEIMAGE.jpg")
desertImg = loadImage("Images/desertimage.jpg")
seaImg = loadImage("Images/seaimage.jpg")
hunterAnimation = loadAnimation("Images/h1.png","Images/h2.png","Images/h3.png")
diamondImg = loadImage("Images/diamond.png")
fireImg = loadImage("Images/fire.png")
fireSound = loadSound("fireSound.wav")
introImg = loadImage("Images/Intro.png")
congrats = loadImage("Images/congrats.png")
}
function setup(){
    createCanvas(1920,920)
    cave = new Cave()
    desert = new Desert()
    ocean = new Ocean()
    player = new Player()
    player.display()
    caveWallsGroup = new Group()
    desertWallGroup = new Group()
    seaWallGroup = new Group()
    fireGroup = new Group()
//    currCamera = createCamera(); 
//    currCamera.move(950, 450, 0)
    
}
function draw(){
    if(gameState ===0){
        background(introImg)
        if(keyDown( "space")){
            gameState = 1
        }
    }
    else if(gameState ===1){
        background(caveImg)
        cave.display()
   
        drawSprites()
        player.handlePlayer()

        player.player.bounceOff(caveWallsGroup)
        if(player.player.isTouching(cave.diamond)){
        gameState = 2
        console.log("hello")
        cave.diamond.destroy()
        }
        
    }
    else if(gameState ===2){
        background(desertImg)
        desert.display()
        
        drawSprites()
        caveWallsGroup.destroyEach()
        cave.diamond.visible = false 
        if(!desertFlag){
            player.player.x = 70
            player.player.y = 530  
            desertFlag = true
            
        }
        player.player.bounceOff(desertWallGroup)
        if(player.player.isTouching(desert.diamond)){
            gameState = 3
            console.log("hello")
            }

        player.handlePlayer()

    }
    else if(gameState ===3){
        background(seaImg)
        ocean.display()
        drawSprites()
        
        desertWallGroup.destroyEach()
        if(!oceanFlag){
            player.player.x = 20
            player.player.y = 500  
            oceanFlag = true
            
        }
        
        if(player.player.isTouching(ocean.diamond)){
            gameState = 4
            console.log("hello")
            }
            player.handlePlayer()

            if(player.player.isTouching(seaWallGroup)){
                player.player.x = 20
                player.player.y = 500  
            }
            if(player.player.isTouching(fireGroup)){
                fireSound.play()
                player.player.x = 20
                player.player.y = 500  
            }
    }
    else{
background(congrats)

    }
//     currCamera.move(currX, currY, currZ)
//    currX -=0.1; 
//     currY -=0.1; 
//     currZ -=.01;
    camera.position.x = player.player.x+800; camera.position.y = player.player.y;

}
