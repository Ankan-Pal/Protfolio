const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");
const btn13 = document.getElementById("btn13");
const btn14 = document.getElementById("btn14");
const btn15 = document.getElementById("btn15");
const btn16 = document.getElementById("btn16");
const btn17 = document.getElementById("btn17");
const btn18 = document.getElementById("btn18");
const btn19 = document.getElementById("btn19");
const btn20 = document.getElementById("btn20");

const sign1 = document.getElementById("sign1");
const sign2 = document.getElementById("sign2");
const sign3 = document.getElementById("sign3");
const sign4 = document.getElementById("sign4");

const home = document.getElementById("home");
const works = document.getElementById("works");
const info = document.getElementById("info1");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");
const img11 = document.getElementById("img11");
const img12 = document.getElementById("img12");
const img13 = document.getElementById("img13");
const img14 = document.getElementById("img14");
const img15 = document.getElementById("img15");
const img16 = document.getElementById("img16");

const h1img = document.getElementById("h1img");
const h2img = document.getElementById("h2img");
const h3img = document.getElementById("h3img");

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");


const w1 = document.getElementById("w1");
const w2 = document.getElementById("w2");
const w3 = document.getElementById("w3");
const w4 = document.getElementById("w4");
const w5 = document.getElementById("w5");



const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");

const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const txt5 = document.getElementById("txt5");
const txt11 = document.getElementById("txt11");
const txt12 = document.getElementById("txt12");
const txt13 = document.getElementById("txt13");
const txt21 = document.getElementById("txt21");
const txt22 = document.getElementById("txt22");
const txt23 = document.getElementById("txt23");
const txt24 = document.getElementById("txt24");
const txt25 = document.getElementById("txt25");
const txt26 = document.getElementById("txt26");

const logon = document.getElementById('logon');
const namecard = document.getElementById('namecard');
const names = document.getElementById('names');

const cmenu = document.getElementById("cmenu");

// Disable the default cursor using JavaScript
document.body.style.cursor = 'none';



// Create the white dot (wd) dynamically
const wd = document.createElement('div');
wd.classList.add('wd');
document.body.appendChild(wd);

// Create the white circle (wc) dynamically
const wc = document.createElement('div');
wc.classList.add('wc');
document.body.appendChild(wc);

function transiton(x, y) {
    x.style.transition = y;
}



sign1.style.transition = "0.3s";
document.body.style.userSelect = 'none';

let h1c = 0;
let h2c = 0;
let h3c = 0;


const audio = new Audio('images/se2.mp3');
let sw = window.innerWidth;


function contextMenuShow() {
    document.addEventListener('contextmenu', (e) => {


        e.preventDefault();


        cmenu.style.left = `${e.pageX}px`;
        cmenu.style.top = `${e.pageY}px`;

        setTimeout(() => {
            transiton(cmenu, '0.1s');
            cmenu.style.opacity = "1";
            cmenu.style.height = "145px";

            setTimeout(() => {
                btn16.style.opacity = "1";

                btn17.style.opacity = "1";

                btn18.style.opacity = "1";

                btn19.style.opacity = "1";
            }, 250);
        }, 20);

        set
    });

    // Hide the custom menu on any click
    document.addEventListener('click', () => {
        cmenu.style.opacity = "0";
    });
}

btn16.addEventListener('click', () => {
    location.reload();
});
btn17.addEventListener('click', () => {
    navigator.clipboard.writeText('https://ankanpal.netlify.app/')
});
btn18.addEventListener('click', () => {

    const content = {
        title: 'Hello World Share',
        text: 'Check out this cool message: Hello World!',
        url: window.location.href
    }
    navigator.share(content)
});
btn19.addEventListener('click', () => {
    GoToHome();
});


contextMenuShow();

