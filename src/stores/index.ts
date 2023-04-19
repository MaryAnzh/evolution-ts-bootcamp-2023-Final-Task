import { action, makeObservable, observable } from "mobx";

export interface ISlot {
  isSpin: boolean,
  cards: number[],
}

export interface ISlots {
  slot0: ISlot,
  slot1: ISlot,
  slot2: ISlot,
}

export class Store {
  user = 'Guest';

  slots: ISlot[] = [
    {
      isSpin: false,
      cards: [...Array(8).keys()]
    },
    {
      isSpin: false,
      cards: [...Array(8).keys()]
    },
    {
      isSpin: false,
      cards: [...Array(8).keys()]

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

  constructor() {
    makeObservable(this, {
      user: observable,
      slots: observable,
      score: observable,
      setUser: action,
      startRound: action,
      setScore: action,
      setSlotCards: action,
      setSpin: action
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

  setSlotCards = (slotIndex: number, cards: number[]) => {
    this.slots[slotIndex].cards = cards;
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

  mixCard = (cards: number[]) => {
    const random = Math.floor(Math.random() * 8);
    const arr = [...cards];
    const arr2 = arr.splice(0, random);
    return [...arr, ...arr2];
  }

  checkResult = () => {
    const value0 = this.slots[0].cards[0];
    const value1 = this.slots[1].cards[0];
    const value2 = this.slots[2].cards[0];
    if (value0 === value1 && value0 === value2) {
      this.setScore(this.pointMap.jackpot);
    } else if (value0 === value1 || value0 === value2 || value2 === value1) {
      this.setScore(this.pointMap.bonus);
    }
  }
}