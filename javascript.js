function knightMoves(start, end) {

    const moves = [
  [2,1],[1,2],[-1,2],[-2,1],
  [-2,-1],[-1,-2],[1,-2],[2,-1]
];

function isValidMove(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function getKnightMoves([x, y]) {
     const possibleMoves = [];
}

for (let [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValidMove(newX, newY)) {
        possibleMoves.push([newX, newY]);
      }
}
return possibleMoves;
}

const queue = [];
const visited = new Set();

queue.push({
  position: start,
  path: [start]
});