import Settings from '../main';

test('should return modified Map', () => {
  const sett = new Settings();
  sett.userSettings.set('theme', 'light');
  sett.userSettings.set('music', 'off');
  expect(sett.get().get('theme')).toBe('light');
});
