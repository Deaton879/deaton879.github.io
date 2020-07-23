document.getElementById("todaysDate").textContent = todayDate();

function todayDate() {
  var today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  var month = months[today.getMonth()];
  var day = days[today.getDay()];
  var dayDate = today.getDate();
  var year = today.getFullYear();
  
  return  day + ", " + dayDate + " " + month + " " + year;
}

// Toggle Navigation Menu in Responsive displays(:small/medium)
function toggleMenu(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("nav_show") == -1) {
    x.className += " nav_show";
  } else { 
    x.className = x.className.replace(" nav_show", "");
  }
}

function openNav() {
  document.getElementById("socialSidepanel").style.width = "fit-content";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("socialSidepanel").style.width = "0";
}