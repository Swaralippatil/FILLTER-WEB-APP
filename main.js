nx=0;
ny=0;
function preload() {
   m=loadImage("https://i.postimg.cc/bryYR5nb/d3c172a4cb66495cdf11d66d8e0388c9.jpg");
}
function setup()  {
   canvas=createCanvas(300, 300);
   canvas.center();
   video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}
function modelLoaded() {
   console.log("Pose net is initialized");
 }
 function gotposes(results) {
   if(results.length>0) {
      console.log(results);
      nx=results[0].pose.nose.x-15;
      ny=results[0].pose.nose.y-5;
      console.log("nose X = "+nx);
      console.log("nose y = "+ny);
   }
}
function draw() {
   image(video, 0, 0, 300, 300);
   image(m, nx, ny, 30, 30);
}
function tss() {
   save("filter.png");
}