const quotes = [
    "\"Le seul endroit où le succès vient avant le travail, c'est dans le dictionnaire.\" - Vidal Sassoon",
    "\"Ne rêve pas ta vie, vis tes rêves.\" - Anonyme",
    "\"Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.\" - Winston Churchill",
    "\"La motivation vous sert de départ. L'habitude vous fait continuer.\" - Jim Ryun",
    "\"La seule façon de faire du bon travail est d'aimer ce que vous faites.\" - Steve Jobs"
];

const challenges = [
    "Aujourd'hui, prends 10 minutes pour méditer.",
    "Écris trois choses pour lesquelles tu es reconnaissant.",
    "Fais une promenade de 15 minutes.",
    "Lis un chapitre d'un livre inspirant.",
    "Prends 5 minutes pour respirer profondément et te détendre."
];

let flames = [];
let gameInterval;
let score = 0;

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

function generateChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    document.getElementById('challenge').textContent = challenges[randomIndex];
}

function startGame() {
    document.getElementById('flameGame').style.display = 'block';
    score = 0;
    document.getElementById('score').textContent = score;
    flames = [];
    gameInterval = setInterval(addFlame, 1000);
}

function addFlame() {
    const flameContainer = document.getElementById('flameContainer');
    const flame = document.createElement('div');
    flame.classList.add('flame');
    flame.style.left = `${Math.random() * 90}%`;
    flame.addEventListener('click', () => {
        flame.remove();
        score++;
        document.getElementById('score').textContent = score;
    });
    flameContainer.appendChild(flame);
    flames.push(flame);
    setTimeout(() => {
        if (flame.parentNode) {
            endGame();
        }
    }, 5000);
}

function endGame() {
    clearInterval(gameInterval);
    flames.forEach(flame => flame.remove());
    flames = [];
    alert(`Jeu terminé! Votre score est de ${score}`);
    document.getElementById('flameGame').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quoteButton').addEventListener('click', generateQuote);
    document.getElementById('challengeButton').addEventListener('click', generateChallenge);
    document.getElementById('startGameButton').addEventListener('click', startGame);
});
