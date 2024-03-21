// cartas.ts

function flipCard(card: HTMLElement) {
    card.classList.add('flipped');
}

function unflipCard(card: HTMLElement) {
    card.classList.remove('flipped');
}
