// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 5;
  const got = mut.div(10, 2);
  expect(got).toBe(expected);
});

test('Testing div with negative numbers -- success', () => {
  const expected = -2;
  const got = mut.div(10, -5);
  expect(got).toBe(expected);
});

test('Testing div by zero -- should handle error', () => {
  const got = mut.div(10, 0);
  expect(got).toBe(Infinity);
});

test('Testing div with floats -- success', () => {
  const expected = 2.5;
  const got = mut.div(5, 2);
  expect(got).toBe(expected);
});

test('containsNumbers -- contains a single number', () => {
  const got = mut.containsNumbers("hi3hi");
  expect(got).toBe(true);
});

test('containsNumbers -- contains multiple numbers', () => {
  const got = mut.containsNumbers("123hi456");
  expect(got).toBe(true);
});

test('containsNumbers -- does not contain numbers', () => {
  const got = mut.containsNumbers("hi");
  expect(got).toBe(false);
});

test('containsNumbers -- empty string', () => {
  const got = mut.containsNumbers("");
  expect(got).toBe(false);
});

test('containsNumbers -- string with numbers only', () => {
  const got = mut.containsNumbers("123");
  expect(got).toBe(true);
});

test('Testing containsNumbers -- This is a bug', () => {
  const text = "Hello World";
  const got = mut.containsNumbers(text);
  expect(got).toBe(false);
});