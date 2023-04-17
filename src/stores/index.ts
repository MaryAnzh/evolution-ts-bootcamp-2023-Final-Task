import { action, makeObservable, observable } from "mobx";

export interface ISlots {
  slot1: number,
  slot2: number,
  slot3: number,
}

export class Store {
  user = 'Guest';
  slots: ISlots = {
    slot1: 0,
    slot2: 0,
    slot3: 0,
  };

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
}