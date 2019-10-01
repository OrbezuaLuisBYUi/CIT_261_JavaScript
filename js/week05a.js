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