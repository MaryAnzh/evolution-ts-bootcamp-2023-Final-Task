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

  constructor() {
    makeObservable(this, {
      user: observable,
      slots: observable,
      setUser: action,
    });
  }

  setUser(user: string) {
    this.user = user;
  }

  spinSlot(slotIndex: number) {
    this.slots[slotIndex].isSpin = true;
    this.slots[slotIndex].isPause = false;
  }

  stopSlot(slotIndex: number) {
    //this.slots[slotIndex].isSpin = false;
    this.slots[slotIndex].isPause = true;

  }
}