function redirectToWhatsApp() {
    const url = "https://wa.me/62895351826933?text=iyaa%20aku%20mau";
    window.location.href = url;
}

function moveButton() {
    const button = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
