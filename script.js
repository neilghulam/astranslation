

// banner slides up.

const ban = document.getElementById("banner");
ban.onclick = slide;

var ex = false
function slide() {
    if (ex === false) {
        moveBanner();
        ex = true;
     } 
}

// functions for showing content & navbar

const n = document.getElementById("nav").style.display = "none";


const clear = () => {
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("content").style.display = "none";    
}

const moveBanner = () => {
    const ban = document.getElementById("banner");
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos === -170) {
            clearInterval(id);
            createContent();
            createNav();
        } else {
            pos--;
            ban.style.top = pos + "px";
        }
    }
}

const createNav = () => {
    var n = document.getElementById("nav");
    if (n.style.display === "none") {
        n.style.display = "block";
    } else {
        n.style.display = "none";
    }
}

const createContent = () => {
    clear();

    var x = document.getElementById("content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


const createServices = () => {
    clear();
    
    var s = document.getElementById("services");
    if (s.style.display === "none") {
        s.style.display = "block";
    } else {
        s.style.display = "none";
    }
}

const createContact = () => {
    clear();
    
    var s = document.getElementById("contact");
    if (s.style.display === "none") {
        s.style.display = "block";
    } else {
        s.style.display = "none";
    }
}

