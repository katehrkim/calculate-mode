// Write your own unit tests here!
const cal = require("./calculateMode");

test('one', () => {
  expect(cal([1,2,3,3])).toEqual([3]);
});
test('two', () => {
  expect(cal([4.5, 0, 0])).toEqual([0]);
});
test('three', () => {
  expect(cal([1.5, -1, 1, 1.5])).toEqual([1.5]);
});
test('four', () => {
  expect(cal([1,1,2,2])).toEqual([1,2]);
});
test('five', () => {
  expect(cal([1,2,3])).toEqual([1,2,3]);
});
test('six', () => {
  expect(cal(["who", "what", "where", "who"])).toEqual(["who"]);
});
