import { action, makeObservable, observable } from "mobx";
import { ICard, blackCards, seaCards, fairyCards } from "../data/cards";
import { ThemeEnum } from "../themes/theme.interface";
import { IMemoCouple, IMemoCard, IMemoOpenCard } from "../interfaces/memo.interface";
import { sounds } from "../data/sounds";

export interface ISlot {
  isSpin: boolean,
  cards: ICard[],
}

export interface ISlots {
  slot0: ISlot,
  slot1: ISlot,
  slot2: ISlot,
}
export enum ViewEnum { slot, memo }

export class Store {
  view: ViewEnum = ViewEnum.slot;
  theme: ThemeEnum = ThemeEnum.black;
  audio = true;
  demoWin = true;
  demoWin2 = true;

  //slot game
  isGame = false;
  isWinner = false;
  user = 'Guest';
  slots: ISlot[] = [
    {
      isSpin: false,
      cards: [],
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

  fairyAnimation = [
    {
      animation: false,
    },
    {
      animation: false,
    },
    {
      animation: false,
    }
  ]

  //memo
  isMemoStart = false;
  isMemoFieldBlock = false;
  isMemoRound = false;
  isMemoWin = false;
  memoCards: IMemoCard[] = [];
  memoCouple: IMemoCouple = {
    cardId1: null,
    cardId2: null,
  }

  //const
  cardsInCarousel = 8;
  score = 20;
  startScore = 20;
  winnerScore = 1000;
  memoScore = 100;

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
      view: observable,
      theme: observable,
      audio: observable,
      demoWin: observable,
      demoWin2: observable,
      isGame: observable,
      isWinner: observable,
      user: observable,
      slots: observable,
      fairyAnimation: observable,
      score: observable,
      memoCards: observable,
      isMemoStart: observable,
      isMemoFieldBlock: observable,
      isMemoWin: observable,
      setAudio: action,
      setView: action,
      setDemoWin: action,
      setDemoWin2: action,
      setIsGame: action,
      setUser: action,
      startNewGame: action,
      startRound: action,
      setScore: action,
      setSlotCards: action,
      setSpin: action,
      setFairyAnimation: action,
      setTheme: action,
      setMixCard: action,
      setWinner: action,
      setMemoCards: action,
      setIsMemoStart: action,
      setIsMemoFieldBlock: action,
      checkEqual: action,
      openCard: action,
      setIsMemoWin: action,
      closeMemo: action,
    });

