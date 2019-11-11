/**
 * Created by jloin on 9/27/2019.
 */
// function asking for items to be storage
function createStorageForList(){
    var name = prompt("Enter your name");
    var lastName = prompt("Enter your last name");
    var country = prompt( "Enter your country");
    var age = prompt( "Enter age");
    var job = prompt( "Enter your job");

    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("country", country);
    localStorage.setItem("age", age);
    localStorage.setItem("job", job);

}
//function to show the list     var lastname = localstorage.getItem("key");
function showItemsList(){
    var  i;
    document.getElementById("addItems").innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        x=localStorage.getItem(k);
        document.getElementById("addItems").innerHTML += "Key: " +k+ " Value: "+x + "<br>";
    }
}
//funtion to delete items from list.
function resetList() {
    localStorage.clear();
    document.getElementById("deleteListNow").innerHTML = "You just deleted all the items from your List" + "<br>";

}

function assoativearray() {
    // our Object
    var movies = {
        "0": {
            "title": "la momia",
            "characteristic": "terror"
        },

        "1":{
            "title": "Terminator",
            "characteristic": "action"
        },

        "2":{
            "title": "Dracula",
            "characteristic": "terror"
        },

        "3":{
            "title": "The Dog",
            "characteristic": "comedy"
        },

        "4":{
            "title": "The spy",
            "characteristic": "fiction"
        }
    };

    var theCollectionMovies = "";
    for (var i in movies) { // i is the index for the Json
        var title = "";
        var char = "";
        for (var j in movies[i]) // j is the values , columns
        {
            theCollectionMovies += " Position: " +i+ " KEY: "+j+" VALUE: "+movies[i][j]+"<br>";
            if(j == "title")
            {
                title = movies[i][j];
            }
            if(j == "characteristic")
            {
                char = movies[i][j];
            }
        }
        // our array
        if(i == 0){ var movies1 = [title, char]; }
        if(i == 1){ var movies2 = [title, char]; }
        if(i == 2){ var movies3 = [title, char]; }
        if(i == 3){ var movies4 = [title, char]; }
        if(i == 4){ var movies5 = [title, char]; }
    }

    // storing our array as a string
    localStorage.setItem("theCollection", theCollectionMovies);
    localStorage.setItem("theMovie1", JSON.stringify(movies1));
    localStorage.setItem("theMovie2", JSON.stringify(movies2));
    localStorage.setItem("theMovie3", JSON.stringify(movies3));
    localStorage.setItem("theMovie4", JSON.stringify(movies4));
    localStorage.setItem("theMovie5", JSON.stringify(movies5));
    // retrieving our data and converting it back into an array
    var resultCollection = localStorage.getItem("theCollection");
    var localStorageMovie1 = localStorage.getItem("theMovie1");
    var localStorageMovie2 = localStorage.getItem("theMovie2");
    var localStorageMovie3 = localStorage.getItem("theMovie3");
    var localStorageMovie4 = localStorage.getItem("theMovie4");
    var localStorageMovie5 = localStorage.getItem("theMovie5");
    var result = "<strong>DATA OBJECT:</strong><br> "+resultCollection+"<br><br><strong>ARRAYS</strong><br>MOVIE1"+localStorageMovie1+"<br>MOVIE2"+localStorageMovie2+"<br>MOVIE3"+localStorageMovie3+"<br>MOVIE4"+localStorageMovie4+"<br>MOVIE5"+localStorageMovie5;

    var div = document.getElementById("resultArrayObject").innerHTML = result;
}
function removeItemArray()
{
    var removeItemMovie = prompt("Do you want to delete 1,2,3,4,5?");
    if(removeItemMovie == 1){ localStorage.removeItem('theMovie1'); }
    if(removeItemMovie == 2){ localStorage.removeItem('theMovie2'); }
    if(removeItemMovie == 3){ localStorage.removeItem('theMovie3'); }
    if(removeItemMovie == 4){ localStorage.removeItem('theMovie4'); }
    if(removeItemMovie == 5){ localStorage.removeItem('theMovie5'); }
    seeObjectandArray();
}
function seeObjectandArray()
{
    // retrieving our data and converting it back into an array
    var resultCollection = localStorage.getItem("theCollection");
    var localStorageMovie1 = localStorage.getItem("theMovie1");
    var localStorageMovie2 = localStorage.getItem("theMovie2");
    var localStorageMovie3 = localStorage.getItem("theMovie3");
    var localStorageMovie4 = localStorage.getItem("theMovie4");
    var localStorageMovie5 = localStorage.getItem("theMovie5");
    if(localStorageMovie1 == null){ localStorageMovie1 = "This movie was deleted"; }
    if(localStorageMovie2 == null){ localStorageMovie2 = "This movie was deleted"; }
    if(localStorageMovie3 == null){ localStorageMovie3 = "This movie was deleted"; }
    if(localStorageMovie4 == null){ localStorageMovie4 = "This movie was deleted"; }
    if(localStorageMovie5 == null){ localStorageMovie5 = "This movie was deleted"; }
    var result = "<strong>DATA OBJECT:</strong><br> "+resultCollection+"<br><br><strong>ARRAYS</strong><br>MOVIE1"+localStorageMovie1+"<br>MOVIE2"+localStorageMovie2+"<br>MOVIE3"+localStorageMovie3+"<br>MOVIE4"+localStorageMovie4+"<br>MOVIE5"+localStorageMovie5;

    var div = document.getElementById("resultArrayObject").innerHTML = result;
}
