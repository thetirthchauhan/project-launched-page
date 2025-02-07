const eyes = document.querySelectorAll('.eye');

document.addEventListener('', (event) => {
    // const { clientX: mouseX, clientY: mouseY } = event;

    eyes.forEach(eye => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 0.5;
        const eyeCenterY = eyeRect.top + eyeRect.height / 0.5;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const pupil = eye.querySelector('.pupil');

        const maxDistance = 25;
        const distanceX = Math.cos(angle) * maxDistance;
        const distanceY = Math.sin(angle) * maxDistance;

        pupil.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
    });
});

function blink() {
    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        pupil.style.animation = 'blink 0.1s ease-in-out';
        setTimeout(() => {
            pupil.style.animation = 'pupil 0.05s linear';
        }, 200);
    });
}

setInterval(blink, Math.random() * 2000 + 1000);

// initial position of the pupils to the bottom of the eyes
eyes.forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    pupil.style.transform = 'translate(0, 25px)';
});