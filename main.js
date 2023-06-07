noseX=0;
noseY=0;



function preload()
{
filtro=loadImage('https://i.postimg.cc/JnRsN1dT/icons8-caballito-de-mar-94.png');
}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(400,400)
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    tint_color="rgb(0, 132, 194)";
}

function modelLoaded()
{
    console.log('PoseNet listo 😎');
}

function draw()
{
image(video, 0, 0, 400, 400);
tint(tint_color);
image(filtro, noseX, noseY, 60, 60);

}


function take_snapshot()
{
    save('tE_hAn_bANeAD0.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
    console.log(results);
    noseX=results[0].pose.nose.x-25;
    noseY=results[0].pose.nose.y-20;
    console.log("nose x="+noseX);
    console.log("nose y="+noseY);
    }
}