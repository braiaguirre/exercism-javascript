//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (n) => {
  let nArr = n.toString().split('');
  return (nArr.reduce((sum, digit) => sum + (digit ** nArr.length), 0)) == n;
};
