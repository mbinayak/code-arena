// https://leetcode.com/problems/water-bottles-ii/
function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let drunkBottleCount = 0;
  let emptyBottles = 0;
  while (numBottles > 0 || emptyBottles >= numExchange) {
    drunkBottleCount += numBottles;
    emptyBottles += numBottles;
    numBottles = 0;
    if (emptyBottles >= numExchange) {
      emptyBottles -= numExchange;
      numBottles += 1;
    }
    numExchange++;
  }

  return drunkBottleCount;
}

export default maxBottlesDrunk;
