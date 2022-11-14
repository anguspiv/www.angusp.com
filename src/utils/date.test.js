import { formatDate, normalizeDate } from './date';

describe('date utils', () => {
  describe('normalizeDate', () => {
    it('should return a date', () => {
      expect.assertions(3);

      const date = new Date('2020-01-01');

      expect(normalizeDate(date)).toBeInstanceOf(Date);

      const timestampe = 1577836800000;

      expect(normalizeDate(timestampe)).toBeInstanceOf(Date);

      const dateString = '2020-01-01';

      expect(normalizeDate(dateString)).toBeInstanceOf(Date);
    });

    it('should return null', () => {
      expect.assertions(2);

      const invalidDate = 'invalid date';

      expect(normalizeDate(invalidDate)).toBeNull();

      expect(normalizeDate(null)).toBeNull();
    });
  });

  describe('formatDate', () => {
    it('should format the date', () => {
      expect.assertions(3);

      const date = new Date(2020, 0, 3);

      expect(formatDate(date)).toBe('Jan. 3rd, 2020');

      const timestamp = 1578076800000;

      expect(formatDate(timestamp)).toBe('Jan. 3rd, 2020');

      const dateString = '2020-02-12';

      expect(formatDate(dateString)).toBe('Feb. 12th, 2020');
    });
  });
});
