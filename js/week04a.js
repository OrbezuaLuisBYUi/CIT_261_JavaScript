/**
 * Created by jloin on 9/27/2019.
 */

function informationCarSales(){
    //*****creates an XMLHttpRequest object:
    var xhttp = new XMLHttpRequest();
    //onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes
    xhttp.onreadystatechange = function() {
        //readyState property is 4 and the status property is 200, the response is ready
        if (this.readyState == 4 && this.status == 200) {
            //responseText property returns the server response as a text string.
            //The text string can be used to update a web page
            document.getElementById("resultXMLHTTPrequest").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","https://orbezualuisbyui.github.io/CIT_261_JavaScript/text/infoCars.txt", true);
    xhttp.send();
}

function addCarsList(){
    //to obtain the value from user, document is from is call the function
    var brand=document.getElementById("brand").value; //obtain the value inside of this input
    var model=document.getElementById("model").value;
    var miles=document.getElementById("miles").value;
    var year=document.getElementById("year").value;
    var price=document.getElementById("price").value;
    if(brand==""|| model==""|| miles==""|| year==""||price=="") {
        alert("Please enter the info about your car, above, after finishing, click on the button again.")

    }
    else
    {
        // create in a object of data
        var myInfo = '{"brand":"' + brand + '", "model":"' + model + '","miles":"' + miles + '", "year":"' + year + '", "price":"' + price + '"}';
        var obj = JSON.parse(myInfo); //to format Json, object of data associative array
        //document.getElementById("resultJson").innerHTML = " My car is a: " + obj.brand + " " + obj.model + " Miles " +
        // + obj.model + " I am selling this car for  " + obj.price + " dollars "

        var list = document.getElementById("addCar");
        var newNode = document.createElement('div'); // create element the div and it is in the memory
        newNode.innerHTML = " My car is a: " + obj.brand + " " + obj.model + " Miles " + +obj.miles + " I am selling this car for  " + obj.price + " dollars ";
        list.appendChild(newNode); // list is reference to the id addCar
    }

}
function informationAPI(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    xmlhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {//from line 55
            myFunction(this.responseText); // this is the answer of the url
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function myFunction(response) {
    var arr = JSON.parse(response); // from string to Json to be read one by one
    var i; //for every position
    var out = "<table>";  // to show the table Html
    for(i = 0; i < 10; i++) {
        out += "<tr><td>" +   // concatenar row (tr) with column (td)
        arr[i].id +
        "</td><td>" +
        arr[i].title +
        "</td><td>" +
        arr[i].body +
        "</td></tr>";
    }
    out += "</table>";
    document.getElementById("resultXMLHTTPwithJSON").innerHTML = out;
}

// method to use the fetch to read the API
function showingPokemon(){
    var list = document.getElementById("showpokemon");  // id to shwo the info
    var newNode = document.createElement('div'); //create in memory the div

    for(var i = 70; i <= 80; i++)
    {
        const url = 'https://pokeapi.co/api/v2/pokemon/'+i;  //i represent from 70 to 80

        fetch(url)
            .then(response => response.json()) // if answer is in format Json
            .then(data => { //then read, data is the answer from line 86
        newNode.innerHTML += " ID: " + data.id + " NAME POKEMON: " + data.name+"<br>";

        var species = data.species;
        for (x in species) { // reading the info inside of species
            newNode.innerHTML += x + ": " + species[x]+"<br>";
        }
        var sprites = data.sprites;
        for (x in sprites) {
            newNode.innerHTML += x + ": " + sprites[x]+"<br>";
        }
        newNode.innerHTML += "<br><br>";
    }).catch(err=>console.log(err))
}
list.appendChild( newNode );//this newNode from line 79
}

