const createAudio = (src: string) => {
    const audio = new Audio();
    audio.src = src;
    return audio;
}

export const sounds = {
    stopSlot: [...Array(3).keys()].map(el => createAudio('./sounds/ring.mp3')),
    winRound: createAudio('./sounds/win.mp3'),
    winGame: createAudio('./sounds/winGame.mp3'),
    gameOver: createAudio('./sounds/game-over.mp3'),
    click: createAudio('./sounds/click.mp3'),
    startClick: createAudio('./sounds/startClick.mp3'),
}