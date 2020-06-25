document.getElementById("todaysDate").textContent = todayDate();

function todayDate() {
    var today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var month = months[today.getMonth()];
    var day = days[today.getDay()];
    var dayDate = today.getDate();
    var year = today.getFullYear();

    //For setting correct day on weather forecast
    const fday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    var nday =  today.getDay();

    document.getElementById('day1').textContent = fday[nday]; //first day of 5-day forecast (current date)

    let a = document.getElementById('day2');
    let b = document.getElementById('day3');
    let c = document.getElementById('day4');
    let d = document.getElementById('day5');

    const forecast = [a, b, c, d]; //list of remainding forecast spots

    let x = (nday + 1);
    let looped = 0;

    /* For each forecast date, add 1 to x then increment. if x exceeds 6 (saturday), else if picks back up at week start on 0 (sunday) with looped, which is incremented until the for statement expires */
    for(let i = 0; i < forecast.length; i++) {
        if(x <= 6) {
            console.log(fday[x])
            forecast[i].textContent = fday[x];
            x++;
        }
        else if (x > 6) {
            console.log(fday[looped])
            forecast[i].textContent = fday[looped];
            looped++;
        }
    }
    return  day + ", " + dayDate + " " + month + " " + year;       
}

function forecaster(num) {

}