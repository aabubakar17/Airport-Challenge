export class Airport {
  airportCapacity = 10;
  airportPlanes = [];

  overrideCapacity(newAirportCapacity) {
    if (newAirportCapacity >= 0) this.airportCapacity = newAirportCapacity;
  }

  isAirportFull() {
    return this.airportPlanes.length >= this.airportCapacity ? true : false;
  }

  planeLand(landPlane, currentWeather) {
    if (
      !this.isAirportFull() &&
      !this.planeAtAirport(landPlane) &&
      currentWeather !== "stormy"
    )
      this.airportPlanes.push(landPlane);
  }

  planeAtAirport(newPlane) {
    return this.airportPlanes.includes(newPlane);
  }

  planeTakeOff(TakeOffPlane, currentWeather) {
    if (this.planeAtAirport(TakeOffPlane) && currentWeather !== "stormy")
      this.airportPlanes = this.airportPlanes.filter(
        (plane) => plane !== TakeOffPlane
      );
  }
}
