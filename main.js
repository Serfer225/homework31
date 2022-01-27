
let buttonResume = document.getElementById("button1")
let buttonBackground = document.getElementById("button2")
let buttonColor = document.getElementById("button3")
let resume = document.getElementById("resume")
let buttonResumeClose = document.getElementById("button1_2")
let body = document.getElementById("body")
let buttonBackgroundClose = document.getElementById("button2_1")
let buttonColorClose = document.getElementById("button3_1")
let table = document.getElementById("table")

function Resume(){
    resume.style.display = "block"
    buttonResume.style.display = "none"
    buttonResumeClose.style.display = "flex"
}
buttonResume.addEventListener("click",Resume)

function ResumeClose(){
    resume.style.display = "none"
    buttonResumeClose.style.display = "none"
    buttonResume.style.display = "flex"
}
buttonResumeClose.addEventListener("click",ResumeClose)

function Background(){
    body.style.backgroundColor = "red"
    buttonBackgroundClose.style.display = "flex"
    buttonBackground.style.display = "none"
    table.style.backgroundColor = "orange"
}
buttonBackground.addEventListener("click",Background)

function BackgroundClose(){
    body.style.backgroundColor = "white"
    buttonBackgroundClose.style.display = "none"
    buttonBackground.style.display = "flex"
    table.style.backgroundColor = "rgb(184, 174, 170)"
}
buttonBackgroundClose.addEventListener("click",BackgroundClose)

function TextColor(){
    body.style.color = ("yellowgreen")
    buttonColor.style.display = ("none")
    buttonColorClose.style.display = ("block")
}
buttonColor.addEventListener("click",TextColor)

function TextColorClose(){
    body.style.color = ("black")
    buttonColor.style.display = ("block")
    buttonColorClose.style.display = ("none")
}
buttonColorClose.addEventListener("click",TextColorClose)