document.addEventListener('DOMContentLoaded', () => {
    // Voeg je interactiviteit toe hier
    console.log('Document is geladen!');
});



function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Sluit de pop-up wanneer de gebruiker buiten de inhoud klikt
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
}