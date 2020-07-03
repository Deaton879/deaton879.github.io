var myTowns = ["Preston", "Soda Springs", "Fish Haven"];

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

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
        
        let organize = [filter[1], filter[2], filter[0]];
        
        for(let i = 0; i < organize.length; i++) {
            const element = organize[i];
            let divcard = document.createElement('div');
            let divtxt = document.createElement('div');
            let divimg = document.createElement('div');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');
            //let a = document.createElement('a');

            //a.setAttribute('href', './' + element.name + '.html');
            divcard.setAttribute('class', 'townCard');
            divtxt.setAttribute('class', 'townTextContain');
            divimg.setAttribute('class', 'townImgContain');
            h2.textContent = element.name;
            h4.textContent = organize[i].motto;
            p1.textContent =  "Year Founded: " + organize[i].yearFounded;
            p2.textContent = "Population: " + organize[i].currentPopulation;
            p3.textContent = "Annual Rainfall: " + organize[i].averageRainfall;
            
            image.setAttribute('src', '../images/' + organize[i].photo);
            image.setAttribute('alt', 'Photo of ' + element.name + ', Idaho');

            divcard.appendChild(divtxt)
            divcard.appendChild(divimg);
            divtxt.appendChild(h2);
            divtxt.appendChild(h4);
            divtxt.appendChild(p1);
            divtxt.appendChild(p2);
            divtxt.appendChild(p3);
            //divimg.appendChild(a);
            //a.appendChild(image);
            divimg.appendChild(image);

            document.querySelector('div#home-flex').appendChild(divcard);
        }
    })
