# Domain Models and Test Plan

## [User Story/Requirement 1](user-stories.md)

| Object  | Properties               | Messages      | Output   |
| ------- | ------------------------ | ------------- | -------- |
| Airport | airportCapacity @Integer | getCapacity() | @Integer |

---

## [User Story/Requirement 2](user-stories.md)

| Object  | Properties               | Messages           | Output |
| ------- | ------------------------ | ------------------ | ------ |
| Airport | airportCapacity @Integer | overrideCapacity() | @void  |

---

## [User Story/Requirement 3](user-stories.md)

| Object  | Properties                   | Messages                          | Output   |
| ------- | ---------------------------- | --------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | planeLand(@Plane) isAirportFull() | @Boolean |
| Plane   | id @String                   |                                   |          |

---

## [User Story/Requirement 4](user-stories.md)

| Object  | Properties                   | Messages                                 | Output   |
| ------- | ---------------------------- | ---------------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | planeLand(@Plane) planeAtAirport(@Plane) | @Boolean |
| Plane   | id @String                   |                                          |          |

---

## [User Story/Requirement 5](user-stories.md)

| Object  | Properties                   | Messages                                 | Output   |
| ------- | ---------------------------- | ---------------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | planeLand(@Plane) planeAtAirport(@Plane) | @Boolean |
| Plane   | id @String                   |                                          |          |

---

## [User Story/Requirement 6](user-stories.md)

| Object  | Properties                                                   | Messages                           | Output   |
| ------- | ------------------------------------------------------------ | ---------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] Weather @Array[@currentWeather] | planeLand(@Plane, @currentWeather) | @Boolean |
| Plane   | id @String                                                   |                                    |          |

---

## [User Story/Requirement 7](user-stories.md)

| Object  | Properties                                                   | Messages                              | Output   |
| ------- | ------------------------------------------------------------ | ------------------------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] Weather @Array[@currentWeather] | planeTakeOff(@Plane, @currentWeather) | @Boolean |
| Plane   | id @String                                                   |                                       |          |