function dynamicBar(x, y) {
    x.addEventListener('mouseover', () => {

        wc.style.transition = 'all 0.3s ease';
        wc.style.transform = 'translate(-50%, 50px)';
        wc.style.border = "1px solid #474747";
        wc.style.backdropFilter = "blur(10px)";
        wc.style.borderRadius = '9px';
        wc.style.width = "max-content";
        wc.style.paddingLeft = "10px";
        wc.style.paddingRight = "10px";
        wc.style.height = "max-content";
        wc.style.background = "#3d383800";
        wc.textContent = y;
    });

    // Handle mouseout on btn6
    x.addEventListener('mouseout', () => {
        wc.style.transition = 'all 0.1s ease';
        wc.style.transform = 'translate(-50%, -50%)';
        wc.style.borderRadius = '50%';
        wc.style.border = "2px solid #fff";
        wc.style.height = "45px";
        wc.style.width = "45px";
        wc.style.borderRadius = '50%';
        wc.style.backdropFilter = "blur(0px)";
        wc.style.background = "transparent";
        wc.style.paddingLeft = "0px";
        wc.style.paddingRight = "0px";
        wc.textContent = "";

        setTimeout(() => {
            wc.style.transition = 'all 0.01s ease';
        }, 300);
    });

}

if (sw > 1000) {

    document.addEventListener('mousemove', function (e) {
        const wd = document.querySelector('.wd');
        const wc = document.querySelector('.wc');

        // Update positions for the dot (wd) and circle (wc)
        wd.style.left = `${e.pageX}px`;
        wd.style.top = `${e.pageY}px`;

        // wc.classList.add('wcdyna');
        // wc.textContent="Loading";



        wc.style.left = `${e.pageX}px`;
        wc.style.top = `${e.pageY}px`;

        dynamicBar(btn6, "Github");
        dynamicBar(btn9, "Discord");
        dynamicBar(btn7, "X");
        dynamicBar(btn8, "LinkledIn");


    });
}
else {
    wd.style.display = "none";
    wc.style.display = "none";
}


btn4.style.opacity = "0";
btn5.style.opacity = "0";
txt3.style.opacity = "0";
sign2.style.opacity = "0";
txt5.style.opacity = "0";
img6.style.opacity = "0";

setTimeout(() => {
    transiton(txt1, "0.5s");
    transiton(txt2, "0.5s");
    transiton(btn4, "0.5s");
    transiton(btn5, "0.5s");
    transiton(txt3, "0.5s");
    transiton(sign2, "0.5s");
    transiton(txt11, "0.5s");
    transiton(txt12, "0.5s");
    transiton(txt13, "0.5s");

    if (sw > 1200) {
        txt2.style.marginTop = "10px";
        btn4.style.marginTop = "-20px";
        btn5.style.marginTop = "0px";
        transiton(txt1, "0.3s");
        txt1.textContent = null;
        txt1.style.width = "1px";
        txt1.style.height = "90px";
        txt1.style.color = "#a0a0a0";
        setTimeout(() => {
            txt1.style.opacity = "1";
            txt1.style.width = "365px";
            setTimeout(() => {
                transiton(txt1, "0.3s");
                txt1.style.color = "#000";
                txt1.textContent = "-Ankan Pal-";
            }, 500);
        }, 100);
    }
    txt1.style.opacity = "1";


    setTimeout(() => {
        txt2.style.opacity = "1";
        setTimeout(() => {
            btn4.style.opacity = "1";
            btn5.style.opacity = "1";

            setTimeout(() => {
                txt3.style.opacity = "1";

                setTimeout(() => {
                    sign2.style.opacity = "1";
                    setTimeout(() => {
                        txt5.style.opacity = "1";
                    }, 100);

                }, 100);

            }, 300);

        }, 300);

    }, 300);

}, 400);
btn3.addEventListener('click', () => {
    setTimeout(() => {
        img6.style.transition = "0.3s";
        txt11.style.transition = "0.3s";
        txt12.style.transition = "0.3s";
        txt13.style.transition = "0.3s";
        img6.style.opacity = "1";

        setTimeout(() => {
            txt11.style.opacity = "1";
            setTimeout(() => {
                txt12.style.opacity = "1";
                setTimeout(() => {
                    txt13.style.opacity = "1";
                }, 200);
            }, 200);
        }, 200);
    }, 100);
});

btn5.addEventListener('click', () => {
    setTimeout(() => {
        img6.style.transition = "0.3s";
        txt11.style.transition = "0.3s";
        txt12.style.transition = "0.3s";
        txt13.style.transition = "0.3s";
        img6.style.opacity = "1";

        setTimeout(() => {
            txt11.style.opacity = "1";
            setTimeout(() => {
                txt12.style.opacity = "1";
                setTimeout(() => {
                    txt13.style.opacity = "1";
                }, 200);
            }, 200);
        }, 200);
    }, 100);
});



