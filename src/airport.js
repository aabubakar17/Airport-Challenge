export class Airport {
  airportCapacity = 10;

  overrideCapacity(newAirportCapacity) {
    if (newAirportCapacity >= 0) this.airportCapacity = newAirportCapacity;
  }
}
