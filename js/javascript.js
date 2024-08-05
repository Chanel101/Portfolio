document.addEventListener('DOMContentLoaded', () => {
    // Voeg je interactiviteit toe hier
    console.log('Document is geladen!');
});

// Definieer de constante voor de lijst met afbeeldingen
const imageList = [
    { src: 'img/satisfyers.png', title: 'Project 1', description: 'Beschrijving van project 1' },
    { src: 'img/project2.jpg', title: 'Project 2', description: 'Beschrijving van project 2' },
    { src: 'img/project3.jpg', title: 'Project 3', description: 'Beschrijving van project 3' }
    // Voeg hier meer afbeeldingen toe
];

// Constante voor het modal-element en inhoudselementen
const modalElement = document.getElementById('imageModal');
const modalImage = modalElement.querySelector('.modal-image');
const modalTitle = modalElement.querySelector('.modal-title');
const modalDescription = modalElement.querySelector('.modal-description');
const closeButton = modalElement.querySelector('.close');

// Variabele om de huidige index van de afbeelding bij te houden
let currentImageIndex = 0;

// Variabele om bij te houden of de modal open is
let isModalOpen = false;

// Functie om een afbeelding in de modal te openen
function openModal(index) {
    currentImageIndex = index;
    const imageInfo = imageList[currentImageIndex];
    modalImage.src = imageInfo.src;
    modalTitle.textContent = imageInfo.title;
    modalDescription.textContent = imageInfo.description;
    modalElement.style.display = 'block';
    isModalOpen = true;
}

// Functie om de modal te sluiten
function closeModal() {
    modalElement.style.display = 'none';
    isModalOpen = false;
}

// Voeg click-events toe aan afbeeldingen in de galerij
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openModal(index));
});

// Voeg een click-event toe aan de sluitknop van de modal
closeButton.addEventListener('click', closeModal);

// Sluit de modal als je buiten de inhoud klikt
modalElement.addEventListener('click', (event) => {
    if (event.target === modalElement) {
        closeModal();
    }
});