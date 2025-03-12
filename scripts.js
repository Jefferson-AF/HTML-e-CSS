
document.addEventListener("DOMContentLoaded", function () {

const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0";
document.getElementsByTagName('head')[0].appendChild(meta);

});

function openNav() {

    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
        x.className += " menujs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    } else {
        x.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";

    }
   

}