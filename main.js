nosex=0;
nosey=0;

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size=(300,300);
    video.hide();
        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotPoses);


    

}

function modelLoaded()
{
    console.log('pose net is initialized');
;
}


function draw()
{
    image(video,0,0,300,300); 
    image(clown_nose,nosex,nosey,30,30);
   fill(255,0,0);
   circle(nosex,nosey,20);
   stroke(255,0,0)

}


function take_snapshot()
{
    save('myFilterImage.png');
}

function preload() 
{
    clown_nose=loadImage('https://i.postimg.cc/zDcjL8pf/clown-nose.jpg');

 }



 function gotPoses(results)
 {
     if(results.length<0)
     {
         console.log(results);
         nosex=results0.pose.nose.x;
         nosey=results0.pose.nose.y;
         console.log("nose x="+results[0].pose.nose.x);
         console.log("nose y="+results[0].pose.nose.y);
         
         
     }

 }




 



