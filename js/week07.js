/**
 * Created by jloin on 10/10/2019.
 */
function week07(){
    var div = document.getElementById('week07');
    div.style.backgroundColor = 'blue';
    div.style.color = 'white';

//Referencia: https://entrellaves.com/javascript/cambiar-css-con-javascript/
}

function week07original(){
    var div = document.getElementById('week07');
    if(confirm("Desea regresar el div al estado inicial?"))
    {
        div.style.backgroundColor = null;
        div.style.color = null;
        div.className = 'week07initial';
    }
}

function week07modify(){
    var div = document.getElementById('week07');
    if(confirm("Desea modificar el estilo original (semana7inicial) por otro estilo (semana7modificada)?"))
    {
        div.className = 'week07modify';
        //div.classList.add('clase1', 'clase2', 'clase3');//Me permite agregar varias clases a la vez
    }
}

function week07sheet(){
    var div = document.getElementById('week07');
    if(confirm("Desea cambiar el fondo de su plantilla cambiando la hoja de estilo?"))
    {
        document.getElementById('style').href = 'week07backgroundModified.css';
    }
}