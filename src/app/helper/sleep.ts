// the implementation
export async function sleep(ms = 1000): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, ms as number));
}

// in-source test suites with vitest
const vitest = import.meta.vitest;
if (vitest) {
  // const { describe, test, expect, it } = vitest;
  describe("sleep", () => {
    test("sleep(1000) should return a Promise", () => {
      expect(sleep(1000)).toBeInstanceOf(Promise);
    });

    it("sleep resolves as undefined", async () => {
      await expect(sleep()).resolves.toBeUndefined();
    });

    it("sleep(1000) should resolve after 1 second", async () => {
      const start = Date.now();
      await sleep(1000);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(1000);
    });

    it("sleep(0) should resolve after 0 second", async () => {
      const start = Date.now();
      await sleep(0);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(0);
    });
  });
}
