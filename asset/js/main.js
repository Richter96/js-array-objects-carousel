/* Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
 */

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//dichiaiamo i pulsanti del dom 
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');



// prendiamo elemento della dom nel quale insrire un markup
const sliderEl = document.querySelector('.slider')

//diamo una funzione al tasto next
btnNext.addEventListener('click', function(){

})















/* console.log("FOR");
// creo un loop per inserire le immagini 
for (let i = 0; i < images.length; i++) {
    thiscard = images[i]
    console.log(i,thiscard)
} */
// ciclo con heach
// console.log("FOREACH");// si può mettere un consol log anche prima di un risultato
let activeImg = 1

images.forEach((immagine, i) => {
    const markupCard = generateMarkupCard(immagine.image, immagine.title, immagine.text)
    console.log(markupCard, i)
    sliderEl.insertAdjacentHTML('beforeend', markupCard)
    if (i === activeImg) {
        document.querySelector('.card').classList.add('active')
    } else {""}
})



// console.log(images[0])
function generateMarkupCard(img, title, text) {
    return `
    <div class="card">
        <img src="./asset/${img}" class="img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
        </div>
    </div>
    `
}