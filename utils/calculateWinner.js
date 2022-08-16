export const calculateWinner = (cells) => {
  let winner = '';
  const combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  if (combinations.some(code => code.every(item => cells[item] === 'X'))) {
    winner = 'X'
  }
  if (combinations.some(code => code.every(item => cells[item] === 'O'))) {
    winner = 'O'
  }
  return winner
}