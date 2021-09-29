const groupArrayElements = require('../index');

const tapeSpec = require('tape');

tapeSpec('Test function', (t) => {
  t.test('Initial Rejects', (t) => {
    t.test('Rejects: Function called with string !array', (t) => {
      const result = groupArrayElements('1,2,3,4,5', 3);
      t.deepEquals(result, []);
      t.equal(result.length, 0);

      t.end();
    });

    t.test('Rejects: Function called with string !integer', (t) => {
      const result = groupArrayElements([1, 2, 3, 4, 5], '3');
      t.deepEquals(result, []);
      t.equal(result.length, 0);

      t.end();
    });

    t.test('Rejects: Function called with missing params', (t) => {
      const result = groupArrayElements();
      t.deepEquals(result, []);
      t.equal(result.length, 0);

      t.end();
    });
  });

  t.test('Data tests', (t) => {
    t.test('Function called with supplied values: [1, 2, 3, 4, 5], 3', (t) => {
      const result = groupArrayElements([1, 2, 3, 4, 5], 3);
      t.deepEquals(result, [[1, 2], [3, 4], [5]]);
      t.equal(result.length, 3);

      t.end();
    });

    t.test('Function called with supplied values: [1, 2, 3, 4, 5], 2', (t) => {
      const result = groupArrayElements([1, 2, 3, 4, 5], 2);
      t.deepEquals(result, [
        [1, 2, 3],
        [4, 5]
      ]);
      t.equal(result.length, 2);

      t.end();
    });

    // This one is tricky.
    t.test('Function called with supplied values: [1, 2, 3, 4, 5], 4', (t) => {
      const result = groupArrayElements([1, 2, 3, 4, 5], 4);
      t.deepEquals(result, [[1, 2], [3, 4], [5]]);
      t.equal(result.length, 3);

      t.end();
    });

    t.test('Function called with supplied values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3', (t) => {
      const result = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
      t.deepEquals(result, [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10 ] ]);
      t.equal(result.length, 3);

      t.end();
    });
  });
});
