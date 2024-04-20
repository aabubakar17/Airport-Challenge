export class Airport {
  airportCapacity = 10;
  airportPlanes = [];

  overrideCapacity(newAirportCapacity) {
    if (newAirportCapacity >= 0) this.airportCapacity = newAirportCapacity;
  }

  isAirportFull() {
    return this.airportPlanes.length >= this.airportCapacity ? true : false;
  }

  planeLand(newPlane, currentWeather) {
    if (
      !this.isAirportFull() &&
      !this.planeAtAirport(newPlane) &&
      currentWeather !== "stormy"
    )
      this.airportPlanes.push(newPlane);
  }

  planeAtAirport(newPlane) {
    return this.airportPlanes.includes(newPlane);
  }

  planeTakeOff(TakeOffPlane) {
    if (this.planeAtAirport(TakeOffPlane))
      this.airportPlanes = this.airportPlanes.filter(
        (plane) => plane !== TakeOffPlane
      );
  }
}
