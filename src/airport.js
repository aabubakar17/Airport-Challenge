export class Airport {
  airportCapacity = 10;
  airportPlanes = [];

  overrideCapacity(newAirportCapacity) {
    if (newAirportCapacity >= 0) this.airportCapacity = newAirportCapacity;
  }

  isAirportFull() {
    return this.airportPlanes.length >= this.airportCapacity ? true : false;
  }

  planeLand(newPlane) {
    this.airportPlanes.push(newPlane);
  }
}
