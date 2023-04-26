export interface IMemoCard {
    value: number,
    url: string,
    isOpen: boolean,
}

export interface IMemoOpenCard {
    value: number,
    index: number
}

export interface IMemoCouple {
    cardId1: IMemoOpenCard | null,
    cardId2: IMemoOpenCard | null,
}