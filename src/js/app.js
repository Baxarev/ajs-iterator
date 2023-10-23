import Character from "./Character";
import Team from "./Team";

const archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const warrior = new Character('Воин', 'Warrior', 60, 1, 30, 20);
const mage = new Character('Маг', 'Mage', 40, 1, 50, 5);

const team = new Team();
team.addCharacter(archer);
team.addCharacter(warrior);
team.addCharacter(mage);

for (const character of team) {
  console.log(character);
}