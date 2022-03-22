document.getElementById("get-perms").onclick = () => {
    let vid = document.createElement("iframe");
    vid.id = "vid"
    vid.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&modestbranding&rel=0&loop=1&disablekb=1&fs=0&iv_load_policy=3"
    vid.frameBorder = 0;
    vid.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    vid.allowFullscreen = true;

    console.log("a")
    document.getElementById("breme").appendChild(vid)
    document.getElementById("addition").style.display = "flex"
    document.getElementById("get-perms").remove()
}