import { HungryBear } from './../src/hungrybear.js';

describe ('Fuzzy', () => {

  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it si created', () => {
    expect(fuzzy.name).toEqual('Fuzzy');
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test ('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  test('should eat owner if food level is below zero', () => {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should eat owner if food level is below zero', () => {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should show bear fed to full capactiy', () => {
    jest.advanceTimersByTime(9001);
    fuzzy.feed()
    expect(fuzzy.foodLevel).toEqual(10);
  });



});
