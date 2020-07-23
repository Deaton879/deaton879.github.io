
function imListening(x) {
    if(!x.checkValidity(0)) {
        document.getElementById(x.name).style.display = ("block");
    }
    else {
        document.getElementById(x.name).style.display = ("none");
        return true;
    }
}

function calculate(x) {
    let item1 = parseFloat(document.getElementById('quantity1').value);
    let item2 = parseFloat(document.getElementById('quantity2').value);
    let item3 = parseFloat(document.getElementById('quantity3').value);
    let item4 = parseFloat(document.getElementById('quantity4').value);
    
    return (item1/10) + (item2/10) + (item3/10) + (item4/10);
}

function updatePrice(that) {  
    //Send price reflecting item quantity (param: that == select option) to be displayed by matching output price container--
    // -- param: that.name == output container @id.
    let qtyPrice = document.getElementById(that.name);
    //Changes price matching the quantity selected
    qtyPrice.innerHTML = that.value;
    //Also changes the value 
    qtyPrice.value = that.value;
    
    let total = document.getElementById('total');
    total.value = calculate(total);
    total.innerHTML = total.value;
}


function resetMyForm() {
    let name = document.getElementById('first-NAME');
    name.focus();
}

