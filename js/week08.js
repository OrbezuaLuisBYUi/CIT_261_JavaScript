/**
 * Created by jloin on 10/15/2019.
 */

function week08()
{
    var elem = document.getElementById("animation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

//function to change the color , last button
newcolor.onclick = function() {
    this.style.backgroundColor = 'yellow';

};