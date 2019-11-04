/**
 * Created by jloin on 10/29/2019.
 */


function funcionesvideo(opc) {
    var video = document.getElementById("myvideo");
    if(opc == "play")
    {
        video.play();
    }
    else
    if(opc == "pause")
    {
        video.pause();
    }
    else
    if(opc == "big")
    {
        video.width = 600;
    }
    else
    if(opc == "small")
    {
        video.width = 300;
    }
    else
    if(opc == "normal")
    {
        video.width = 400;
    }
    else
    if(opc == "getTime")
    {
        alert(video.currentTime);
    }
    else
    if(opc == "setTime")
    {
        video.currentTime=6;
    }
}
function funcionesaudio(opc)
{
    var audio = document.getElementById("myaudio");
    if (opc == "play") {
        audio.play();
    }
    else if (opc == "pause") {
        audio.pause();
    }
}
function funcionescanvas(opc)
{
    if(opc == "text")
    {
        var canvas = document.getElementById("mycanvas1");
        var ctx = canvas.getContext("2d");
        // Create gradient
        var grd = ctx.createLinearGradient(0,0,140,0);
        grd.addColorStop(0,"blue");
        grd.addColorStop(1,"pink");
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(10,10,225,80);//10 = X, 10 = Y, 180 = Width, 80 = Heigth

        ctx.font = "30px Verdana";
        ctx.strokeText("My text", 10, 50);//10 = x, 50 = y
    }
    else
    if(opc == "img")
    {
        var canvas = document.getElementById("mycanvas2");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("image");
        ctx.drawImage(img,0,0,100,100);
    }
}

