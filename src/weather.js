export class Weather {
  generateWeather() {
    // Randomly generate weather condition
    const weatherConditions = ["stormy", "not stormy"];
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    return weatherConditions[randomIndex];
  }
}
