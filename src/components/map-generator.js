// Based on : https://medium.freecodecamp.org/how-to-make-your-own-procedural-dungeon-map-generator-using-the-random-walk-algorithm-e0085c8aa9a
module.exports = {
  createArray: (num, dimensions) => {
    let array = [];
    for (let i = 0; i < dimensions; i++) {
      array.push([]);
      for (let j = 0; j < dimensions; j++) {
        array[i].push(num);
      }
    }
    return array;
  },

  createBlueprint: () => {
    let dimensions = 25,
      maxTunnels = 170,
      maxLength = 8,
      map = module.exports.createArray(1, dimensions),
      currentRow = Math.floor(Math.random() * dimensions),
      currentCol = Math.floor(Math.random() * dimensions),
      directions = [[-1, 0], [1, 0], [0, -1], [0, 1]],
      lastDirection = [],
      randomDirection,
      freeRoomCoords = [];

    while (maxTunnels && dimensions && maxLength) {
      do {
        randomDirection = directions[Math.floor(Math.random() * directions.length)];
      } while ((randomDirection[0] === -lastDirection[0] && randomDirection[1] === -lastDirection[1]) || (randomDirection[0] === lastDirection[0] && randomDirection[1] === lastDirection[1]));

      let randomLength = Math.ceil(Math.random() * maxLength),
        tunnelLength = 0;

      while (tunnelLength < randomLength) {
        if (
          ((currentRow === 0) && (randomDirection[0] === -1)) ||
          ((currentCol === 0) && (randomDirection[1] === -1)) ||
          ((currentRow === dimensions - 1) && (randomDirection[0] === 1)) ||
          ((currentCol === dimensions - 1) && (randomDirection[1] === 1))
        ) {
          break;
        } else {
          map[currentRow][currentCol] = 0;
          freeRoomCoords.push([currentRow, currentCol]);  // Store the free spaces
          currentRow += randomDirection[0];
          currentCol += randomDirection[1];
          tunnelLength++;
        }
      }

      if (tunnelLength) {
        lastDirection = randomDirection;
        maxTunnels--;
      }
    }

    return {
      map: map,
      rooms: freeRoomCoords,
    }
  },

}