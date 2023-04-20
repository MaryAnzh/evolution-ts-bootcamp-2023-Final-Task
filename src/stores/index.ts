import { action, makeObservable, observable } from "mobx";
import { ICard, blackCards, seaCards } from "../data/cards";
import { ThemeEnum } from "../themes/theme.interface";

export interface ISlot {
  isSpin: boolean,
  cards: ICard[],
}

export interface ISlots {
  slot0: ISlot,
  slot1: ISlot,
  slot2: ISlot,
}

export class Store {
  user = 'Guest';

  theme = {
    black: true,
    sea: false,
  };

  slots: ISlot[] = [
    {
      isSpin: false,
      cards: []
    },
    {
      isSpin: false,
      cards: []
    },
    {
      isSpin: false,
      cards: []
    },
  ];

  score = 100;

  storeConst = {
    spinTime: 1000,
  };

  pointMap = {
    roundCost: -10,
    jackpot: 1000,
    bonus: 30
  };

  themesImg = {
    black: [],
    sea: [],
  }

  constructor() {
    this.slots.forEach((slot, i) => {
      if (this.theme.black) {
        this.setSlotCards(i, blackCards);
      }
      if (this.theme.sea) {
        this.setSlotCards(i, seaCards);
      }
    });

    makeObservable(this, {
      user: observable,
      slots: observable,
      score: observable,
      setUser: action,
      startRound: action,
      setScore: action,
      setSlotCards: action,
      setSpin: action,
      setTheme: action,
    });
  }

  //setters
  setUser = (user: string) => {
    this.user = user;
  }
  setScore = (point: number) => {
    this.score += point;
  }

  setSpin = (i: number, value: boolean) => {
    this.slots[i].isSpin = value;
  }

  setSlotCards = (slotIndex: number, cards: ICard[]) => {
    this.slots[slotIndex].cards = cards;
  }

  setTheme = (theme: ThemeEnum) => {
    if (theme === ThemeEnum.black) {
      this.slots.forEach((slot, i) => {
        this.setSlotCards(i, blackCards);
      });
    }
    if (theme === ThemeEnum.sea) {
      this.slots.forEach((slot, i) => {
        this.setSlotCards(i, seaCards);
      });
    }
  }

  //round logic
  startRound = () => {
    this.setScore(this.pointMap.roundCost);
    this.slots.forEach((el) => {
      el.isSpin = true;
    });
    this.finishRound();
  }

  finishRound = () => {
    this.slots.map((slot, i) => {
      const timer = setTimeout(() => {
        this.setSlotCards(i, this.mixCard(slot.cards));
        this.setSpin(i, false);
        if (i === this.slots.length - 1) {
          this.checkResult();
          if (this.score <= 0) {
            console.log('Game over');
          }
          if (this.score > 1500) {
            console.log('You winner!!!');
          }
        }
        clearTimeout(timer);
      }, this.storeConst.spinTime * (i + 1));
    });
  }

  //utils

  mixCard = (cards: ICard[]) => {
    const random = Math.floor(Math.random() * 8);
    const arr = [...cards];
    const arr2 = arr.splice(0, random);
    return [...arr, ...arr2];
  }

  checkResult = () => {
    const value0 = this.slots[0].cards[0].id;
    const value1 = this.slots[1].cards[0].id;
    const value2 = this.slots[2].cards[0].id;
    if (value0 === value1 && value0 === value2) {
      this.setScore(this.pointMap.jackpot);
    } else if (value0 === value1 || value0 === value2 || value2 === value1) {
      this.setScore(this.pointMap.bonus);
    }
  }
}