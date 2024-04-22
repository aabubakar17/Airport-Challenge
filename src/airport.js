import { Plane } from "./plane.js";

export class Airport {
  airportCapacity = 10;
  airportPlanes = [];

  overrideCapacity(newAirportCapacity) {
    if (newAirportCapacity >= 0) this.airportCapacity = newAirportCapacity;
  }

  isAirportFull() {
    return this.airportPlanes.length >= this.airportCapacity;
  }

  planeLand(landPlane, currentWeather) {
    if (this.isAirportFull())
      return console.log("The airport is full. Plane cannot land.");
    if (this.planeAtAirport(landPlane))
      return console.log(
        "The plane is already at the airport. Plane cannot land again."
      );
    if (currentWeather === "stormy")
      return console.log("Weather is stormy. Plane cannot land.");
    this.airportPlanes.push(landPlane);
    console.log("Plane has successfully landed at the airport.");
  }

  planeAtAirport(newPlane) {
    return this.airportPlanes.includes(newPlane);
  }

  planeTakeOff(TakeOffPlane, currentWeather) {
    if (!this.planeAtAirport(TakeOffPlane))
      return console.log(
        "The plane is not at the airport. Plane cannot take off."
      );
    if (currentWeather === "stormy")
      return console.log("Weather is stormy. Plane cannot take off.");
    this.airportPlanes = this.airportPlanes.filter(
      (plane) => plane !== TakeOffPlane
    );
    console.log("Plane has successfully taken off from the airport.");
  }
}
