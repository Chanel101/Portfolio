document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is geladen!');

    // Definieer de constante voor de lijst met afbeeldingen
    const imageList = [
        { src: 'img/1holyraviolieindposter.png', title: 'Holy Ravioli Eindposter', description: 'Bij het vak vormgeving leerde ik werken met kleur en patronen. Daarnaast kreeg ik ook een layering & overprinting als stijl die ik moest toepassen. Ik leerde hier hoe ik moet afstappen van mijn idee en verschillende dingen moet leren uitproberen, wat toch best moeilijk was. Hier wil ik graag verder in groeien om een goede ontwerper te worden.' },
        { src: 'img/2chanelcinema.png', title: 'Chanel Cinema', description: 'Ik mocht een website ontwerpen in alleen html en css over een onderwerp naar keuze. In de zomervakantie voor school begon was ik al begonnen met de basis te leren over html en css om er zo voor te zorgen dat ik het coderen al herkende en dat het niet volledig nieuw zou zijn voor mij. Het was heel leuk dat ik het mocht doen over wat ik wilde, daarom heb ik gekozen voor films omdat ik heel erg graag over films leer en ze ook graag kijk.' },
        { src: 'img/3nsticketmachine.png', title: 'NS Ticketmachine', description: 'Tijdens het vak UCD leerde ik werken over hoe je het beste onderzoek doet naar de doelgroep en wat er het beste past voor de doelgroep. Hier heb ik deskresearch gedaan, voorbeelden gezocht in mijn eigen omgeving, een persona gemaakt, interviews gedaan met reizigers op het station, ...' },
        { src: 'img/4kapiteinsnorhaar.png', title: 'Kapitein Snorhaar', description: 'We moesten aan het einde van Blok 1 een duurzaam project kiezen in Amsterdam en daarvoor een website coderen in html en css, met alleen eigen content. Ik heb beeldmateriaal gebruikt die ik getrokken had van de Poezenboot. Jammer genoeg was het asiel in verbouwing en heb ik geen beeldne kunnen maken van de katten zelf, als alternatief had ik al afbeeldingen van verschillende katten en heb ik die gebruikt. Daarnaast heb ik alles zelf getekend via Illustrator.' },
        { src: 'img/5hemacupcakes.png', title: 'HEMA Cupcakes', description: 'Bij het vak Human Computer Interaction kreeg ik de opdracht om voor de Hema een gebruiksvriendelijkere interface te ontwerpen. Al vrij snel had ik door dat er heel wat verschillende ontwerpen zijn die je kan maken, maar dat het niet zo makkelijk is. Je moet met best wel wat verschillende aspecten rekening houden.' },
        { src: 'img/6newproductdevelopment.png', title: 'New Product Development', description: 'New Product Development, daar leerde ik met verschillende ontwerpmethodes te werken om de ervaring voor een bepaalde persona die naar de film gaat bij Pathé te verbeteren. De verschillende ontwerpmethodes die ik hier geleerd heb zijn: Crazy 8, dotvoting, ideekaart, conceptkaart, Harris profiel, ...' },
        { src: 'img/7arduino.jpg', title: 'Arduino Project', description: 'Emerging technologie was helemaal nieuw voor mij, maar super interessant. Naast het leren werken met AI en Unity, had ik meer motivatie om te leren werken met Arduino en heb ik hiervoor ook een automatisch luikje gemaakt met een motor en een LED-strip die gebruikt zou kunnen worden voor een kattenbak. Ik had graag ook met een speaker leren werken maar dat is me jammer genoeg niet gelukt. Dit had ik heel graag willen laten werken maar na 2 dagen proberen heb ik dat opgegeven.' },
        { src: 'img/8expoprojectincluded.JPG', title: 'Expo Project Included', description: 'Aah, project Included was een ervaring. Hier kozen we een onderwerp. Guess what? Ik koos het onderwerp "filmnerds" Hiervoor ontworp ik in duo een website waar de community van mijn opleiding samen kan komen en zien wie er in de opleiding een filmliefhebber is. We hadden ook een analoog aspect toegevoegd: The Walk of Filmgekkies, hier kreeg je een walk of fame met sterren waarop een qr-code staat die je kan scannen en hier kan je de filmgekkie van de opleiding beter leren kennen. Op de website kan je ook jezelf toevoegen en verwerken wij de makers van de website, de filmgekkie in hun favoriete filmposter. Dit hadden we gemaakt in Figma.' },
        { src: 'img/9satisfyers.png', title: 'Satisfyers Project', description: 'Het passieporject was het laatste project van het jaar. Na brainstormen met mijn team van 4, kwamen we tot een consensus om een boek te maken over het plezier van de vrouw/mensen die zich identificeren als vrouw. Ons boek moest ook een maatschappelijke waarde hebben en dat werd voor ons emancipatie. Na drie weken hadden we een boek in elkaar gezet van ongeveer 25 bladzijdes. In deze drie weken heb ik in Illustrator de satisfyers getekend, heb ik de tekst geschreven voor de satisfyers rubriek, het orgasme rubriek en ook de referentie pagina heb ik onderzoek gedaan. Daarnaast hebben we op school een Makerslab, hier heb ik de stickermachine, de lasercutter, de riso-printer, de vacuummachine getest en gekeken wat er voor ons het beste was. We hebben ook interactieve elementen toegepast in ons boek zoals; een spiegeltje, en een vacuumgetrokken vulva in EVA foam. Het boek neemt de lezer mee met ons hoofdpersonage en laat de lezer hun lichaam beter leren kennen en leert hun ook minder schaamte te hebben over hun vulva/vagina/borsten en lichaamshaar.' }
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