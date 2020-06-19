function checkDay() {
    var today = new Date();

    if(today.getDay() == 5) {
        document.getElementById("pancakes").style.display = "block";
    }
}

function goAway() {
    document.getElementById("pancakes").style.display = "none";
}
