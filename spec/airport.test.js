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
