function fadeInOutpopUp(openBtn, closeBtn, overlay) {

    'use strict';

    function appearancePopup() {
        document.body.style.overflow = 'hidden';
        let opacity = 0.01;
        overlay.style.display = 'block';
        overlay.style.opacity = opacity;
        let requestId = requestAnimationFrame(function animate() {
            overlay.style.opacity = opacity;
            opacity += 0.1 * opacity;
            if (opacity < 1) {
                requestAnimationFrame(animate);
            } else {
                overlay.style.opacity = 1;
            }
        })
    }

    function disappearancePopup() {
        let opacity = 1;
        let requestId = requestAnimationFrame(function animate() {
            overlay.style.opacity = opacity;
            opacity -= 0.05 * opacity;
            if (opacity > 0.2) {
                requestAnimationFrame(animate);
            } else {
                overlay.style.display = 'none';
                overlay.style.opacity = '';
            };
        })
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', appearancePopup);
    overlay.addEventListener('click', disappearancePopup);
    closeBtn.addEventListener('click', disappearancePopup);
}