/**
 * Created by jloin on 2019.
 */
function STATE(country)
{
    var list = document.getElementById("contentselect");
    list.innerHTML = "";
    var select = document.createElement('select');
    select.setAttribute("id", "idselect");//Creando un ID dentro del select element
    select.setAttribute("onchange", "weatherstate(this.value)");//onchange como onclick, parametro el valor seleccionado
    list.appendChild( select );
    localStorage.setItem("state", country);// // para acceder ello motrar el estado

    var br1 = document.createElement('br');
    list.appendChild( br1 );


    var inputText = document.createElement('input');
    inputText.setAttribute("id", "textzipcode");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("placeholder", "Add new ZipCode");
    inputText.setAttribute("onchange", "addzipcode(this.value)");
    inputText.setAttribute("overflow", "auto");
    list.appendChild( inputText );




    var x0 = document.createElement("OPTION");
    x0.setAttribute("value", "");
    var t0 = document.createTextNode("-Select One "+country+"-");
    x0.appendChild(t0);

    if(country == "Oregon")
    {
        var x1 = document.createElement("OPTION");
        x1.setAttribute("value", "97301");// esto seria como assignar un Id pero aqui es un value que el user no ve
        var t1 = document.createTextNode("97301");//esto es lo que veria el user
        x1.appendChild(t1);//x1 elemento creado y agregando el texto t1 que es el zip code

        var x2 = document.createElement("OPTION");
        x2.setAttribute("value", "97317");
        var t2 = document.createTextNode("97317");
        x2.appendChild(t2);
    }
    else
    if(country == "Whasington")
    {
        var x1 = document.createElement("OPTION");
        x1.setAttribute("value", "98501");
        var t1 = document.createTextNode("98501");
        x1.appendChild(t1);

        var x2 = document.createElement("OPTION");
        x2.setAttribute("value", "98599");
        var t2 = document.createTextNode("98599");
        x2.appendChild(t2);
    }
    else
    if(country == "California")
    {
        var x1 = document.createElement("OPTION");
        x1.setAttribute("value", "94203");
        var t1 = document.createTextNode("94203");
        x1.appendChild(t1);

        var x2 = document.createElement("OPTION");
        x2.setAttribute("value", "94286");
        var t2 = document.createTextNode("94286");
        x2.appendChild(t2);
    }
    else
    if(country == "Nevada")
    {
        var x1 = document.createElement("OPTION");
        x1.setAttribute("value", "89403");
        var t1 = document.createTextNode("89403");
        x1.appendChild(t1);

        var x2 = document.createElement("OPTION");
        x2.setAttribute("value", "89721");
        var t2 = document.createTextNode("89721");
        x2.appendChild(t2);
    }
    else
    if(country == "Idaho")
    {
        var x1 = document.createElement("OPTION");
        x1.setAttribute("value", "83701");
        var t1 = document.createTextNode("83701");
        x1.appendChild(t1);

        var x2 = document.createElement("OPTION");
        x2.setAttribute("value", "83799");
        var t2 = document.createTextNode("83799");
        x2.appendChild(t2);
    }
    else
    if(country == "Utah")
    {
        var x1 = document.createElement("OPTION");
        x1.setAttribute("value", "84117");
        var t1 = document.createTextNode("84117");
        x1.appendChild(t1);

        var x2 = document.createElement("OPTION");
        x2.setAttribute("value", "84780");
        var t2 = document.createTextNode("84780");
        x2.appendChild(t2);
    }
    else
    if(country == "Arizona")
    {
        var x1 = document.createElement("OPTION");
        x1.setAttribute("value", "85001");
        var t1 = document.createTextNode("85001");
        x1.appendChild(t1);

        var x2 = document.createElement("OPTION");
        x2.setAttribute("value", "85060");
        var t2 = document.createTextNode("85060");
        x2.appendChild(t2);
    }
    else
    if(country == "Montana")
    {
        var x1 = document.createElement("OPTION");
        x1.setAttribute("value", "59601");
        var t1 = document.createTextNode("59601");
        x1.appendChild(t1);

        var x2 = document.createElement("OPTION");
        x2.setAttribute("value", "59626");
        var t2 = document.createTextNode("59626");
        x2.appendChild(t2);
    }
    document.getElementById("idselect").appendChild(x0);
    document.getElementById("idselect").appendChild(x1);
    document.getElementById("idselect").appendChild(x2);
    document.getElementById("idselect").style.width="20%";
    document.getElementById("textzipcode").style.width="20%";
}
function addzipcode(zipcode)
{
    var x = document.createElement("OPTION");
    x.setAttribute("value", zipcode);
    var t = document.createTextNode(zipcode);
    x.appendChild(t);
    document.getElementById("idselect").appendChild(x); // mostrandolo

    var list = document.getElementById("contentselect");
    var div = document.createElement("div");
    var textdiv = document.createTextNode("Added new ZipCode to the options -> "+zipcode);
    div.appendChild(textdiv);
    list.appendChild(div);
    document.getElementById("textzipcode").value="";

}

