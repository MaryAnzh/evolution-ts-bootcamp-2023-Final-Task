import { action, makeObservable, observable } from "mobx";

export interface ISlot {
  isSpin: boolean,
  isPause: boolean,
  value: number,
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
      isPause: true,
      value: 0,
    },
    {
      isSpin: false,
      isPause: true,
      value: 0,
    },
    {
      isSpin: false,
      isPause: true,
      value: 0,
    },
  ];

  cards = [[0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7]];

  constructor() {
    makeObservable(this, {
      user: observable,
      slots: observable,
      setUser: action,
      spinSlot: action,
      stopSlot: action,
    });
  }

  setUser(user: string) {
    this.user = user;
  }

  spinSlot(slotIndex: number) {
    this.slots[slotIndex].isSpin = true;
    this.mixCard(slotIndex);
  }

  stopSlot(slotIndex: number) {
    this.slots[slotIndex].isSpin = false;
  }

  mixCard(slotNumber: number) {
    const random = Math.floor(Math.random() * 8);
    const arr = [...this.cards[slotNumber]];
    const arr2 = arr.splice(0, random);
    this.cards[slotNumber] = [...arr, ...arr2];
  }

}