import type { CardType } from "../types";

export const cardsCommon: CardType[] = [
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

export const BLACK_CARDS: CardType[] = [
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

export const SEA_CARDS: CardType[] = [
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
        url: './assets/crown.png',
    },
    cardsCommon[1],
    {
        id: 5,
        url: './assets/money-card.png',
    },
    {
        id: 6,
        url: './assets/pearl.png',
    },
    cardsCommon[2],
];

export const FAIRY_CARDS: CardType[] = [
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
        url: './assets/golden-ball.png',
    },
    {
        id: 6,
        url: './assets/crown.png',
    },
    cardsCommon[2],
]; 