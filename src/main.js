export default class Settings {
  constructor() {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.userSettings = new Map();
  }

  get() {
    const result = new Map([...this.defaultSettings]);
    for (const item of this.userSettings) {
      result.set(item[0], item[1]);
    }
    return result;
  }
}
