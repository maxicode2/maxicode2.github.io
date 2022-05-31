let audio = new Audio("media/rick.mp3")

document.getElementById("get-perms").onclick = () => {
    audio.play()
    audio.onplaying = () => {
        document.getElementById("addition").style.display = "flex"
        document.getElementById("rage").style.display = "block"
        document.getElementById("get-perms").remove()
    }
}