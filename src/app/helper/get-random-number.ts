/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * 1. Generates a random number between 1 and 10
 * 2. Rounds the number to the nearest integer
 * 3. Returns the number
 *
 * @param min - range minimum value
 * @param max - range maximum value
 * @returns - random number between min and max
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
