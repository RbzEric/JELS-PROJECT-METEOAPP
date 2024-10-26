let villeChoisie;

if ("geolocation" in navigator){

}
else {
    villeChoisie = 'Madagascar';
    recevoirTemperature(villeChoisie);
}

let btn = document.querySelector('#changer');
btn.addEventListener('click',() => {
    villeChoisie = prompt("Quelle ville souhaitez-vous voir?");
    recevoirTemperature(villeChoisie);
});
function recevoirTemperature(ville){
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville  + '&appid=375455d2da1db05cd52580fb82987735&units=metric';

let requette = new XMLHttpRequest();
requette.open('GET',url);
requette.responseType = 'json',
requette.send();

requette.onload = function() {
    if(requette.readyState === XMLHttpRequest.DONE){
        if(requette.status === 200){
            let reponse = requette.response;
            let temperatureDuPays = reponse.main.temp;
            let ville = reponse.name;
            document.querySelector('#temperature_label').textContent = temperatureDuPays ;
            document.querySelector('#ville').textContent = ville;
            console.log(temperatureDuPays);
            console.log(ville);
        }
    }
}
}
