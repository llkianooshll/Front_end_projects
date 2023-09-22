document.querySelector(".toggle-b").addEventListener("click", () => {
    if (document.getElementById("toggler").style.marginLeft != "29px") {
        document.getElementById("toggler").style.marginLeft = "29px"
        document.getElementById("month1").style.display = "none"
        document.getElementById("annual1").style.display = null
        document.getElementById("month2").style.display = "none"
        document.getElementById("annual2").style.display = null
        document.getElementById("month3").style.display = "none"
        document.getElementById("annual3").style.display = null
    } else {
        document.getElementById("toggler").style.marginLeft = null
        document.getElementById("month1").style.display = null
        document.getElementById("annual1").style.display = "none"
        document.getElementById("month2").style.display = null
        document.getElementById("annual2").style.display = "none"
        document.getElementById("month3").style.display = null
        document.getElementById("annual3").style.display = "none"
    }
})


