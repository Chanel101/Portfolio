document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is geladen!');

    // Definieer de constante voor de lijst met afbeeldingen
    const imageList = [
        { src: 'img/1holyraviolieindposter.png', title: 'Holy Ravioli Eindposter', description: 'Bij het vak vormgeving leerde ik werken met kleur en patronen. Daarnaast kreeg ik ook een layering & overprinting als stijl die ik moest toepassen.' },
        { src: 'img/2chanelcinema.png', title: 'Chanel Cinema', description: 'Beschrijving van project 2: Dit project gaat over een filmfestival branding.' },
        { src: 'img/3nsticketmachine.png', title: 'NS Ticketmachine', description: 'Beschrijving van project 3: Dit project betreft de herontwerpen van een ticketmachine voor de NS.' },
        { src: 'img/4kapiteinsnorhaar.png', title: 'Kapitein Snorhaar', description: 'Beschrijving van project 4: Illustratieproject voor een kinderboek.' },
        { src: 'img/5hemacupcakes.png', title: 'HEMA Cupcakes', description: 'Beschrijving van project 5: Productfotografie voor HEMA cupcakes.' },
        { src: 'img/6newproductdevelopment.png', title: 'New Product Development', description: 'Beschrijving van project 6: Ontwerp en ontwikkeling van een nieuw product.' },
        { src: 'img/7arduino.jpg', title: 'Arduino Project', description: 'Beschrijving van project 7: Een hardware project gemaakt met Arduino.' },
        { src: 'img/8expoprojectincluded.JPG', title: 'Expo Project Included', description: 'Beschrijving van project 8: Deelname aan een lokale expositie.' },
        { src: 'img/9satisfyers.png', title: 'Satisfyers Project', description: 'Beschrijving van project 9: Een productontwerp voor een klant.' }
    ];

    // Variabele om de huidige index van de afbeelding bij te houden
    let currentImageIndex = 0;

    // Functie om een afbeelding in de modal te openen
    function openModal(index) {
        currentImageIndex = index;
        const imageInfo = imageList[currentImageIndex];

        // Maak de modal dynamisch aan
        const modalElement = document.createElement('div');
        modalElement.id = 'imageModal';
        modalElement.className = 'modal';
        modalElement.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img class="modal-image" src="${imageInfo.src}" alt="${imageInfo.title}">
                <h2 class="modal-title">${imageInfo.title}</h2>
                <p class="modal-description">${imageInfo.description}</p>
            </div>
        `;

        document.body.appendChild(modalElement);

        // Toon de modal
        modalElement.style.display = 'block';

        // Sluit de modal bij klikken op de sluitknop
        const closeButton = modalElement.querySelector('.close');
        closeButton.addEventListener('click', () => {
            closeModal(modalElement);
        });

        // Sluit de modal bij klikken buiten de inhoud
        modalElement.addEventListener('click', (event) => {
            if (event.target === modalElement) {
                closeModal(modalElement);
            }
        });
    }

    // Functie om de modal te sluiten
    function closeModal(modalElement) {
        document.body.removeChild(modalElement);
    }

    // Voeg click-events toe aan afbeeldingen in de galerij
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });
});