/* eslint-disable no-undef */
export const randomIndexForArray = async (array: string[]) => {
  try {
    return Math.floor(Math.random() * array.length) as number;
  } catch (error) {
    throw new Error(
      'Error: "randomIndexForArray", array is empty or undefined',
    );
  }
};

// region:      --- test suite ---

// in-source test suites with vitest
// eslint-disable-next-line prefer-destructuring
const vitest = import.meta.vitest;
// const { vitest } = import.meta;

if (vitest) {
  describe('randomIndexForArray', () => {
    test('randomIndexForArray([]) to be instance of a Promise<number>', () => {
      expect(randomIndexForArray([])).toBeInstanceOf(Promise);
    });

    it('randomIndexForArray([]) to be a number', async () => {
      const array: string[] = ['a', 'b', 'c'];
      const index = await randomIndexForArray(array);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThanOrEqual(array.length);
    });

    it('throws an error when array is empty or undefined', async () => {
      const array: string[] | undefined = undefined;
      await expect(randomIndexForArray(array!)).rejects.toThrow(
        'Error: "randomIndexForArray", array is empty or undefined',
      );
    });

    it('returns 0 or 1 or 2 when array is ["a", "b", "c"]', async () => {
      const array: string[] = ['a', 'b', 'c'];
      const index = await randomIndexForArray(array);
      expect(index).not.toBeNaN();
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThanOrEqual(2);
      if (index === 0) {
        expect(index).toBe(0);
      } else if (index === 1) {
        expect(index).toBe(1);
      } else if (index === 2) {
        expect(index).toBe(2);
      }
    });

    it('returns a typeof number when array is ["a", "b", "c"]', async () => {
      const array: string[] = ['a', 'b', 'c'];
      const index = await randomIndexForArray(array);
      expect(typeof index).toBe('number');
    });
  });
}

// endregion:   --- test suite ---
