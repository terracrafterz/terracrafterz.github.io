function opennav() {
    document.getElementById('opennav').setAttribute('onclick', 'closenav()');
    document.getElementById('opennav').style.width = "154px";
    document.getElementById('opennav').innerHTML = "Page List";
    document.getElementById('sidenav').style.left = "0";
}

function closenav() {
    document.getElementById('sidenav').style.left = "-12%";
    document.getElementById('opennav').setAttribute('onclick', 'opennav()');
    document.getElementById('opennav').style.width = "35px";
    document.getElementById('opennav').innerHTML = "+";
}