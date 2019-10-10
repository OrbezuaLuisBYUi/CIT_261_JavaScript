/**
 * Created by jloin on 10/8/2019.
 */
//function to create a new node
function week06() {
  //Por medio de createElement podemos crear una etiqueta HTML
    //identify the place to add the new node, id: week06
    var list = document.getElementById("week06");
    //to create a new element in this case p is for a paragraph or sentence
    var parrafo1 = document.createElement('p');
    var parrafo2 = document.createElement('p');
    //what I will put in this case Paragraph-1 to test week 06
    parrafo1.innerHTML = "Paragraph-1 to test week 06";//Contenido
    parrafo2.innerHTML = "Paragraph-2 to test again the week 06";
    list.appendChild(parrafo1);
    list.appendChild(parrafo2);
}
//function to insert new node before the old one
function week06a(){
    if(confirm("Do you want to see in action insertBefore?"))
    {
        //insertBefore***************
        //This allow us to select a node and insert a new node before the selected.
        // Create new paragraph with the   p
        var newParagraph = document.createElement('p');
        newParagraph.innerHTML = "Nuevo different paragraph before the old one.";
        // Because  with the function week06 I created 2 paragraph, like an array I selected index 1 (second paragraph) and before will be the new one.
        var secondParagraph = document.getElementById('week06').getElementsByTagName('p')[1];
        // now it is the moment to insert before
        document.getElementById('week06').insertBefore(newParagraph,secondParagraph);
    }
}

//function to replace the first node
function week06b(){
    if(confirm("Do you want to see in action the replaceChild? before paragraph 2"))
    {
        //to replace old node for a new one:
        var newParagraph_r = document.createElement('p');
        newParagraph_r.innerHTML = "Old paragraph 1 is replace for this new node , this text.";
        var secondParagraph_r = document.getElementById('week06').getElementsByTagName('p')[0];
        document.getElementById('week06').replaceChild(newParagraph_r,secondParagraph_r);
    }
}

//function to remove node
function week06c(){
    if(confirm("Do you want to remove a node using removeChild?"))
    {
        //removeChild*************
        //document.getElementById('week06'). removeChild(newParagraph_r[0]);
        var remove = document.getElementById("week06");
        remove.removeChild(remove.childNodes[0]);
    }
}
//function to active link
function testLinkUniversity() {
    var list = document.getElementById("test");
    //to create a new element in this case p is for a paragraph or sentence
    var link1 = document.createElement('p');

    //what I will put in this case Paragraph-1 to test week 06
    link1.innerHTML = "<a target='_blank' href='https://my.byui.edu/ics'> Activate the Link </a>";//Contenido
    list.appendChild(link1);

    var link1 = document.getElementById("test1");
    var look = document.createAttribute("href");
    look.value = "https://my.byui.edu/ics";
    link1.setAttributeNode(look);
}
//function to create element img
function createPhotoElement() {
    var link1 = document.getElementById("photo1");
    var photo = document.createElement("IMG");
    photo.setAttribute("src", "images/pic02.jpg");
    photo.setAttribute("width", "200");
    photo.setAttribute("height", "130");
    photo.setAttribute("alt", "you are creating a picture");//if show error the picture show this text
    link1.appendChild(photo);
}


