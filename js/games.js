for(let game of document.body.getElementsByClassName("game")) {
    game.onclick = () => {
        window.location = game.getAttribute("href");
    }
}