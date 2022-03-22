class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopnum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopnum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }

        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<h4 id="Describe">' + this.txt + '</h4>';

        var that = this;
        var delta = 300;
        Math.random() * 100;

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopnum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');

    for (var i = 0; i < elements.length; ++i) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');

        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "portfolio.css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666}";

    document.body.appendChild(css);
};

function doMouseOverLinkedIn() {
    document.getElementById("link1").src = "./images/linkedin-on.jpg";
}

function doMouseOutLinkedIn() {
    document.getElementById("link1").src = "./images/linkedin.jpg";
}

function doMouseOverGmail() {
    document.getElementById("link2").src = "./images/gmail-color.jpg";
}

function doMouseOutGmail() {
    document.getElementById("link2").src = "./images/gmail.jpg";
}

function doMouseOverTwitter() {
    document.getElementById("link3").src = "./images/twitter-color.jpg";
}

function doMouseOutTwitter() {
    document.getElementById("link3").src = "./images/twitter.jpg";
}

function doMouseOverWordpress() {
    document.getElementById("link5").src = "./images/wordpress-on.jpg";
}

function doMouseOutWordpress() {
    document.getElementById("link5").src = "./images/wordpress.jpg"
}

function doMouseOverDribbble() {
    document.getElementById("link7").src = "./images/dribbble-on_100px.png";
}

function doMouseOutDribbble() {
    document.getElementById("link7").src = "./images/dribbble_100px.png"
}

