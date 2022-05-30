nose_x = 0;
nose_y = 0;
 rightWristx = 0;
 leftWristx = 0;
 difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose_x =" + nose_x +"nose_y =" +nose_y); 

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);

        console.log("leftWristx =" + leftWristx + "rightWristx=" + rightWristx + "difference =" + difference);
        
          
    }
}

function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of square will be =" + difference +"px";
   Fill('#F90093');
   square(nosex,nosey,difference);

}