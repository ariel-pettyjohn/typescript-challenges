const { 
    forSum, whileSum, reduceSum, recursiveSum, tailRecursiveSum 
} = require('../arraySum');

const array = [1, 2, 3, 4, 5];

test('forSum of [1, 2, 3, 4, 5] should be 15', () => {
    expect(forSum(array)).toBe(15);
});

test('whileSum of [1, 2, 3, 4, 5] should be 15', () => {
    expect(whileSum(array)).toBe(15);
});

test('reduceSum of [1, 2, 3, 4, 5] should be 15', () => {
    expect(reduceSum(array)).toBe(15);
});

test('recursiveSum of [1, 2, 3, 4, 5] should be 15', () => {
    expect(recursiveSum(array)).toBe(15);
});

test('tailRecursiveSum of [1, 2, 3, 4, 5] should be 15', () => {
    expect(tailRecursiveSum(array)).toBe(15);
});