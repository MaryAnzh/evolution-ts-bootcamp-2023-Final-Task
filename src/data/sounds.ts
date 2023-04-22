const createAudio = (src: string) => {
    const audio = new Audio();
    audio.src = src;
    return audio;
}

export const sounds = {
    stopSlot: [...Array(3).keys()].map(el => createAudio('./sounds/ring.mp3')),
    winCards: createAudio('./sounds/win.mp3'),
}