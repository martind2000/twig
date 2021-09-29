# Twig test


An optimistic filler of arrays.

As per the spec, it attempts to fill N equally sized arrays. It does so in an optimistic manner by calculating a percentage of the array and then a percentage of the required 'End' arrays.

When it is adding items into each array section, if there is still 'space' it will add an item.

For example:

```javascript

const arrayLengh = 5;

const sections = 3;

const arrayItemPC = 20 // 100 / arrayLength;

const sectionsPC = 33 // 100 / sections;

```

- So as the array is iterated, it checks if a holding value is greater than sectionsPC.

- If not, it adds an entry to a sub array, and adds 20 to the holding value.

- On the second entry, the holding value is 20, and therefore below 33, so the next item is added to the sub array and 20 is added to the holding value.

- On the third item, the holding value is now 40, which is greater than 33, so the sub array is added to the result array, cleared out and the holding value is zeroed to start again.


