/**
 * Created by jloin on 9/23/2019. */
//asking user for inputs
function informationPerson(){
    var name = prompt("Enter your name");
    var lastName = prompt("Enter your last name");
    var country = prompt( "Enter your country");
    var age = prompt( "Enter age");

    var myInfo = '{"name":"'+name+'", "lastName":"'+lastName+'","country":"'+country+'", "age":"'+age+'"}';
    var obj = JSON.parse(myInfo) ;
    document.getElementById("resultJson").innerHTML = " My name is: " + obj.name + " " + obj.lastName + " My country " +
    "is: " + obj.country + " I am " + obj.age + " yeas old ";


        var json = {
            "0": {
                "name": name,
                "lastName": lastName,
                "country": country,
                "age":age
            },
            "1":{
                "name": "Luis",
                "lastName": "Peterland",
                "country": "USA",
                "age":1000
            }
        };
        var persons = "";
        for (var i in json) { // i is the index 0 and 1 so the rows for the Json
            //alert("Posición: "+i);
            for (var j in json[i]) // j is the values , columns
            {
                persons += " Position: " +i+ " KEY: "+j+" VALUE: "+json[i][j] +"<br>";
               // alert("KEY: "+j+" VALUE: "+json[i][j]);
            }
        }
    document.getElementById("resultJson2").innerHTML = persons;


}
function informationStringify(){
    var obj = { name: "Luis", age: 3000, city: "Heaven", job: "atHome" };
    var myJSON = JSON.stringify(obj);
    document.getElementById("resultStringify").innerHTML = "<strong style='color:blue'>to transform in string: </strong>" + myJSON;
}

