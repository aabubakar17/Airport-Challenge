import { Airport } from "./airport.js";
import { Plane } from "./plane.js";
import { Weather } from "./weather.js";

// instances of Airport, Plane, and Weather
const airport = new Airport();
const plane1 = new Plane();
const plane2 = new Plane();
const weather = new Weather();

// Override airport capacity
airport.overrideCapacity(15);
console.log(`Current capacity: ${airport.airportCapacity}`);

console.log("======================================================");
// Simulate weather conditions
const currentWeather = weather.generateWeather();

// current weather conditions
console.log(`Current weather: ${currentWeather}`);
console.log("======================================================");

// Plane 1 lands at the airport if conditions are met
airport.planeLand(plane1, currentWeather);
console.log(`No. Planes at airport: ${airport.airportPlanes.length}`);
console.log("======================================================");

// Plane 2 lands at the airport if conditions are met
airport.planeLand(plane2, currentWeather);
console.log(`No. Planes at airport: ${airport.airportPlanes.length}`);
console.log("======================================================");

// Plane 1 takes off if it's at the airport and weather conditions allow
airport.planeTakeOff(plane1, currentWeather);
console.log(
  `No. Planes at airport after take off: ${airport.airportPlanes.length}`
);
console.log("======================================================");
