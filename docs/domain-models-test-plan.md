# Domain Models and Test Plan

## [User Story/Requirement 1](user-stories.md)

| Object  | Properties               | Messages | Output |
| ------- | ------------------------ | -------- | ------ |
| Airport | airportCapacity @Integer |          | @void  |

### Test

- set default airport capacity and test if airportCapacity Property return correct capacity value

---

## [User Story/Requirement 2](user-stories.md)

| Object  | Properties               | Messages                   | Output |
| ------- | ------------------------ | -------------------------- | ------ |
| Airport | airportCapacity @Integer | overrideCapacity(@Integer) | @void  |

### Test

- set new airport capacity using overrideCapacity() and test if airportCapacity property reflects new change
- Test that airportCapacity cannot be set to a negative value
- Test that airport capacity can be set to zero

  ***

## [User Story/Requirement 3](user-stories.md)

| Object  | Properties                   | Messages                          | Output   |
| ------- | ---------------------------- | --------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | planeLand(@Plane) isAirportFull() | @Boolean |
| Plane   | id @String                   |                                   |          |

### Test

- Test isAirportFull() returns true when the airport is at capacity.
- Test isAirportFull() returns false when the airport has available space.
- Add plane to airport using planeLand and expect airportPlanes to increase by length 1
- Test that planeLand() adds the correct plane to the airportPlanes.
- Add plane to airport using planeLand when airport is full and expect airportPlanes array to be unchanged in length

---

## [User Story/Requirement 4](user-stories.md)

| Object  | Properties                   | Messages                                 | Output   |
| ------- | ---------------------------- | ---------------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | planeLand(@Plane) planeAtAirport(@Plane) | @Boolean |
| Plane   | id @String                   |                                          |          |

### Test

- Test that planeAtAirport(Plane) returns true when the plane is at the airport.
- Test that planeAtAirport(Plane) returns false when the plane is not at the airport.
- Land plane to airport using planeLand when plane is already at airport and expect airportPlanes array to be unchanged in length
- Land plane to airport using planeLand when plane is not at airport and expect airportPlanes array to increase in length by 1

---

## [User Story/Requirement 5](user-stories.md)

| Object  | Properties                   | Messages                                    | Output   |
| ------- | ---------------------------- | ------------------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | planeTakeOff(@Plane) planeAtAirport(@Plane) | @Boolean |
| Plane   | id @String                   |                                             |          |

### Test

- Take off plane from the airport using planeTakeOff when plane is already at airport and expect airportPlanes array to be decrease in length by 1
- Take off plane from the airport using PlaneTakeOff when plane is not at airport and expect airportPlanes array to be unchanged in length

---

## [User Story/Requirement 6](user-stories.md)

| Object  | Properties                      | Messages                           | Output   |
| ------- | ------------------------------- | ---------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane]    | planeLand(@Plane, @currentWeather) | @Boolean |
| Plane   | id @String                      |                                    |          |
| Weather | Weather @Array[@currentWeather] |                                    |          |

### Test

- Test when currentWeather is stormy and use planeLand() and expect airportPlanes array to be unchanged
- Test when currentWeather is not Stormy and use planeLand() and expect airportPlanes array to increase by length 1

---

## [User Story/Requirement 7](user-stories.md)

| Object  | Properties                      | Messages                              | Output   |
| ------- | ------------------------------- | ------------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane]    | planeTakeOff(@Plane, @currentWeather) | @Boolean |
| Plane   | id @String                      |                                       |          |
| Weather | Weather @Array[@currentWeather] |                                       |          |

### Test

- Test when currentWeather is Stormy and use planeTakeOff() and expect airportPlanes array to be unchanged
- Test when currentWeather is not Stormy and use planeTakeOff() and expect airportPlanes array to decrease by length 1
