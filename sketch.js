var fingers,i;
function setup() {
  createCanvas(710, 400);
  // specify multiple formats for different browsers
  fingers = createVideo(['earth.mp4', 'earth.webm']);
  // by default video shows up in separate dom element. hide it and draw it to the canvas instead
  fingers.hide();
  i=0;
  text("Welcome!! Click to start!!!", 250,200);
}

function draw() {   
  if(fingers){
    image(fingers, 0, 0,710, 400); // draw the video frame to canvas
  }  
  i++;
  if(i === 500){
    console.log("inside if, i: " + i);
    fingers=null;
    background(150);
    text("Note: Pending code logic should fall inside this if condition", 250,200);
  }
  
}

function mousePressed() {
  if(fingers){
    // set the video to loop and start playing
    fingers.loop(); 
  }
}