    this.setIsGame(true);
    this.fillSlotCards();
  }

  //setters
  setView = (value: ViewEnum) => {
    this.view = value;
  }
  setAudio = (value: boolean) => {
    this.audio = value;
  }
  setDemoWin = (value: boolean) => {
    this.demoWin = false;
  }
  setDemoWin2 = (value: boolean) => {
    this.demoWin2 = false;
  }
  setIsGame = (value: boolean) => {
    this.isGame = value;
  }
  setWinner = (value: boolean) => {
    this.isWinner = value;
  }
  setUser = (user: string) => {
    this.user = user;
  }
  setFairyAnimation = (index: number, value: boolean) => {
    this.fairyAnimation[index].animation = value;
  }
  setTheme = (value: ThemeEnum) => {
    this.theme = value;
    if (value === ThemeEnum.black) {
      this.slots.forEach((slot, i) => {
        this.setSlotCards(i, blackCards);
      });
    }
    if (value === ThemeEnum.sea) {
      this.slots.forEach((slot, i) => {
        this.setSlotCards(i, seaCards);
      });
    }
    if (value === ThemeEnum.fairy) {
      this.slots.forEach((slot, i) => {
        this.setSlotCards(i, fairyCards);
      });
    }
  }
  setScore = (point: number) => {
    this.score += point;
  }
  setSpin = (i: number, value: boolean) => {
    this.slots[i].isSpin = value;
  }
  setSlotCards = (slotIndex: number, cards: ICard[]) => {
    this.slots[slotIndex].cards.forEach((elem, i) => {
      const src = cards.find(el => elem.id === el.id);
      if (src) {
        elem.url = src.url;
      }
    });
  }
  setMixCard = (slotIndex: number, cards: ICard[]) => {
    this.slots[slotIndex].cards = cards;
  }

  //memo set
  setIsMemoStart = (value: boolean) => {
    this.isMemoStart = value;
  }
  setMemoCards = (cardS: ICard[]) => {
    const shuffle = [...cardS, ...cardS]
      .sort(() => 0.5 - Math.random())
      .map(el => {
        const memoCard: IMemoCard = {
          value: el.id,
          url: el.url,
          isOpen: false
        }
        return memoCard;
      });
    this.memoCards = shuffle;
  }
  setIsMemoFieldBlock = (value: boolean) => {
    this.isMemoFieldBlock = value;
  }
  setIsMemoWin = (value: boolean) => {
    this.isMemoWin = value;
  }

  //round logic

  startNewGame = () => {
    this.fairyAnimation.forEach((el, i) => this.setFairyAnimation(i, false));
    this.setIsGame(true);
    this.setScore(this.startScore);
    this.setWinner(false);
    this.fillSlotCards();
  }

  startRound = (demo?: number) => {
    this.fairyAnimation.forEach((el, i) => this.setFairyAnimation(i, false));
    this.setScore(this.pointMap.roundCost);
    this.slots.forEach((el) => {
      el.isSpin = true;
    });
    if (demo) {
      this.finishRound(demo);
    } else {
      this.finishRound();
    }
  }

  finishRound = (demo?: number) => {

    this.slots.map((slot, i) => {
      const timer = setTimeout(() => {
        if (demo && demo === 3) {
          const arr = [...this.slots[i].cards.sort((a, b) => a.id - b.id)];
          const arr2 = arr.splice(0, 2);
          this.setMixCard(i, [...arr, ...arr2]);
          this.setDemoWin(false);
        }
        else if (demo && demo === 2 && i !== 2) {
          const arr = [...this.slots[i].cards.sort((a, b) => a.id - b.id)];
          const arr2 = arr.splice(0, 2);
          this.setMixCard(i, [...arr, ...arr2]);
          this.setDemoWin2(false);
        } else {
          this.setMixCard(i, this.mixCard(slot.cards));
        }

        this.setSpin(i, false);
        if (i === this.slots.length - 1) {
          this.checkResult();
          if (this.score <= 0) {
            if (this.audio) {
              sounds.gameOver.play();
            }
            this.setIsGame(false);
          }
          if (this.score >= this.winnerScore) {
            if (this.audio) {
              sounds.winGame.play();
            }
            this.setWinner(true);
            this.winnerScore += this.winnerScore;
          }
        }
        if (this.audio) {
          sounds.stopSlot[i].play();
        }
        clearTimeout(timer);
      }, this.storeConst.spinTime * (i + 1));
    });
  }

  startMemo() {
    this.setIsMemoStart(true);
    if (this.theme === ThemeEnum.black) {
      this.setMemoCards(blackCards);
    }
    if (this.theme === ThemeEnum.sea) {
      this.setMemoCards(seaCards);
    }
    if (this.theme === ThemeEnum.fairy) {
      this.setMemoCards(fairyCards);
    }
  }

  closeMemo = () => {
    this.setIsMemoStart(false);
    this.setIsMemoWin(false);
    this.setMemoCards([]);
    this.setView(ViewEnum.slot);
  }

  finishMemo = () => {
    this.closeMemo();
    this.setScore(this.memoScore);
  }

  openCard = (index: number) => {

    if (this.memoCouple.cardId1 !== null && this.memoCouple.cardId2 !== null) {
      console.error('Two card open');
      return;
    }
    const item: IMemoOpenCard = {
      value: this.memoCards[index].value,
      index: index,
    }
    if (!this.memoCouple.cardId1) {
      this.isMemoRound = true;
      this.memoCouple.cardId1 = item;
    } else {
      this.memoCouple.cardId2 = item;
    }
    this.memoCards[index].isOpen = true;
    this.setIsMemoFieldBlock(true);
  }

  checkEqual = () => {
    if (!this.isMemoRound) {
      return;
    }
    const openCards = this.memoCards.filter(el => el.isOpen === true);
    if (openCards.length === this.memoCards.length) {
      this.setIsMemoWin(true);
      if (this.audio) {
        sounds.winRound.play();
      }
    }
    if (this.memoCouple.cardId2 === null) {
      this.setIsMemoFieldBlock(false);
      return;
    }
    if (this.memoCouple.cardId1 && this.memoCouple.cardId2) {
      this.isMemoRound = false;
      if (this.memoCouple.cardId1.value === this.memoCouple.cardId2.value) {
        if (this.audio) {
          const audio = new Audio();
          audio.src = './sounds/ring.mp3';
          audio.play();
        }
      } else {
        this.memoCards[this.memoCouple.cardId1.index].isOpen = false;
        this.memoCards[this.memoCouple.cardId2.index].isOpen = false;
      }
      this.memoCouple.cardId1 = null;
      this.memoCouple.cardId2 = null;
    }
  }

  //utils
  createCards = () => {
    return [...Array(this.cardsInCarousel).keys()].map(el => {
      const card: ICard = {
        id: el,
        url: ''
      }
      return card;
    });
  }

  mixCard = (cards: ICard[]) => {
    const random = Math.floor(Math.random() * 8);
    const arr = [...cards];
    const arr2 = arr.splice(0, random);
    return [...arr, ...arr2];
  }

  fillSlotCards = () => {
    this.slots.forEach((slot, i) => {
      slot.cards = this.createCards();
      if (this.theme === ThemeEnum.black) {
        this.setSlotCards(i, blackCards);
      }
      if (this.theme === ThemeEnum.sea) {
        this.setSlotCards(i, seaCards);
      }
      if (this.theme === ThemeEnum.fairy) {
        this.setSlotCards(i, fairyCards);
      }
    });
  }

  checkResult = () => {
    const value0 = this.slots[0].cards[0].id;
    const value1 = this.slots[1].cards[0].id;
    const value2 = this.slots[2].cards[0].id;

    if ((value0 === value1 && value0 === value2) && value0 !== 0) {
      this.fairyAnimation.forEach((el, i) => this.setFairyAnimation(i, true));
      this.setScore(this.pointMap.jackpot);
      if (this.audio) {
        sounds.winRound.play();
      }
    }
    else if (((value0 === value1) && value0 !== 0)
      || ((value0 === value2) && value2 !== 0)
      || ((value2 === value1) && value1 !== 0)
    ) {
      if (value0 === value1) {
        this.setFairyAnimation(0, true);
        this.setFairyAnimation(1, true);
      }
      if (value1 === value2) {
        this.setFairyAnimation(1, true);
        this.setFairyAnimation(2, true);
      }
      if (value0 === value2) {
        this.setFairyAnimation(0, true);
        this.setFairyAnimation(2, true);
      }
      if (this.audio) {
        sounds.winRound.play();
      }
      this.setScore(this.pointMap.bonus);
    }
  }
}