const options ={weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('todaysDate').textContent = new Date().toLocaleDateString('en-US', options); 