//go to home tab

function GoToHome() {
    audio.play();
    sign1.style.width = "100px";
    sign1.style.marginLeft = "0px";

    home.style.display = "flex";
    works.style.display = "flex";
    info.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    setTimeout(() => {
        audio.stop();
    }, 500);
}

// go to works tab
function GoToWorks() {
    audio.play();
    sign1.style.width = "100px";
    sign1.style.marginLeft = "86px";

    home.style.display = "flex";
    works.style.display = "flex";
    info.style.display = "none";

    window.scrollTo({
        top: 570,
        behavior: "smooth"
    });
    setTimeout(() => {
        audio.pause();
    }, 500);
}


// if info page was opened before or not
function CheckIfInfoWasOpenedOrNot() {

    let is1ml = sign1.style.marginLeft;
    if (is1ml != "178px") {
        window.scrollTo(
            {
                top: 0,
                behavior: "instant"
            })
    }
    audio.play();
    sign1.style.width = "75px";
    sign1.style.marginLeft = "178px";

    home.style.display = "none";
    works.style.display = "none";
    info.style.display = "block";
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

btn1.addEventListener('click', () => { GoToHome(); });
btn2.addEventListener('click', () => { GoToWorks(); });
btn3.addEventListener('click', () => { CheckIfInfoWasOpenedOrNot(); });
btn4.addEventListener('click', () => { GoToWorks(); });
btn5.addEventListener('click', () => { CheckIfInfoWasOpenedOrNot(); });


//roc = react on click
function roc1(x) {
    x.style.scale = "0.85";
    x.style.translate = "0px -20px";
    x.style.transition = "0.5s";
    setTimeout(() => {
        x.style.scale = "1";
        x.style.translate = "20px 0px";
    }, 300);
}

w1.addEventListener('click', () => { roc1(w1); });
w2.addEventListener('click', () => { roc1(w2); });
w3.addEventListener('click', () => { roc1(w3); });


function roc2(x) {
    x.style.scale = "0.85";
    x.style.translate = "0px 90px";
    x.style.transition = "0.5s";
    setTimeout(() => {
        x.style.scale = "1";
        x.style.translate = "20px -180px";
    }, 200);
}
w4.addEventListener('click', () => { roc2(w4); });
w5.addEventListener('click', () => { roc2(w5); });


function roc3(x) {
    x.style.scale = "1.2";
    x.style.transition = "0.5s";
    x.style.translate = "10%";

    setTimeout(() => {
        x.style.scale = "1";
        x.style.translate = "0%";
        setTimeout(() => {
            x.style.transition = "1s";
            x.style.backgroundColor = "transparent";
        }, 2000);
    }, 200);
}


s1.addEventListener('click', () => { roc3(s1); });
s2.addEventListener('click', () => { roc3(s2); });
s3.addEventListener('click', () => { roc3(s3); });



function aov(x) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                x.style.scale = "0.85";
                x.style.translate = "0px 0px";

                if (x == w5 || x == w4) {
                    setTimeout(() => {
                        x.style.transition = "0.5s";
                        x.style.opacity = "1";
                        x.style.translate = "20px -180px";
                        x.style.scale = "1";
                        if (x == w5) {
                            x.style.margin = "-40px 0px";
                        }
                    }, 1);

                }
                else {
                    setTimeout(() => {
                        x.style.transition = "0.5s";
                        x.style.opacity = "1";
                        x.style.translate = "22.5px 0px";
                        x.style.scale = "1";
                    }, 1);
                }
            }
        });
    }, {
        threshold: 0.1
    });


    observer.observe(x);
}

function aovw(x) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entries.isIntersecting) {
                audio.play();
                sign1.style.width = "100px";
                sign1.style.marginLeft = "86px";

                home.style.display = "flex";
                works.style.display = "flex";
                info.style.display = "none";

                window.scrollTo({
                    top: 600,
                    behavior: "smooth"
                });
            }
        });
    }, {
        threshold: 1
    });
    observer.observe(x);
}


aovw(w1);
aov(w1);
aov(w2);
aov(w3);
aov(w4);
aov(w5);

