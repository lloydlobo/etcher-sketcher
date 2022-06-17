// @vitest-environment happy-dom

// import { main } from "./main";
import { Window } from 'happy-dom';

const window = new Window();
const document = window.document;

describe('sample test', () => {
  it('sample test 1+1 should equal 2', () => {
    expect(1 + 1).toBe(2);
  });
});

// happy-dom test
describe('happy-dom test with main', () => {
  it('document.body.innerHTML should equal "Hello World!"', () => {
    const body = document.body;
    body.innerHTML = 'Hello World!';
    expect(body.innerHTML).toBe('Hello World!');
  });
});

// main test
// describe("main test with main", () => {
//   it("main is a function", () => {
//     expect(typeof main).toBe("function");
//   });
// });
