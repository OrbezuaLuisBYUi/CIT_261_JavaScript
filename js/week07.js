/**
 * Created by jloin on 10/10/2019.
 */
function week07(){
    var div = document.getElementById('week07');
    div.style.backgroundColor = 'blue';
    div.style.color = 'white';


}

function week07original(){
    var div = document.getElementById('week07');
    if(confirm("Do you want to back to original div?"))
    {
        div.style.backgroundColor = null;
        div.style.color = null;
        div.className = 'week07initial';
    }
}

function week07modify(){
    var div = document.getElementById('week07');
    if(confirm("Do you want to modify the original style for different one?"))
    {
        div.className = 'week07modify';
        div.style.color='red';
        div.style.fontSize= '250%';
        div.style.textDecoration='underLine';
        //div.classList.add('clase1', 'clase2', 'clase3');//Me permite agregar varias clases a la vez
    }
}

function week07sheet(){
    var div = document.getElementById('week07');
    if(confirm("Do you want to change the backgroud style?"))
    {
        document.getElementById('style').href = 'week07backgroundModified.css';
    }
}

function rotateFunction(){

    // Standard syntax
    document.getElementById("rotate1").style.transform = "rotate(50deg)";
    //dive.transform: rotate(60deg); *************

}
function dropdownBlock(){
    var div = document.getElementById('dropdown1');
    if(confirm("Do you want to show the dropdown button?"))
    {

        document.getElementById("dropdown1").style.display = "block";

    }
}
