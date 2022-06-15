import { getRandomQuote } from './get-random-quote';

// @vitest-environment happy-dom
describe('getRandomQuote', () => {
  it('getRandomQuote is a function', () => {
    expect(getRandomQuote).toBeInstanceOf(Function);
  });
});

describe('fetch', () => {
  it('is a type of Promise', () => {
    expect(
      fetch('https://jsonplaceholder.typicode.com/todos/1'),
    ).toBeInstanceOf(Promise);
  });
});