function aov2(x) {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                x.style.transition = "0.5s";
                x.style.opacity = "1";
                x.style.scale = "1";

                if (x == s1) {
                    x.style.marginLeft = "-300px";
                }
                else if (x == s2) {
                    x.style.marginLeft = "40px";
                }
                else if (x == s3) {
                    x.style.marginLeft = "380px";
                }
                else if (x == h1) {
                    x.style.marginLeft = "-350px";
                }
            }
        })
    }, {
        threshold: 0.3
    });
    observer.observe(x);
}






btn15.addEventListener('click', () => {
    audio.play();
    sign1.style.width = "95px";
    sign1.style.marginLeft = "0px";
    home.style.display = "flex";
    works.style.display = "flex";
    info.style.display = "none";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


function hc(x, y, z, c) {
    x.style.transition = "0.5s";
    y.style.transition = "0.5s";
    z.style.transition = "0.5s";

    x.style.scale = "1.5";

    setTimeout(() => {
        x.style.scale = "0.4";
        x.style.translate = "0 -80px";

        y.style.opacity = "1";
        y.style.fontSize = "45px";
        y.style.translate = "0 -130px";
        setTimeout(() => {
            z.style.opacity = "1";
        }, 200);
    }, 100);
}

function hc2(x, y, z, c) {
    if (c == 1) {
        x.style.transition = "0.5s";
        y.style.transition = "0.5s";
        z.style.transition = "0.5s";

        x.style.scale = "0.2";
        setTimeout(() => {
            x.style.scale = "1";
            x.style.translate = "0 0px";

            y.style.opacity = "0";
            z.style.opacity = "0";
            setTimeout(() => {
                y.style.fontSize = "30px";
                y.style.translate = "0 0px";
            }, 200);
        }, 100);
    }
}


h1.addEventListener('click', () => {
    if (h1c == 0) {
        h1.style.transition = "0.5s";
        hc(h1img, txt21, txt22, h1c);
        h1.style.backgroundColor = "#3c3b3b9b";
        h1c = 1;

        hc2(h3img, txt25, txt26, h3c);
        h3.style.backgroundColor = "transparent";
        h3c = 0;

        hc2(h2img, txt23, txt24, h2c);
        h2.style.backgroundColor = "transparent";
        h2c = 0;

        setTimeout(() => {
            hc2(h1img, txt21, txt22, h1c);
            h1c = 0;
            h1.style.backgroundColor = "transparent";
        }, 4000);


    }
    else {
        hc2(h1img, txt21, txt22, h1c);
        h1c = 0;
        h1.style.backgroundColor = "transparent";
    }
});


h2.addEventListener('click', () => {
    h2.style.transition = "0.5s";
    if (h2c == 0) {
        hc(h2img, txt23, txt24, h2c);
        h2.style.backgroundColor = "#3c3b3b9b";
        h2c = 1;

        hc2(h1img, txt21, txt22, h1c);
        h1c = 0;
        h1.style.backgroundColor = "transparent";

        hc2(h3img, txt25, txt26, h3c);
        h3.style.backgroundColor = "transparent";
        h3c = 0;

        setTimeout(() => {
            hc2(h2img, txt23, txt24, h2c);
            h2.style.backgroundColor = "transparent";
            h2c = 0;
        }, 4000);
    }
    else {
        hc2(h2img, txt23, txt24, h2c);
        h2.style.backgroundColor = "transparent";
        h2c = 0;



    }
});


h3.addEventListener('click', () => {
    h3.style.transition = "0.5s";
    if (h3c == 0) {
        hc(h3img, txt25, txt26, h3c);
        h3.style.backgroundColor = "#3c3b3b9b";
        h3c = 1;

        hc2(h2img, txt23, txt24, h2c);
        h2.style.backgroundColor = "transparent";
        h2c = 0;

        hc2(h1img, txt21, txt22, h1c);
        h1c = 0;
        h1.style.backgroundColor = "transparent";
        setTimeout(() => {
            hc2(h3img, txt25, txt26, h3c);
            h3.style.backgroundColor = "transparent";
            h3c = 0;
        }, 4000);
    }
    else {
        hc2(h3img, txt25, txt26, h3c);
        h3.style.backgroundColor = "transparent";
        h3c = 0;
    }
});



function ccoc(x) {
    x.style.transition = "0.5s";
    x.style.backgroundColor = "#3c3b3b9b";
}
function rccoc(x) {
    x.style.transition = "0.5s";
    x.style.backgroundColor = "transparent";
}

s1.addEventListener('click', () => {
    ccoc(s1);
    rccoc(s2);
    rccoc(s3);
});
s2.addEventListener('click', () => {
    ccoc(s2);
    rccoc(s1);
    rccoc(s3);
});
s3.addEventListener('click', () => {
    ccoc(s3);
    rccoc(s2);
    rccoc(s1);
});


function nslm(y) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sign1.style.width = "100px";
                sign1.style.marginLeft = "86px";

                home.style.display = "flex";
                works.style.display = "flex";
                info.style.display = "none";

            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(y);

}
nslm(w1);

function nslm2(y) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sign1.style.width = "100px";
                sign1.style.marginLeft = "0px";

                home.style.display = "flex";
                works.style.display = "flex";
                info.style.display = "none";


            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(y);

}
nslm2(btn4);


