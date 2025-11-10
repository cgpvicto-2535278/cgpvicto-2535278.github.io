var faah = new Audio('../assets/audio/fuck.mp3');
var bouton = document.getElementById("bouton");

bouton.addEventListener('click', JouerSon);

function JouerSon(){
    bouton.classList.remove("allo");
    bouton.classList.remove("allo");
    faah.play();
    console.log("allo");
    bouton.classList.add("allo");
}