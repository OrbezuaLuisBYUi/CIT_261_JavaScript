/**
 * Created by jloin on 10/18/2019.
 */

//ONCHANGE
function myFunction() {
    var x = document.getElementById("myDIV");

    var c1 = document.getElementById("color1").value;
    var c2 = document.getElementById("color2").value;
    var c3 = document.getElementById("color3").value;

    x.style.WebkitAnimation = "mymove 4s 2"; // Code for different browsers
    x.style.animation = "mymove 4s 2";     // Standard syntax
    localStorage.setItem("colo1", c1);
    localStorage.setItem("colo2", c2);
    localStorage.setItem("colo3", c3);

    // Code for different brwosers
    x.addEventListener("webkitAnimationStart", myStartFunction);
    x.addEventListener("webkitAnimationIteration", myRepeatFunction);
    x.addEventListener("webkitAnimationEnd", myEndFunction);

    // Standard syntax
    x.addEventListener("animationstart", myStartFunction);
    x.addEventListener("animationiteration", myRepeatFunction);
    x.addEventListener("animationend", myEndFunction);
}

function myStartFunction() {
    this.innerHTML = "animationstart event occured - The animation is happening";
    this.style.backgroundColor = localStorage.getItem('colo1');
}

function myRepeatFunction() {
    this.innerHTML = "animationiteration event occured - The animation is acting again";
    this.style.backgroundColor = localStorage.getItem('colo2');
}

function myEndFunction() {
    this.innerHTML = "animationend event occured - The animation has completed";
    this.style.backgroundColor = localStorage.getItem('colo3');
    this.style.removeProperty("animation");
}

//ONCLICK
function ONCLICKFUNCTION()
{
    var divonclick = document.getElementById('divonclick');
    divonclick.className = 'divonclick';
}

//ONLOAD
function ONLOADFUNCTION()
{
    var divonload = document.getElementById('divonload');
    var x = document.createElement("IMG");
    x.setAttribute("src", "images/hand.png");
    x.setAttribute("width", "150");
    x.setAttribute("height", "180");
    x.setAttribute("alt", "The hand picture");
    divonload.appendChild(x);
    alert("Image upoload correclty, to show the Onload function at the beginning");
}

function touchstart() {
    document.getElementById("divmessage").innerHTML = "Mesagge: Working with touchstart function";
}

function MYFOCUS(id)
{
    id.style.background = "blue";
    id.style.color = "white";
}

function myFocusOut(id)
{
    id.style.background = "white";
    id.style.color = "black";
}
function MYONKEYUP(val)
{
    document.getElementById('divcaracteres').innerHTML = "The amount of characters is(using OnkeyUp): "+val.length;
}