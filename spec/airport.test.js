import { assertEquals, assertFalse, assertTrue } from "./test-framework.js";
import { Airport } from "../src/airport.js";
import { Plane } from "../src/plane.js";
import { Weather } from "../src/weather.js";

function printResult(result, actual, expected) {
  console.log(result ? "Pass" : "Fail");
  !result && console.log(`Expected: ${expected}, Actual: ${actual}`);
}

function testAirportCapacity() {
  console.log("\n***********");
  console.log("testAirportCapacity");
  console.log(
    `test if airportCapacity property returns correct default capacity of 10`
  );

  //ARRANGE
  const airport = new Airport();
  const expected = 10;
  let actual, result;

  //ACT
  actual = airport.airportCapacity;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testAirportCapacity();

function testOverrideCapacity() {
  console.log("\n***********");
  console.log("testOverrideCapacity");
  console.log(
    `set new airport capacity using overrideCapacity() and test if airportCapacity property reflects new change`
  );

  //ARRANGE
  const airport = new Airport();
  const newAirportCapacity = 5;
  const expected = newAirportCapacity;
  let actual, result;

  //ACT
  airport.overrideCapacity(newAirportCapacity);
  actual = airport.airportCapacity;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testOverrideCapacity();

function testOverrideCapacityNegativeValue() {
  console.log("\n***********");
  console.log("testOverrideCapacityNegativeValue");
  console.log(`Test that airportCapacity cannot be set to a negative value`);

  //ARRANGE
  const airport = new Airport();
  const newAirportCapacity = -5;
  const expected = airport.airportCapacity; //expect airport capacity to be default;
  let actual, result;

  //ACT
  airport.overrideCapacity(newAirportCapacity);
  actual = airport.airportCapacity;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testOverrideCapacityNegativeValue();

function testOverrideCapacityZeroValue() {
  console.log("\n***********");
  console.log("testOverrideCapacityZeroValue");
  console.log("Test that airport capacity can be set to zero");

  //ARRANGE
  const airport = new Airport();
  const newAirportCapacity = 0;
  const expected = newAirportCapacity;
  let actual, result;

  //ACT
  airport.overrideCapacity(newAirportCapacity);
  actual = airport.airportCapacity;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testOverrideCapacityZeroValue();

function testAirportFull() {
  console.log("\n***********");
  console.log("testAirportFull");
  console.log(
    "Test isAirportFull() returns true when the airport is at capacity"
  );

  //ARRANGE
  const airport = new Airport();
  let actual, result;

  //ACT
  airport.airportPlanes.push(
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane()
  );
  actual = airport.isAirportFull();

  //ASSERT
  result = assertTrue(actual);

  //REPORT
  printResult(result, actual, true);
}

testAirportFull();

function testAirportNotFull() {
  console.log("\n***********");
  console.log("testAirportNotFull");
  console.log(
    "Test isAirportFull() returns false when the airport has available space"
  );

  //ARRANGE
  const airport = new Airport();
  let actual, result;

  //ACT
  airport.airportPlanes.push(new Plane(), new Plane(), new Plane());
  actual = airport.isAirportFull();

  //ASSERT
  result = assertFalse(actual);

  //REPORT
  printResult(result, actual, false);
}

testAirportNotFull();

function testPlaneLand() {
  console.log("\n***********");
  console.log("testPlaneLand");
  console.log(
    "Add plane to airport using planeLand and expect airportPlanes to increase by length 1"
  );

  //ARRANGE
  const airport = new Airport();
  const planeBA = new Plane();
  const expected = airport.airportPlanes.length + 1;
  let actual, result;

  //ACT
  airport.planeLand(planeBA);
  actual = airport.airportPlanes.length;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testPlaneLand();

function testPlaneIsInAirport() {
  console.log("\n***********");
  console.log("testPlaneIsInAirport");
  console.log(
    "Test that planeLand() adds the correct plane to the airportPlanes"
  );

  //ARRANGE
  const airport = new Airport();
  const planeBA = new Plane();
  let actual, result;

  //ACT
  airport.planeLand(planeBA);
  actual = airport.airportPlanes.includes(planeBA);

  //ASSERT
  result = assertTrue(actual);

  //REPORT
  printResult(result, actual, true);
}

testPlaneIsInAirport();

function testPlaneLandWhenFull() {
  console.log("\n***********");
  console.log("testPlaneLandWhenFull");
  console.log(
    "Add plane to airport using planeLand when airport is full and expect airportPlanes array to be unchanged in length"
  );

  //ARRANGE
  const airport = new Airport();
  const planeEJ = new Plane();

  const planes = [
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
  ];

  for (const plane of planes) {
    airport.planeLand(plane);
  } // 10 planes added to airport

  const expected = airport.airportPlanes.length;
  let actual, result;

  //ACT
  airport.planeLand(planeEJ);
  actual = airport.airportPlanes.length;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testPlaneLandWhenFull();

function testPlaneAtAirport() {
  console.log("\n***********");
  console.log("testPlaneAtAirport");
  console.log(
    "Test that planeAtAirport(Plane) returns true when the plane is at the airport."
  );

  //ARRANGE
  const airport = new Airport();
  const planeRA = new Plane();
  let actual, result;

  //ACT
  airport.planeLand(planeRA);
  actual = airport.planeAtAirport(planeRA);

  //ASSERT
  result = assertTrue(actual);

  //REPORT
  printResult(result, actual, true);
}

testPlaneAtAirport();

function testPlaneIsNotAtAirport() {
  console.log("\n***********");
  console.log("testPlaneIsNotAtAirport");
  console.log(
    "Test that planeAtAirport(Plane) returns false when the plane is not at the airport"
  );

  //ARRANGE
  const airport = new Airport();
  const planeRA = new Plane();
  let actual, result;

  //ACT
  actual = airport.planeAtAirport(planeRA);

  //ASSERT
  result = assertFalse(actual);

  //REPORT
  printResult(result, actual, false);
}

testPlaneIsNotAtAirport();

function testLandPlaneWhenPlaneIsAtAirport() {
  console.log("\n***********");
  console.log("testLandPlaneWhenPlaneIsAtAirport");
  console.log(
    "Land plane to airport using planeLand when plane is already at airport and expect airportPlanes array to be unchanged in length"
  );

  //ARRANGE
  const airport = new Airport();
  const planeRA = new Plane();
  airport.planeLand(planeRA);
  const expected = airport.airportPlanes.length;
  let actual, result;

  //ACT
  airport.planeLand(planeRA); //land plane twice to check if the airportPlane [] changes in length
  actual = airport.airportPlanes.length;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testLandPlaneWhenPlaneIsAtAirport();

function testLandPlaneWhenPlaneIsNotAtAirport() {
  console.log("\n***********");
  console.log("testLandPlaneWhenPlaneIsNotAtAirport");
  console.log(
    "Land plane to airport using planeLand when plane is not at airport and expect airportPlanes array to increase in length by 1"
  );

  //ARRANGE
  const airport = new Airport();
  const planeRA = new Plane();
  const expected = airport.airportPlanes.length + 1;
  let actual, result;

  //ACT
  airport.planeLand(planeRA);
  actual = airport.airportPlanes.length;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testLandPlaneWhenPlaneIsNotAtAirport();

function testPlaneTakeOffWhenPlaneIsAtAirport() {
  console.log("\n***********");
  console.log("testPlaneTakeOffWhenPlaneIsAtAirport");
  console.log(
    "Take off plane from the airport using planeTakeOff when plane is already at airport and expect airportPlanes array to decrease in length by 1"
  );

  //ARRANGE
  const airport = new Airport();
  const planeBA = new Plane();
  airport.planeLand(planeBA);
  const expected = airport.airportPlanes.length - 1;
  let actual, result;

  //ACT
  airport.planeTakeOff(planeBA);
  actual = airport.airportPlanes.length;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testPlaneTakeOffWhenPlaneIsAtAirport();

function testPlaneTakeOffWhenPlaneIsNotAtAirport() {
  console.log("\n***********");
  console.log("testPlaneTakeOffWhenPlaneIsNotAtAirport");
  console.log(
    "Take off plane from the airport using planeTakeOff when plane is already at airport and expect airportPlanes array to decrease in length by 1"
  );

  //ARRANGE
  const airport = new Airport();
  const planeBA = new Plane();
  const expected = airport.airportPlanes.length;
  let actual, result;

  //ACT
  airport.planeTakeOff(planeBA);
  actual = airport.airportPlanes.length;

  //ASSERT
  result = assertEquals(actual, expected);

  //REPORT
  printResult(result, actual, true);
}

testPlaneTakeOffWhenPlaneIsNotAtAirport();

function testPlaneLandWhenWeatherIsStormy() {
  console.log("\n***********");
  console.log("testPlaneLandWhenWeatherIsStormy");
  console.log("Test: Plane cannot land when weather is stormy");

  // ARRANGE
  const airport = new Airport();
  const plane = new Plane();
  const currentWeather = "stormy";
  const expected = airport.airportPlanes.length;
  let actual, result;

  // ACT
  airport.planeLand(plane, currentWeather);
  actual = airport.airportPlanes.length;

  // ASSERT
  result = assertEquals(actual, expected);

  // REPORT
  printResult(result, actual, true);
}

testPlaneLandWhenWeatherIsStormy();

function testPlaneLandWhenWeatherIsNotStormy() {
  console.log("\n***********");
  console.log("testPlaneLandWhenWeatherIsNotStormy");
  console.log("Test: Plane can land when weather is not stormy");

  // ARRANGE
  const airport = new Airport();
  const plane = new Plane();
  const currentWeather = "sunny";
  const expected = airport.airportPlanes.length + 1;
  let actual, result;

  // ACT
  airport.planeLand(plane, currentWeather);
  actual = airport.airportPlanes.length;

  // ASSERT
  result = assertEquals(actual, expected);

  // REPORT
  printResult(result, actual, true);
}

testPlaneLandWhenWeatherIsNotStormy();

function testPlaneTakeOffWhenWeatherIsStormy() {
  console.log("\n***********");
  console.log("testPlaneTakeOffWhenWeatherIsStormy");
  console.log("Test: Plane cannot take off when weather is stormy");

  // ARRANGE
  const airport = new Airport();
  const plane = new Plane();
  airport.planeLand(plane); //plane is currently at airport
  const currentWeather = "stormy";
  const expected = airport.airportPlanes.length;
  let actual, result;

  // ACT
  airport.planeTakeOff(plane, currentWeather);
  actual = airport.airportPlanes.length;

  // ASSERT
  result = assertEquals(actual, expected);

  // REPORT
  printResult(result, actual, true);
}

testPlaneTakeOffWhenWeatherIsStormy();

function testPlaneTakeOffWhenWeatherIsNotStormy() {
  console.log("\n***********");
  console.log("testPlaneTakeOffWhenWeatherIsNotStormy");
  console.log("Test: Plane can take off when weather is not stormy");

  // ARRANGE
  const airport = new Airport();
  const plane = new Plane();
  airport.planeLand(plane); // Plane is already at the airport
  const currentWeather = "sunny";
  const expected = airport.airportPlanes.length - 1;
  let actual, result;

  // ACT
  airport.planeTakeOff(plane, currentWeather);
  actual = airport.airportPlanes.length;

  // ASSERT
  result = assertEquals(actual, expected);

  // REPORT
  printResult(result, actual, true);
}

testPlaneTakeOffWhenWeatherIsNotStormy();
