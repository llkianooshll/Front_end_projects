window.addEventListener("scroll", () => {
    document.getElementById("sct").style.opacity = `${100 - window.scrollY}%`
    if (window.scrollY <= 7500 && window.scrollY >= 1288) {
        document.getElementById("hover-sec").classList.add("fixed-top")
    } else (document.getElementById("hover-sec").classList.remove("fixed-top"))
    if (window.scrollY >= 2012) {
        document.querySelectorAll(".sec-2-word").forEach((item) => (
            item.classList.add("word-piece", "shadow", "p-1")
        ))
    } if (window.scrollY < 2012) {
        document.querySelectorAll(".sec-2-word").forEach((item) => (
            item.classList.remove("word-piece", "shadow", "p-1")
        ))
    }
    if (window.scrollY <= 11785 && window.scrollY >= 9400) {
        document.getElementById("hover-sec-2").classList.add("fixed-top")
    } else (document.getElementById("hover-sec-2").classList.remove("fixed-top"))
    if (window.scrollY <= 11785 && window.scrollY >= 10232) {
        document.getElementById("heart").style.display = null
        document.getElementById("heart").style.opacity = "0%"

        document.getElementById("heart").style.opacity = `${11785 - window.scrollY -250}%`

    } else {
        document.getElementById("heart").style.display = "none"
    }
    if (window.scrollY >= 9400) {
        document.querySelectorAll(".sec-2-word-2").forEach((item) => (
            item.classList.add("word-piece", "shadow", "p-1")
        ))
    } if (window.scrollY < 9400) {
        document.querySelectorAll(".sec-2-word-2").forEach((item) => (
            item.classList.remove("word-piece", "shadow", "p-1")
        ))
    }
    if (window.scrollY <= 15870 && window.scrollY >= 13220) {
        document.getElementById("hover-sec-4").classList.add("fixed-top")
    } else (document.getElementById("hover-sec-4").classList.remove("fixed-top"))
    if (window.scrollY <= 15870 && window.scrollY >= 14500) {
        document.getElementById("present").style.display = null
        document.getElementById("present").style.opacity = "0%"

        document.getElementById("present").style.opacity = `${15870 - window.scrollY-250}%`
    } else {
        document.getElementById("heart").style.display = "none"
    }
    if (window.scrollY >= 13220) {
        document.querySelectorAll(".sec-2-word-4").forEach((item) => (
            item.classList.add("word-piece", "shadow", "p-1")
        ))
    } if (window.scrollY < 13220) {
        document.querySelectorAll(".sec-2-word-4").forEach((item) => (
            item.classList.remove("word-piece", "shadow", "p-1")
        ))
    }
    
    if (window.scrollY <= 18000 && window.scrollY >= 16500) {
        document.getElementById("hover-5").style.display = null
        document.getElementById("hover-sec-5").classList.add("fixed-top")
    } else (document.getElementById("hover-sec-5").classList.remove("fixed-top"),
    document.getElementById("hover-5").style.display = "none"
    )
    if (window.scrollY >= 16500) {
        document.querySelectorAll(".sec-2-word-5").forEach((item) => (
            item.classList.add("word-piece", "shadow", "p-1")
        ))
    } if (window.scrollY < 16500) {
        document.querySelectorAll(".sec-2-word-5").forEach((item) => (
            item.classList.remove("word-piece", "shadow", "p-1")
        ))
    }

    if (window.scrollY <= 20600 && window.scrollY >= 18000) {
        document.getElementById("hover-6").style.display = null
        document.getElementById("hover-sec-6").classList.add("fixed-top")
    } else (document.getElementById("hover-sec-6").classList.remove("fixed-top"),
    document.getElementById("hover-6").style.display = "none"
    )
    if (window.scrollY >= 18000) {
        document.querySelectorAll(".sec-2-word-6").forEach((item) => (
            item.classList.add("word-piece", "shadow", "p-1")
        ))
    } if (window.scrollY < 18000) {
        document.querySelectorAll(".sec-2-word-6").forEach((item) => (
            item.classList.remove("word-piece", "shadow", "p-1")
        ))
    }

})

document.querySelector("#butn").addEventListener("click",(e)=>{
    const sendBtn = document.getElementById("inpt").value
    localStorage.setItem("محتوای ارسال شده", sendBtn)
})
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};