var temp = parseFloat(document.getElementById("temp").innerHTML);
var speed = parseFloat(document.getElementById("windspeed").innerHTML);
var chill = document.getElementById("windchill");

if(temp > 50 || speed <= 3) {
    chill.innerHTML = "N/A";
}
else {
    var t = temp;
    var s16 = Math.pow(speed, .16);
    var f = (35.74 + (0.6215 * t) - (35.75 * s16) + (0.4275 * t * s16));
    chill.innerHTML = Math.round(f) + ' &#8457;';
}