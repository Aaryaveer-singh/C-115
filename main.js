function preload(){}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet_model=ml5.poseNet(video,model_loaded);
    posenet_model.on("pose",get_poses);
}

function draw(){
    image(video,0,0,300,300);
}
function model_loaded(){
    console.log("poseNet is initialised");
}

function get_poses(results){
    if(results.length>0){
        //console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x:"+nose_x);
        console.log("nose y:"+nose_y);
    }
}