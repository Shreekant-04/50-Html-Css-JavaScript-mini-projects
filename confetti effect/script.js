function launchConfetti() {
    confetti({
        spread: 360,
        ticks: 200,
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 100,
        scalar: 3,
        shapes: ["image"],
        shapeOptions: {
            image: [
                { src: "https://particles.js.org/images/fruits/apple.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/avocado.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/banana.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/berries.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/cherry.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/grapes.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/lemon.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/orange.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/peach.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/pear.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/pepper.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/plum.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/star.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/strawberry.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/watermelon.png", width: 32, height: 32 },
                { src: "https://particles.js.org/images/fruits/watermelon_slice.png", width: 32, height: 32 },
            ],
        },
    });
}

function launchConfetti2() {
    confetti({
        spread: 360,
        ticks: 200,
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 100,
        scalar: 1,
        shapes: ["star"],
    });
}

function launchConfetti3() {
    confetti({
        spread: 360,
        ticks: 200,
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 100,
        scalar: 1,
        shapes: ["square", "circle"],
    });
}

function fireworks() {
    const duration = 15 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}
