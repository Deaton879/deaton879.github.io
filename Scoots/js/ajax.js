async function getInfo(x,y) {
  let place = x;
  let id = y;

  let requestURL = "../json/more_info.json";
  document.getElementById(y).innerHTML = null;
  console.log('sending request call')
  let response = await fetch(requestURL);
  if(response.status == 404) {
      console.log("Error retrieving Json")
  }
  else if(response.ok) {
      let jsonObject = await response.json();
      console.table(jsonObject);
       // temporary checking for valid response and data parsing
       let tryIt = jsonObject[place];
       let myArray = tryIt[id];
     
      
      console.log(myArray);
      let papa = document.createElement('div');
      let name = document.createElement('h2');
      let table = document.createElement('table');

      table.className = "infoTable";
      papa.className = "tableContainer";
      name.className = "tableTitle";
      papa.appendChild(name);
      papa.appendChild(table);

      let tr1 = document.createElement('tr');
      let tr2 = document.createElement('tr');
      let tr3 = document.createElement('tr');
      let tr4 = document.createElement('tr');
      let tr5 = document.createElement('tr');
      
      table.appendChild(tr1);
      table.appendChild(tr2);
      table.appendChild(tr3);
      table.appendChild(tr4);
      table.appendChild(tr5);

      let ppl = document.createElement('th');
      let ppl2 = document.createElement('th');
      tr1.appendChild(ppl);
      tr1.appendChild(ppl2);
      let half_r = document.createElement('th');
      let half_r2 = document.createElement('th');
      tr2.appendChild(half_r);
      tr2.appendChild(half_r2);
      let full_r = document.createElement('th');
      let full_r2 = document.createElement('th');
      tr3.appendChild(full_r);
      tr3.appendChild(full_r2);
      let half_w = document.createElement('th');
      let half_w2 = document.createElement('th');
      tr4.appendChild(half_w);
      tr4.appendChild(half_w2);
      let full_w = document.createElement('th');
      let full_w2 = document.createElement('th');
      tr5.appendChild(full_w);
      tr5.appendChild(full_w2);

   
      name.innerHTML = myArray.named;

      ppl.innerHTML = "Max. Persons";
      ppl.className = "tableHead";
      half_r.innerHTML = "3 Hours (w/ Res.)";
      half_r.className = "tableHead";
      full_r.innerHTML = "Full Day (w/ Res.)";
      full_r.className = "tableHead";
      half_w.innerHTML = "3 Hours (Walk In)";
      half_w.className = "tableHead";
      full_w.innerHTML = "Full Day (Walk In)";
      full_w.className = "tableHead";

      ppl2.innerHTML = myArray.persons;
      ppl2.className = "tableBody";

      half_r2.innerHTML = myArray.half_r;
      half_r2.className = "tableBody";

      full_r2.innerHTML = myArray.full_r;
      full_r2.className = "tableBody";

      half_w2.innerHTML = myArray.half_w;
      half_w2.className = "tableBody";

      full_w2.innerHTML = myArray.full_w;
      full_w2.className = "tableBody";

     

      tr1.appendChild(ppl);
      tr1.appendChild(half_r);
      tr1.appendChild(full_r);
      tr1.appendChild(half_w);
      tr1.appendChild(full_w);

      table.appendChild(tr2);
      
      tr2.appendChild(ppl2);
      tr2.appendChild(half_r2);
      tr2.appendChild(full_r2);
      tr2.appendChild(half_w2);
      tr2.appendChild(full_w2);

      

      document.querySelector('div#'+id).appendChild(papa);
    }
    
}