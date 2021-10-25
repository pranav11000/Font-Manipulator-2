function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 400);
    canvas.position(560,135);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log('Model Loaded!')
}
function gotPoses()
{

}