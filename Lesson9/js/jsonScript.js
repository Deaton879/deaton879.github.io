var myTowns = ["Preston", "Soda Springs", "Fish Haven"];

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//const requestURL = './json/townData.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        
        let filter = towns.filter((mytown) => {
            if(mytown.name == myTowns[0] || mytown.name == myTowns[1] || mytown.name == myTowns[2]) {
                return mytown
            }
        });
        
        for(let i = 0; i < filter.length; i++) {
            const element = filter[i];
            let divcard = document.createElement('div');
            let divtxt = document.createElement('div');
            let divimg = document.createElement('div');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');

            divcard.setAttribute('class', 'townCard');
            divtxt.setAttribute('class', 'townTextContain');
            divimg.setAttribute('class', 'townImgContain');
            h2.textContent = element.name;
            h4.textContent = filter[i].motto;
            p1.textContent =  "Year Founded: " + filter[i].yearFounded;
            p2.textContent = "Population: " + filter[i].currentPopulation;
            p3.textContent = "Annual Rainfall: " + filter[i].averageRainfall;
            image.setAttribute('src', './images/Placeholder.png');
            image.setAttribute('data-src', './images/' + filter[i].photo);
            image.setAttribute('alt', 'Photo of ' + element.name + ', Idaho');

            divcard.appendChild(divtxt)
            divcard.appendChild(divimg);
            divtxt.appendChild(h2);
            divtxt.appendChild(h4);
            divtxt.appendChild(p1);
            divtxt.appendChild(p2);
            divtxt.appendChild(p3);
            divimg.appendChild(image);

            document.querySelector('div#home-flex').appendChild(divcard);
        }
    })
