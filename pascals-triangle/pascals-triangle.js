//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (cant) => {
  if (cant < 1) return [];
  let triangle = [[1]];
  for (let row = 1; row < cant; row++) {
      triangle[row] = [];
      for (let col = 0; col < triangle[row - 1].length + 1; col++) {
        if (col > 0 && col < triangle[row - 1].length) {
          triangle[row].push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
        } else {
          triangle[row].push(1);
        }
      }
  }
  return triangle;
};
