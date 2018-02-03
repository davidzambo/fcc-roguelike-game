import React from 'react';
import Layout from './Layout';
import Map from './Map';
import Hero from './actors/Hero';

export default class App  extends React.Component{
  constructor(props) {
    super(props);
    this.createArray = this.createArray.bind(this);
    this.createMap = this.createMap.bind(this);
    this.initializeHero = this.initializeHero.bind(this);
    this.state = {
      dimensions: 30,
      map: [],
      freeRoomCoords: []
    };
  }

  createArray(num, dimensions) {
    let array = [];
    for (let i = 0; i < dimensions; i++) {
      array.push([]);
      for (let j = 0; j < dimensions; j++) {
        array[i].push(num);
      }
    }
    return array;
  }

  // Based on : https://medium.freecodecamp.org/how-to-make-your-own-procedural-dungeon-map-generator-using-the-random-walk-algorithm-e0085c8aa9a
  createMap() {
    let dimensions = this.state.dimensions,
      maxTunnels = 140,
      maxLength = 9,
      map = this.createArray(1, dimensions),
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

    this.setState({
      map: map,
      freeRoomCoords: freeRoomCoords
    }, this.initializeHero);
  }

  componentWillMount() {
    document.addEventListener("keyPress", this._handleKey)
    this.createMap();
  }

  initializeHero() {
    let whereIsHe = this.state.freeRoomCoords[3];
    let table = this.state.map.slice();
    table[whereIsHe[0]][whereIsHe[1]] = <Hero />;
    this.setState({
      map: table
    });
  }

  render(){
    return (
      <Layout>
        <Map blueprint={this.state.map}>
          <Hero />
        </Map>
      </Layout>
    );
  }
}
