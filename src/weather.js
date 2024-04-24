export class Weather {
  generateWeather() {
    const weatherConditions = ["stormy", "not stormy"];
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    return weatherConditions[randomIndex];
  }
}
