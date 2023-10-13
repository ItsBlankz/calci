const buttons = document.querySelectorAll("input")
const screen = document.querySelector("#screen")
let string = ""
const numPad = document.querySelector("#number-pad")

const themes = document.querySelectorAll("button")

for (t_btn of themes) {
    t_btn.addEventListener("click", (e) => {
        if (e.target.id === "light") {
            document.body.classList.remove("contrast-theme")
            document.body.classList.add("light-theme")
        }
        else if (e.target.id === "dark") {
            document.body.classList.remove("light-theme", "contrast-theme")
        }
        else if (e.target.id === "contrast") {
            document.body.classList.remove("light-theme")
            document.body.classList.add("contrast-theme")
        }
    })
}

function addToScreen(value) {
    if (value !== "DEL" && value !== "RESET"){
        string += String(value)
        screen.innerText += value
    }
}

for (btn of buttons) {
    btn.addEventListener("click", function (e) {
        if (e.target.id == "equate") {
            try {
                let solution = String(eval(string))
                screen.innerText = solution
                string = solution
            }
            catch (e) {
                screen.innerText = "Error"
                solution = ''
                string = ''
            }
        }
        else {
            if (e.target.id === "multiply") {
                string += "*"
                screen.innerText += e.target.value
            }
            else if (e.target.value === "RESET") {
                string = ''
                screen.innerText = ""
                solution = ""
            }
            else if (e.target.value === "DEL") {
                if (screen.innerText === "") {
                    
                }
                else {
                    screen.innerText = ""
                    string = string.substring(0, string.length - 1)
                    screen.innerText = string
                }
            }
            else {
                addToScreen(e.target.value)
            }
        }
    })
}