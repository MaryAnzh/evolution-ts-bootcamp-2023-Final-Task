import { IMAGE_PICKER as I } from '~constants';
import type { CardType } from "~types";

const CARDS_COMMON = {
    zero: {
        id: 0,
        url: I.zero,
    },
    dollar: {
        id: 4,
        url: I.dollar,
    },
    seven: {
        id: 7,
        url: I.seven,
    },
};

const { zero, dollar, seven } = CARDS_COMMON;

export const BLACK_CARDS: CardType[] = [
    zero,
    {
        id: 1,
        url: I.raspberry,
    },
    {
        id: 2,
        url: I.pineapple,
    },
    {
        id: 3,
        url: I.bells
    },
    dollar,
    {
        id: 5,
        url: I.cherry,
    },
    {
        id: 6,
        url: I.drop,
    },
    seven,
];

export const SEA_CARDS: CardType[] = [
    zero,
    {
        id: 1,
        url: I.bubble,
    },
    {
        id: 2,
        url: I.drop,
    },
    {
        id: 3,
        url: I.crown,
    },
    dollar,
    {
        id: 5,
        url: I.moneyCard,
    },
    {
        id: 6,
        url: I.perl,
    },
    seven,
];

export const FAIRY_CARDS: CardType[] = [
    zero,
    {
        id: 1,
        url: I.unicorn,
    },
    {
        id: 2,
        url: I.moon,
    },
    {
        id: 3,
        url: I.star,
    },
    dollar,
    {
        id: 5,
        url: I.goldenBall,
    },
    {
        id: 6,
        url: I.crown,
    },
    seven,
]; 