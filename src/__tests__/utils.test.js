// Your tests here
import { currentAgeForBirthYear } from '../utils'; // Adjust path if necessary

describe('currentAgeForBirthYear', () => {
  it('returns the age of a person based on the year of birth', () => {
    const birthYear = 2000;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(new Date().getFullYear() - birthYear);
  });
});