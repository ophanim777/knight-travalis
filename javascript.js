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

visited.add(start.toString());

while (queue.length > 0) {

    const current = queue.shift();
    const position = current.position;
    const path = current.path;}

    if (position[0] === end[0] && position[1] === end[1]) {

        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

        path.forEach(step => console.log(step));

        return path;
    }