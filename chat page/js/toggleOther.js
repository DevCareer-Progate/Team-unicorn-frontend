function toggle() {
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    blur.classList.toggle('noscroll');
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
}