function weatherstate(zip)
{
    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=cfbf2de05d8febc788f181466fb3a807";
    xmlhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {//from line 55
            theWeather(this.responseText,zip); // this is the answer of the url
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function theWeather(response,zip)
{
    var arr = JSON.parse(response); // from string to Json to be read one by one
    //main
    var temp = arr.main.temp;
    var humidity = arr.main.humidity;
    //wind
    var speed = arr.wind.speed;
    var deg = arr.wind.deg;
    //clouds
    var all = arr.clouds.all;
    //sys
    var country = arr.sys.country;

    var out = "<table class='table'>";  // to show the table Html
    out += "<tr><td>Temp</td><td>Humidity</td><td>Speed</td><td>Deg</td><td>Clouds</td><td>Country</td></tr>";
    out += "<tr><td>" +   // concatenar row (tr) with column (td)
    temp +
    "</td><td>" +
    humidity +
    "</td><td>" +
    speed +
    "</td><td>" +
    deg +
    "</td><td>" +
    all +
    "</td><td>" +
    country +
    "</td></tr>";
    out += "</table>";

    var state = localStorage.getItem('state');

    document.getElementById("infoweather").innerHTML = out+"State: "+state+" ZipCode: "+zip;
}
function getLocation() {
    var x = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    document.getElementById("latitude").value = position.coords.latitude;
    document.getElementById("longitude").value = position.coords.longitude;

    document.getElementById("latitudeLocation").value = position.coords.latitude;
    document.getElementById("longitudeLocation").value = position.coords.longitude;
    localStorage.setItem("latitude", position.coords.latitude);
    localStorage.setItem("longitude",position.coords.longitude);
}
function newPosition() {
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longitude").value;
    //alert(latitude+" / "+longitude);
    map = new google.maps.Map(document.getElementById('location'), {
        center: {lat: parseFloat(latitude), lng: parseFloat(longitude)},
        zoom: 8
    });
}

function newPositionButton() {
    var latitude = localStorage.getItem('latitude');
    var longitude = localStorage.getItem('longitude');
    document.getElementById("latitude").value= latitude;
    document.getElementById("longitude").value= longitude;
    //alert(latitude+" / "+longitude);
    map = new google.maps.Map(document.getElementById('location'), {
        center: {lat: parseFloat(latitude), lng: parseFloat(longitude)},
        zoom: 8
    });
}

function alarm()
{
    var c = confirm("Do you want to send this emergency to the police?");// confirmation true or false
    if(c)
    {
        var name=document.getElementById("name").value;
        var telephone=document.getElementById("telephone").value;
        var latitude=document.getElementById("latitudeLocation").value;
        var longitude=document.getElementById("longitudeLocation").value;
        var situation=document.getElementById("situationAlarm").value;

        if(name == "")
        {
            alert("Enter Name");
            out = "Enter Name";// to show on the screen
        }
        else
        if(telephone == "")
        {
            alert("Enter Telephone");
            out = "Enter Telephone";
        }
        else
        if(situation == "")
        {
            alert("Enter your Situation");
            out = "Enter your Situation";
        }
        else
        {
            var myInfo = '{"name":"'+name+'", "telephone":"'+telephone+'","latitude":"'+latitude+'", "longitude":"'+longitude+'", "situation":"'+situation+'"}';
            var obj = JSON.parse(myInfo);

            var out = "<table class='table'>";  // to show the table Html
            out += "<tr><td>Name</td><td>Telephone</td></tr>";
            out += "<tr><td>" +   // concatenar row (tr) with column (td)
            obj.name +
            "</td><td>" +
            obj.telephone +
            "</td></tr>" +
            "<tr><td>Latitude</td><td>Longitude</td></tr>";
            out += "<tr><td>" +
            obj.latitude +
            "</td><td>" +
            obj.longitude +
            "</td></tr>" +
            "<tr><td>situation</td></tr>";
            out += "<tr><td>" +
            obj.situation +
            "</td></tr>";
            out += "</table>";

        }

        document.getElementById("resultAlarm").innerHTML = out;

    }
    else
    {
        alert("Alarm Canceled");
    }
}
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
        video.currentTime=8;
    }
}
function funcionescanvas(opc)
{
    var canvas = document.getElementById("mycanvas");
    var theCanvas = canvas.getContext("2d");
    var image = new Image();
    image.src = "images/flags/"+opc+".png";
    theCanvas.drawImage(image, 0, 0);
    if(opc == "oregon"){ canvas.className = 'rotate'; }
    if(opc == "whasington"){ canvas.className = 'move'; }
    if(opc == "california"){ canvas.className = 'turn'; }
    if(opc == "nevada"){ canvas.className = 'transform'; }
    if(opc == "idaho"){ canvas.className = 'transform2'; }
    if(opc == "utah"){ canvas.className = 'infinita'; }
    if(opc == "arizona"){ canvas.className = 'hover'; }
    if(opc == "montana"){ canvas.className = 'flag1'; }
}
function SHOWVIDEO()
{
    var video = document.getElementById("myvideo");
    video.play();
    window.scrollBy(0, 4000);
}