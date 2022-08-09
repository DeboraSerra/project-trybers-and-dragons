import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(player);
  }

  shift(ind: number): number {
    for (let index = 0; index < 100; index += 1) {
      this.player.attack(this.monsters[ind]);
      if (this.monsters[ind].lifePoints <= 0) return 1;
      this.monsters[ind].attack(this.player);
      if (this.player.lifePoints <= 0) return -1;
    }
    return 0;
  }

  fight(): number {
    for (let index = 0; index < this.monsters.length; index += 1) {
      const shift = this.shift(index);
      if (shift === -1) return -1;
    }
    return 1;
  }
}
