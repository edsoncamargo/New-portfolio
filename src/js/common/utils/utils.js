export class Utils {
  constructor() { }

  static isDayTime() {
    const hours = new Date().getHours();
    return hours > 6 && hours < 18;
  }
}