const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.equal(sum(4, 5), 9);
assert.equal(sum(0, 0), 0);
// assert.ifError(sum(4, "5"), true); Corrigir depois.
assert.throws(() => {sum(4, "5")}, /^Error: parameters must be numbers/);
