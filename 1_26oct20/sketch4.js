var montexte = "Le gouvernement progresse dans le chantier destiné à rendre accessibles en ligne 250 démarches administratives du quotidien. "

function setup() {
    createCanvas(windowWidth, windowHeight)
}
  
function draw() {
    background(255, 255, 255)
    textFont("Format_1452");
    textSize(200)
    fill(255, 0, 0)

    textAlign(CENTER);

    text(montexte, width/2, height/2); 
}
  