export default class Team {
  constructor() {
    this.characters = [];
    this.currentIndex = 0;
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  [Symbol.iterator]() {
    return {
      characters: this.characters,
      currentIndex: 0,
      next() {
        if (this.currentIndex < this.characters.length) {
          return {
            value: this.characters[this.currentIndex++],
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  }
}