var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

var divisionScore = [];

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     
     //assign random scores to divisions
     if( k < 300 ){
      var randScore = Math.round(random(1,11)) * 50;
      divisionScore.push(randScore);
     }
     else if( k > 301  && k < 600){
      var randScore = Math.round(random(1,11)) * 50;
      divisionScore.push(randScore);
     }

     else if( k >601 && k < 900 ){
      var randScore = Math.round(random(1,11)) * 50;
      divisionScore.push(randScore);
     }

   }

    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
  fill("white");
  textSize(35)
  
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  //display random scores
  text( divisionScore[0], 15,550);
  text( divisionScore[0], 90,550);
  text( divisionScore[0], 170,550);
  text( divisionScore[1], 250,550);
  text( divisionScore[1], 330,550);
  text( divisionScore[1], 410,550);
  text( divisionScore[2], 490,550);
  text( divisionScore[2], 570,550);
  text( divisionScore[2], 650,550);
  text( divisionScore[2], 730,550);
  
  /*
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);*/
  


  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null)
    {
       ball.display();
        
        if (ball.body.position.y>760)
        {
              if (ball.body.position.x < 300) 
              {
                  //score=score+500;
                  score = score + divisionScore[0];
                  ball=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
              {
                    //score = score + 100;                    
                    score = score + divisionScore[1];
                    ball=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
              {
                    //score = score + 200;
                    score = score + divisionScore[2];
                    ball=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     ball=new Ball(mouseX, 10, 10, 10); 
  }   
} 