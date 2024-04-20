import { assertEquals } from "./test-framework.js";
import { Airport } from "../src/airport.js";

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
