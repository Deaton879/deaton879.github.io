function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');

    changeMenu();
}

function changeMenu() {
    var menu = document.getElementById("menu");
    if (menu.innerHTML === "\u2630 Menu"){
        menu.innerHTML = "&#10060;";
        }
    else {
        menu.innerHTML = "&#9776; Menu";
    };
}
