function makeBase10(n) {
  const base10 = [0, 1, 10, 100, 1000, 10000, 100000];

  return base10[n];
}

/**
 *
 * @param workArray
 * @param splitSize
 */
function groupArrayElements(workArray, splitSize) {

  /*
    Ensure:
    workArray is an array and not empty
    splitsize is a number and not 0
   */

  if (!Array.isArray(workArray) || typeof splitSize !== 'number' || workArray.length === 0 || splitSize === 0) return [];

  // clone the array to work on it
  const cloneArray = [...workArray];
  const newArray = [];

  const initialZeroBase = cloneArray.length.toString().length;

  const zeroBase = initialZeroBase <= 3 ? makeBase10(3) : makeBase10(initialZeroBase);

  const arraySteps = zeroBase / cloneArray.length;

  const splitSteps = zeroBase / splitSize;

  // is this an error? If arraySteps > splitSteps, will it infinite loop?
  if (arraySteps > splitSteps) return [];

  let workSteps = 0;
  let tempArray = [];

  while (cloneArray.length > 0) {
    // Pessimistic filling
    // if (workSteps + arraySteps >= splitSteps) {

    // Optimistic filling
    if (workSteps >= splitSteps) {
      // push the array and clean it up for a next batch
      newArray.push(tempArray);

      tempArray = [];
      workSteps = 0;
    }

    // Shift the first item into the temp array
    tempArray.push(cloneArray.shift());

    workSteps = workSteps + arraySteps;
  }

  // Push the remains
  newArray.push(tempArray);

  return newArray;
}

module.exports = groupArrayElements;
