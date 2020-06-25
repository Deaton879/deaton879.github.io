// FOR THE CURRENT WEATHER IN HERO IMAGE

function getCurrent() {
  //USE WEATHER IN URL QUERY
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5a73ef4b83ca4f2d6941744d6dc8e118";
  
  /*TEST FILE
  const apiURL = "./json/preston1.json";*/

  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

      //LOG THE RESPONSE OBJECT FOR REFERENCE
      console.log(jsObject);

      document.getElementById('currently').textContent = jsObject.weather[0].description;
      document.getElementById('temp-now').textContent = jsObject.main.temp + '℉';
      document.getElementById('temp-high').textContent = jsObject.main.temp_max + '℉';
      document.getElementById('humidity').textContent = jsObject.main.humidity + '%';
      document.getElementById('windspeed').textContent = jsObject.wind.speed + "mph";


      //CODE FOR WINDCHILL CALCULATION

      /* START DEBUG LOG
      console.log('trying windchill');*/


      if(jsObject.main.temp > 50.00 || jsObject.wind.speed <= 3.00) {
          /*debug log
          console.log('is false?')*/
          document.getElementById("windchill").innerHTML = "N/A";
      }
      else {
          /*debug log
          console.log('is true?')*/
          var t = jsObject.main.temp;
          var s16 = Math.pow(jsObject.wind.speed, .16);
          var f = (35.74 + (0.6215 * t) - (35.75 * s16) + (0.4275 * t * s16));
          document.getElementById("windchill").innerHTML = Math.round(f) + '℉';
      }
  });
} 


// FOR THE 5-DAY FORECAST

function getFive() {
  //USE FORECAST IN URL QUERY
  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5a73ef4b83ca4f2d6941744d6dc8e118";

  /*TEST FILE
  const apiURL = "./json/preston2.json";*/

  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

      /*LOG RESPOONSE OBJECT FOR REFERENCE
      console.log(jsObject);*/

      // VAR 'x' TO FILTER THE 'list' OBJECT WITHIN 'jsOBJECT' FOR THE CORRECT TIME 
      var x = '18:00:00';

      //ARRAY FOR childNodes from div#fiveDay
      let fiveday = document.getElementById('fiveDay').childNodes;
      /*log for reference
      console.log(fiveday);*/

      let forecast = jsObject.list.filter((time) => {
        return (time.dt_txt.includes(x));
      });
      console.log(forecast);
      
      //LET 'n' TO LOOP THROUGH FORECAST (SINGLE STEP, n++)
      let n = 0;
      /*LET 'i' TO LOOP THROUGH FIVEDAY (ADD 2, i+=2 to bypass the #TEXT childNodes that start and surround each defined node, otherwise undefined nodes would be passed and throw an error)*/
      for(let i = 1; i<=9; i+=2) {
        //TEMPERATURE
        fiveday[i].childNodes[5].textContent = forecast[n].main.temp + "℉";
        //CONSTRUCT THE THUMBNAIL URL ADDRESS
        let imgsrc = 'https://openweathermap.org/img/wn/' + forecast[n].weather[0].icon + '@2x.png';
        let desc = forecast[n].weather[0].description;
        fiveday[i].childNodes[3].childNodes[1].setAttribute('src', imgsrc);
        fiveday[i].childNodes[3].childNodes[1].setAttribute('alt', desc);
        //INCREMENT FORECAST IDENTIFER
        n += 1;
      }

  });
} 
