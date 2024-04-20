import { assertEquals, assertFalse, assertTrue } from "./test-framework.js";
import { Airport } from "../src/airport.js";
import { Plane } from "../src/Plane.js";

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
  printResult(result, actual, false);
}

testPlaneAtAirport();
