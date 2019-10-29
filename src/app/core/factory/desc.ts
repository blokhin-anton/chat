import { Card } from '../entity/card';

export function createDesk(count: number): Card[] {
  const desk: Card[] = [];
  while(count-- > 0) {
    desk.push(
      new Card(count, count.toString(), count)
    )
  }
  return desk.sort(
    () => { return 0.5 - Math.random()}
  );
}
