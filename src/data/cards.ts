export interface ICard {
    id: number,
    url: string,
}

const cardsCommon: ICard[] = [
    {
        id: 0,
        url: './assets/zero.png'
    },
    {
        id: 4,
        url: './assets/dollar.png'
    },
    {
        id: 7,
        url: './assets/seven.png',
    },

]

export const blackCards: ICard[] = [
    cardsCommon[0],
    {
        id: 1,
        url: './assets/raspberry.png',
    },
    {
        id: 2,
        url: './assets/pineapple.png',
    },
    {
        id: 3,
        url: './assets/bells.png',
    },
    cardsCommon[1],
    {
        id: 5,
        url: './assets/cherry.png',
    },
    {
        id: 6,
        url: './assets/drop.png',
    },
    cardsCommon[2],
];

export const seaCards: ICard[] = [
    cardsCommon[0],
    {
        id: 1,
        url: './assets/bubble.png',
    },
    {
        id: 2,
        url: './assets/drop.png',
    },
    {
        id: 3,
        url: './assets/seven.png',
    },
    cardsCommon[1],
    {
        id: 5,
        url: './assets/money.png',
    },
    {
        id: 6,
        url: './assets/crown.png',
    },
    {
        id: 7,
        url: './assets/pearl.png',
    },
];

export const fairyCards: ICard[] = [
    cardsCommon[0],
    {
        id: 1,
        url: './assets/unicorn.png',
    },
    {
        id: 2,
        url: './assets/moon.png',
    },
    {
        id: 3,
        url: './assets/star.png',
    },
    cardsCommon[1],
    {
        id: 5,
        url: './assets/seven.png',
    },
    {
        id: 6,
        url: './assets/crown.png',
    },
    {
        id: 7,
        url: './assets/gold-button.png',
    },
]; 