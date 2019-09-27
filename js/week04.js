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
    xhttp.open("GET", "https://orbezualuisbyui.github.io/CIT_261_JavaScript/text/infoCars.txt", true);
    xhttp.send();
}

function addCarsList(){
    //to obtain the value from user, document is from is call the function
    var brand=document.getElementById("brand").value;
    var model=document.getElementById("model").value;
    var miles=document.getElementById("miles").value;
    var year=document.getElementById("year").value;
    var price=document.getElementById("price").value;

    var myInfo = '{"brand":"'+brand+'", "model":"'+model+'","miles":"'+miles+'", "year":"'+year+'", "price":"'+price+'"}';
    var obj = JSON.parse(myInfo) ;
   //document.getElementById("resultJson").innerHTML = " My car is a: " + obj.brand + " " + obj.model + " Miles " +
   // + obj.model + " I am selling this car for  " + obj.price + " dollars "

    var list = document.getElementById("addCar");
    var newNode = document.createElement('div');
    newNode.innerHTML = " My car is a: " + obj.brand + " " + obj.model + " Miles " +
    + obj.miles + " I am selling this car for  " + obj.price + " dollars ";
    list.appendChild( newNode )
}
