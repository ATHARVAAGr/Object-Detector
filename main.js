img="";
status="";

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status -detecting objects";  
}

function preload()
{
    img=loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 600, 500);
    fill("yellow");
    text("dog", 45, 75);
    noFill();
    stroke("orange");
    rect(30, 60, 450, 350);

    fill("lime");
    text("cat", 270, 120);
    noFill();
    stroke("green");
    rect(250, 90, 270, 320);
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}