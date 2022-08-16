export const updateStatus = (winner, cells, xIsCurrentPlayer) => {
  let status = '';
  if (winner) {
    status = `Победил: ${winner}`;
    return status
  }
  if (!winner && cells.every(item => item)) {
    status = 'Игра окончена. Ничья';
    return status
  }
  status = `Сейчас ходит: ${xIsCurrentPlayer ? "X" : "O"}`;
  return status
};