document.addEventListener("DOMContentLoaded", function(){
    let ghostElement = document.getElementsByClassName("ghost");
    let pacmanElement =  document.getElementsByClassName("pacman")
    //console.log(ghostMov.x)
    function checkCollision(){
        let ghostMov = ghostElement[0].getBoundingClientRect();
        let pacmanMov = pacmanElement[0].getBoundingClientRect();
        if ((pacmanMov.x+20) > ghostMov.x && ghostMov.x >360) {
            //window.location.href="./home.html"
            window.location.href='./portafolio.html'
        }
    }
    setInterval(checkCollision, 70)
})