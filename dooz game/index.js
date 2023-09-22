let cicOrC = false
document.querySelector(".div-element1").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element1").style.display == "none") {
            document.getElementById("c-element1").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
        if (document.getElementById("cic-element1").style.display == "none") {
            document.getElementById("cic-element1").style.display = null
            cicOrC = false
        }
        winChekerCic()
    }
})
document.querySelector(".div-element2").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element2").style.display == "none") {
            document.getElementById("c-element2").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
            if (document.getElementById("cic-element2").style.display == "none") {
                document.getElementById("cic-element2").style.display = null
                cicOrC = false
            }
            winChekerCic()
    }
})
document.querySelector(".div-element3").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element3").style.display == "none") {
            document.getElementById("c-element3").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
        if (document.getElementById("cic-element3").style.display == "none") {
            document.getElementById("cic-element3").style.display = null
            cicOrC = false
        }
        winChekerCic()
    }
})
document.querySelector(".div-element4").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element4").style.display == "none") {
            document.getElementById("c-element4").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
        if (document.getElementById("cic-element4").style.display == "none") {
            document.getElementById("cic-element4").style.display = null
            cicOrC = false
        }
        winChekerCic()
    }
})
document.querySelector(".div-element5").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element5").style.display == "none") {
            document.getElementById("c-element5").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
        if (document.getElementById("cic-element5").style.display == "none") {
            document.getElementById("cic-element5").style.display = null
            cicOrC = false
        }
        winChekerCic()
    }
})
document.querySelector(".div-element6").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element6").style.display == "none") {
            document.getElementById("c-element6").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
        if (document.getElementById("cic-element6").style.display == "none") {
            document.getElementById("cic-element6").style.display = null
            cicOrC = false
        }
        winChekerCic()
    }
})
document.querySelector(".div-element7").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element7").style.display == "none") {
            document.getElementById("c-element7").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
        if (document.getElementById("cic-element7").style.display == "none") {
            document.getElementById("cic-element7").style.display = null
            cicOrC = false
        }
        winChekerCic()
    }
})
document.querySelector(".div-element8").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element8").style.display == "none") {
            document.getElementById("c-element8").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
        if (document.getElementById("cic-element8").style.display == "none") {
            document.getElementById("cic-element8").style.display = null
            cicOrC = false
        }
        winChekerCic()
    }
})
document.querySelector(".div-element9").addEventListener("click", () => {
    if (cicOrC == false) {
        if (document.getElementById("c-element9").style.display == "none") {
            document.getElementById("c-element9").style.display = null
            cicOrC = true
        }
        winChekerC()
    } else {
        if (document.getElementById("cic-element9").style.display == "none") {
            document.getElementById("cic-element9").style.display = null
            cicOrC = false
        }
        winChekerCic()
    }
})
const winChekerC = () => {
    if (document.getElementById("c-element1").style.display != "none" && document.getElementById("c-element2").style.display != "none" && document.getElementById("c-element3").style.display != "none") {
        document.getElementById("c-element1").classList.replace("text-danger", "text-success")
        document.getElementById("c-element2").classList.replace("text-danger", "text-success")
        document.getElementById("c-element3").classList.replace("text-danger", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("c-element4").style.display != "none" && document.getElementById("c-element5").style.display != "none" && document.getElementById("c-element6").style.display != "none") {
        document.getElementById("c-element4").classList.replace("text-danger", "text-success")
        document.getElementById("c-element5").classList.replace("text-danger", "text-success")
        document.getElementById("c-element6").classList.replace("text-danger", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("c-element7").style.display != "none" && document.getElementById("c-element8").style.display != "none" && document.getElementById("c-element9").style.display != "none") {
        document.getElementById("c-element7").classList.replace("text-danger", "text-success")
        document.getElementById("c-element8").classList.replace("text-danger", "text-success")
        document.getElementById("c-element9").classList.replace("text-danger", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("c-element2").style.display != "none" && document.getElementById("c-element5").style.display != "none" && document.getElementById("c-element8").style.display != "none") {
        document.getElementById("c-element2").classList.replace("text-danger", "text-success")
        document.getElementById("c-element5").classList.replace("text-danger", "text-success")
        document.getElementById("c-element8").classList.replace("text-danger", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("c-element1").style.display != "none" && document.getElementById("c-element4").style.display != "none" && document.getElementById("c-element7").style.display != "none") {
        document.getElementById("c-element1").classList.replace("text-danger", "text-success")
        document.getElementById("c-element4").classList.replace("text-danger", "text-success")
        document.getElementById("c-element7").classList.replace("text-danger", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("c-element3").style.display != "none" && document.getElementById("c-element6").style.display != "none" && document.getElementById("c-element9").style.display != "none") {
        document.getElementById("c-element3").classList.replace("text-danger", "text-success")
        document.getElementById("c-element6").classList.replace("text-danger", "text-success")
        document.getElementById("c-element9").classList.replace("text-danger", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("c-element3").style.display != "none" && document.getElementById("c-element5").style.display != "none" && document.getElementById("c-element7").style.display != "none") {
        document.getElementById("c-element3").classList.replace("text-danger", "text-success")
        document.getElementById("c-element5").classList.replace("text-danger", "text-success")
        document.getElementById("c-element7").classList.replace("text-danger", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("c-element1").style.display != "none" && document.getElementById("c-element5").style.display != "none" && document.getElementById("c-element9").style.display != "none") {
        document.getElementById("c-element1").classList.replace("text-danger", "text-success")
        document.getElementById("c-element5").classList.replace("text-danger", "text-success")
        document.getElementById("c-element9").classList.replace("text-danger", "text-success")
        document.getElementById("win").style.display = null
    }
}
const winChekerCic = () => {
    if (document.getElementById("cic-element1").style.display != "none" && document.getElementById("cic-element2").style.display != "none" && document.getElementById("cic-element3").style.display != "none") {
        document.getElementById("cic-element1").classList.replace("text-info", "text-success")
        document.getElementById("cic-element2").classList.replace("text-info", "text-success")
        document.getElementById("cic-element3").classList.replace("text-info", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("cic-element4").style.display != "none" && document.getElementById("cic-element5").style.display != "none" && document.getElementById("cic-element6").style.display != "none") {
        document.getElementById("cic-element4").classList.replace("text-info", "text-success")
        document.getElementById("cic-element5").classList.replace("text-info", "text-success")
        document.getElementById("cic-element6").classList.replace("text-info", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("cic-element7").style.display != "none" && document.getElementById("cic-element8").style.display != "none" && document.getElementById("cic-element9").style.display != "none") {
        document.getElementById("cic-element7").classList.replace("text-info", "text-success")
        document.getElementById("cic-element8").classList.replace("text-info", "text-success")
        document.getElementById("cic-element9").classList.replace("text-info", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("cic-element2").style.display != "none" && document.getElementById("cic-element5").style.display != "none" && document.getElementById("cic-element8").style.display != "none") {
        document.getElementById("cic-element2").classList.replace("text-info", "text-success")
        document.getElementById("cic-element5").classList.replace("text-info", "text-success")
        document.getElementById("cic-element8").classList.replace("text-info", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("cic-element1").style.display != "none" && document.getElementById("cic-element4").style.display != "none" && document.getElementById("cic-element7").style.display != "none") {
        document.getElementById("cic-element1").classList.replace("text-info", "text-success")
        document.getElementById("cic-element4").classList.replace("text-info", "text-success")
        document.getElementById("cic-element7").classList.replace("text-info", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("cic-element3").style.display != "none" && document.getElementById("cic-element6").style.display != "none" && document.getElementById("cic-element9").style.display != "none") {
        document.getElementById("cic-element3").classList.replace("text-info", "text-success")
        document.getElementById("cic-element6").classList.replace("text-info", "text-success")
        document.getElementById("cic-element9").classList.replace("text-info", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("cic-element3").style.display != "none" && document.getElementById("cic-element5").style.display != "none" && document.getElementById("cic-element7").style.display != "none") {
        document.getElementById("cic-element3").classList.replace("text-info", "text-success")
        document.getElementById("cic-element5").classList.replace("text-info", "text-success")
        document.getElementById("cic-element7").classList.replace("text-info", "text-success")
        document.getElementById("win").style.display = null
    }
    if (document.getElementById("cic-element1").style.display != "none" && document.getElementById("cic-element5").style.display != "none" && document.getElementById("cic-element9").style.display != "none") {
        document.getElementById("cic-element1").classList.replace("text-info", "text-success")
        document.getElementById("cic-element5").classList.replace("text-info", "text-success")
        document.getElementById("cic-element9").classList.replace("text-info", "text-success")
        document.getElementById("win").style.display = null
    }
}