noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(1300, 800);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('Posenet is initialized!!');
}
function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+ noseX +"noseY ="+ noseY );
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX ="+ leftWristX + "rightWristX ="+ rightWristX +"difference ="+difference );
    }
}
function draw() {
    background('#7FD3EB');
    document.getElementById("square_side").innerHTML = "width and height of the square are " + difference + "px";
    fill('#A80000')
    stroke('#700000')
    square(noseX,noseY,difference);
}