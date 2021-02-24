// behaviors and interactivity
'use strict'

function checkStorage() {
    if (localStorage.className == "dark") {
        document.body.classList.toggle('dark-theme')
        document.querySelector('.btntheme').textContent = "light";

        document.getElementById("poemtext").textContent = 
        "hidden poems -> change the theme!";
    }
    else {
        document.body.classList.toggle('light-theme')
        document.querySelector('.btntheme').textContent = "dark";
        localStorage.className = "light";

        document.getElementById("poemtext").textContent = 
        "hidden poems -> change the theme!";
    }
    console.log('current class name: ' + document.body.className)
    console.log('current storage name: ' + localStorage.className)
}

const switcher = document.querySelector('.btntheme');
switcher.addEventListener('click', function() {

    if (document.body.className == "dark-theme") {
        document.body.classList.toggle('light-theme')
        document.body.className = "light-theme";
        this.textContent = "dark";
        localStorage.className = "light";

        var poemfull = document.createElement("poemfull");
        poemfull.setAttribute('style', 'white-space: pre;');
        poemfull.textContent = "the fallen\r\n";
        poemfull.textContent += "\r\n";
        poemfull.textContent += "the sun is falling\r\n";
        poemfull.textContent += "through the cotton candy sky\r\n";
        poemfull.textContent += "and into your hands";
        document.getElementById("poemtext").textContent = "";
        document.getElementById("poemtext").appendChild(poemfull);
        
        //document.getElementById("poemtext").textContent = "now is light poem";
        //document.getElementById("poemtext").textContent += "second line";
    }
    else {
        document.body.classList.toggle('dark-theme')
        document.body.className = "dark-theme";
        this.textContent = "light";
        localStorage.className = "dark";

        var poemfull = document.createElement("poemfull");
        poemfull.setAttribute('style', 'white-space: pre;');
        poemfull.textContent = "the guardian\r\n";
        poemfull.textContent += "\r\n";
        poemfull.textContent += "the moon is floating \r\n";
        poemfull.textContent += "above the blanket of stars,\r\n";
        poemfull.textContent += "watching over you";
        document.getElementById("poemtext").textContent = "";
        document.getElementById("poemtext").appendChild(poemfull);

        //document.getElementById("poemtext").textContent = "now is dark poem";
    }
    
    console.log('current class name: ' + document.body.className)
    console.log('current storage name: ' + localStorage.className)

});
