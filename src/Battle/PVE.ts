import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    for (let index = 0; index < 100; index += 1) {
      this.player.attack(this.monsters[0]);
      if (this.monsters[0].lifePoints <= 0) return 1;
      this.monsters[0].attack(this.player);
      if (this.player.lifePoints <= 0) return -1;
    }
    return 0;
  }
}
