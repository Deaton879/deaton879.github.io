const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5a73ef4b83ca4f2d6941744d6dc8e118";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imgsrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    console.log(imgsrc);
    const description = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imgsrc;
    document.getElementById('icon').setAttribute('src', imgsrc);
    document.getElementById('icon').setAttribute('alt', description);
  });