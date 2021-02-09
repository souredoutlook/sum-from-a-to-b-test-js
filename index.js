
function sum(fromN, toN){
  if (fromN === toN){
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
};

module.exports = sum;

// sum from 1 to 1 = 1
// sum from 2 to 1
