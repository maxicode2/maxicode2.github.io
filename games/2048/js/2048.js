let trig = document.getElementById("bean-credits-trigger")
let cred = trig.parentElement
cred.setAttribute("state", "hidden")
trig.onclick = () => {
    if(cred.getAttribute("state") === "hidden") cred.setAttribute("state", "revealed")
    else cred.setAttribute("state", "hidden")
}