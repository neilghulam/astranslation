




const engWords = ["cat", "dog", "tree", "", "", ""];


// Loads words in english to the page.
function loadWords() {

  engWords.map(user => {
    let { username } = user;

    var f = document.querySelector("form");

    var fullWidth = window.innerWidth;
    var fullHeight = window.innerHeight;

    var text = user;



    var elem = document.createElement("div");
    elem.textContent = text;
    elem.style.position = "absolute";
    elem.style.left = Math.round(Math.random() * fullWidth) + "px";
    elem.style.top = Math.round(Math.random() * fullHeight) + "px";
    f = document.body.appendChild(elem);
    f.onmousemove = translate;

       

  })

}


 // scrambles the word to finnish



 const finWords = ["kissa", "koira", "puu"];

 function translate() {

    finWords.map(user => {
        let { username } = user;

    
        Messenger = function(el) {
        "use strict";
        var m = this;
    
        m.init = function() {
        m.codeletters = "&#*+%?£@§$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = finWords;
    
        setTimeout(m.animateIn, 100);
        };
    
        m.generateRandomString = function(length) {
        var random_text = "";
        while (random_text.length < length) {
            random_text += m.codeletters.charAt(
            Math.floor(Math.random() * m.codeletters.length)
            );
        }
    
        return random_text;
        };
    
        m.animateIn = function() {
        if (m.current_length < m.messages[m.message].length) {
            m.current_length = m.current_length + 2;
            if (m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
            }
    
            var message = m.generateRandomString(m.current_length);
            $(el).html(message);
    
            setTimeout(m.animateIn, 20);
        } else {
            setTimeout(m.animateFadeBuffer, 20);
        }
        };
    
        m.animateFadeBuffer = function() {
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (var i = 0; i < m.messages[m.message].length; i++) {
            m.fadeBuffer.push({
                c: Math.floor(Math.random() * 12) + 1,
                l: m.messages[m.message].charAt(i)
            });
            }
        }
    
        var do_cycles = false;
        var message = "";
    
        for (var i = 0; i < m.fadeBuffer.length; i++) {
            var fader = m.fadeBuffer[i];
            if (fader.c > 0) {
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(
                Math.floor(Math.random() * m.codeletters.length)
            );
            } else {
            message += fader.l;
            }
        }
    
        $(el).html(message);
    
        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 50);
        } else {
            setTimeout(m.cycleText, 2000);
        }
        };
    
        m.cycleText = function() {
        m.message = m.message + 1;
        if (m.message >= m.messages.length) {
            m.message = 0;
        }
    
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html("");
    
        setTimeout(m.animateIn, 200);
        };
    
        m.init();
    };
    
    //console.clear();
    var messenger = new Messenger($("div"));
    })
};
 


// banner slides up.

const ban = document.getElementById("banner");
ban.onclick = slide;


function slide(){
    
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


// content appears english

const s = document.getElementById("services").style.display = "none";
const c = document.getElementById("contact").style.display = "none";



const x = document.getElementById("content").style.display = "none";
const n = document.getElementById("nav").style.display = "none";

const createNav = () => {
    var n = document.getElementById("nav");
    if (n.style.display === "none") {
        n.style.display = "block";
    } else {
        n.style.display = "none";
    }
}

const createContent = () => {
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("content").style.display = "none";
    
    var x = document.getElementById("content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


const createServices = () => {
    
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("content").style.display = "none";
    
    
    var s = document.getElementById("services");
    if (s.style.display === "none") {
        s.style.display = "block";
    } else {
        s.style.display = "none";
    }
}

const createContact = () => {
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("content").style.display = "none";
    
    var s = document.getElementById("contact");
    if (s.style.display === "none") {
        s.style.display = "block";
    } else {
        s.style.display = "none";
    }
}

//content finnish

