import Character from "../Character";
import Team from "../Team";

const archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const warrior = new Character('Воин', 'Warrior', 60, 1, 30, 20);

describe('Team class', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  it('should be able to add characters', () => {
    team.addCharacter(archer);
    expect(team.characters).toContain(archer);
  });

  it('should iterate over characters', () => {
    team.addCharacter(archer);
    team.addCharacter(warrior);

    const characters = [];
    for (const character of team) {
      characters.push(character);
    }

    expect(characters).toEqual([archer, warrior]);
  });

  it('should return done when all characters are iterated', () => {
    team.addCharacter(archer);

    const iterator = team[Symbol.iterator]();
    iterator.next();

    const result = iterator.next();
    expect(result.done).toBe(true);
  });
});
