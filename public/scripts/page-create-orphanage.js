// create map
const map = L.map('mapid').setView([-23.9991, -46.4133], 16);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

let marker;

 /* create and add marker */
 map.on('click', (event) => {
     const lat = event.latlng.lat;
     const lng = event.latlng.lng;
     
     document.querySelector('[name = lat]').value = lat;
     document.querySelector('[name = lng]').value = lng;

     //remove marker
     marker && map.removeLayer(marker);
     
     //add icon layer
     marker = L.marker([lat, lng], { icon }).addTo(map); 
 })

 // add photo field
 function addPhotoField() {
     // pegar o container de fotos #images
     const container = document.querySelector('#images');
     // pegar o container para duplicar .new-upload
     const fieldsContainer = document.querySelectorAll('.new-upload');
     // realizar o clone da última imagem adicionada
     const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);
     
     // veriricar se o campo está vazio
     const input = newFieldContainer.children[0]
     if (input.value == "") {
         return
     }

     //limpar o campo antes de adicionar ao container #images
     newFieldContainer.children[0].value = ""
     // adicionar o clone ao container de #images
     container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length < 2) {
        // limpar o campo
        span.parentNode.children[0].value = "";
        return;
    }

    // deletar o campo
    span.parentNode.remove();

}

// seleção do sim e não
function toggleSelect(event) {
    // retirar a class active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active');
    })

    // colocar a class .active no botão clicado
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o input hidden com o valor 1 ou 0
    const input = document.querySelector('[name = "open_on_weekends"]');
    
    input.value = button.dataset.value;


}