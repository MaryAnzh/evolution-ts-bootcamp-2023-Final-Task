export type MemoCardType = {
    value: number,
    url: string,
    isOpen: boolean,
}

export type MemoOpenCardType = {
    value: number,
    index: number
}

export type MemoCoupleType = {
    cardId1: MemoOpenCardType | null,
    cardId2: MemoOpenCardType | null,
}