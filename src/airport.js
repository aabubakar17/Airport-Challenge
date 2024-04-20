export class Airport {
  airportCapacity = 10;
  airportPlanes = [];

  overrideCapacity(newAirportCapacity) {
    if (newAirportCapacity >= 0) this.airportCapacity = newAirportCapacity;
  }

  isAirportFull() {
    if (this.airportPlanes.length >= this.airportCapacity) return true;
  }
}
