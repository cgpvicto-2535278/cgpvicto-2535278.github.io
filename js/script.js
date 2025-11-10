var faah = new Audio('../assets/audio/fuck.mp3');
var bouton = document.getElementById("bouton");

bouton.addEventListener('click', JouerSon);

function JouerSon(){
    faah.play();
    console.log("allo");
}