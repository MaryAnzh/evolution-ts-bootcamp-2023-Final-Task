export interface ICard {
    id: number,
    name: string
    url: string,
}

const cardsCommon: ICard[] = [
    {
        id: 0,
        name: 'zero',
        url: './assets/zero.png'
    },
    {
        id: 4,
        name: 'dollar',
        url: './assets/dollar.png'
    },
    {
        id: 7,
        name: 'seven',
        url: './assets/seven.png',
    },

]

export const blackCards: ICard[] = [
    cardsCommon[0],
    {
        id: 1,
        name: '',
        url: './assets/raspberry.png',
    },
    {
        id: 2,
        name: '',
        url: './assets/pineapple.png',
    },
    {
        id: 3,
        name: '',
        url: './assets/bells.png',
    },
    cardsCommon[1],
    {
        id: 5,
        name: '',
        url: './assets/cherry.png',
    },
    {
        id: 6,
        name: '',
        url: './assets/drop.png',
    },
    cardsCommon[2],
];
export const seaCards: ICard[] = [
    {
        id: 0,
        name: '',
        url: './assets/bubble.png'
    },
    {
        id: 1,
        name: '',
        url: './assets/mermaid.png',
    },
    {
        id: 2,
        name: '',
        url: './assets/drop.png',
    },
    {
        id: 3,
        name: '',
        url: './assets/pearl.png',
    },
    cardsCommon[1],
    {
        id: 5,
        name: '',
        url: './assets/money.png',
    },
    {
        id: 6,
        name: '',
        url: './assets/crown.png',
    },
    cardsCommon[2],
]; 