if (sw > 1000) {
    aov2(s1);
    aov2(s2);
    aov2(s3);
    aov2(h1);
    aov2(h2);
    aov2(h3);
}

function aosfi(x) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                x.style.transition = "0.5s";
                x.style.opacity = "1";
            }
        });
    }, {
        threshold: 0.3
    });
    observer.observe(x);
}

btn3.addEventListener('click', () => {
    if (sw < 1000) {
        alert("d");
        aosfi(s1);
        aosfi(s2);
        aosfi(s3);
        aosfi(h1);
        aosfi(h2);
        aosfi(h3);
    }
});


btn5.addEventListener('click', () => {
    if (sw < 1000) {
        alert("d");
        aosfi(s1);
        aosfi(s2);
        aosfi(s3);
        aosfi(h1);
        aosfi(h2);
        aosfi(h3);
    }
});


function gtl(x, y) {
    x.addEventListener('click', () => {
        window.open(y, '-blank')
    });
}

gtl(btn6, "https://github.com/Ankan-Pal");
gtl(btn9, "https://discord.com/users/1152211104878043148");
gtl(btn8, "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHGhjFq6kNFMAAAAZPspJ-A513FWjlhQJCnTtOjH8Rtp5na6NSR8iDlyh-9CsHK8giTN4d1FrnY7FjFMhhXuHtL4SS7pzfczymEqdOooLPrhb54ouhJw_g2FeSV5DsK2Hust6M=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fankan-pal-00aa50315%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app");
gtl(btn7, "https://x.com/ankanpal224");
gtl(btn10, "https://ankanpaltodolist.netlify.app/");
gtl(btn11, "https://papaya-puppy-1dc650.netlify.app/");
gtl(btn12, "https://conunit224.netlify.app/");
gtl(btn13, "https://ganeshmisti.netlify.app/");

if (sw > 1000 && sw < 1200) {

    namecard.style.marginLeft = "100px";
}

function namecardani() {
    setTimeout(() => {
        transiton(names, '0.5s');
        names.style.color = "#fff";
    }, 600);
}

function nameoff() {
    setTimeout(() => {
        transiton(names, '0.05s');
        names.style.color = "transparent";
    }, 50);

}

const state = { IsNamecardON: false };;

function isonoff(state) {
    if (state.IsNamecardON === false) {
        namecard.style.transition = "0.5s";
        logon.style.transition = "0.3s";
        namecard.style.width = "200px"
        logon.style.scale = "0.85";
        logon.style.marginTop = "0.5px";
        names.textContent = "Ankan Pal";
        names.style.color = "transparent";

        namecardani();
        state.IsNamecardON = true;
    } else {
        nameoff();
        state.IsNamecardON = false;
        setTimeout(() => {
            namecard.style.transition = "0.5s";
            logon.style.transition = "0.3s";
            namecard.style.width = "50px";
            logon.style.scale = "1";
            logon.style.marginTop = "0px";
        }, 600);
    }
}


logon.addEventListener('click', () => {
    namecard.style.transition = "0.5s";
    logon.style.transition = "0.3s";

    isonoff(state);
    console.log(`Current state: ${state.IsNamecardON ? "ON" : "OFF"}`);
});


