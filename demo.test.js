test('calculateDaysBetweenDates should return the correct number of days', () => {
    const begin = new Date('2022-01-01');
    const end = new Date('2022-01-10');
    const result = calculateDaysBetweenDates(begin, end);
    expect(result).toBe(9);
});

test('calculateDaysBetweenDates should return 0 when begin and end dates are the same', () => {
    const begin = new Date('2022-01-01');
    const end = new Date('2022-01-01');
    const result = calculateDaysBetweenDates(begin, end);
    expect(result).toBe(0);
});

test('calculateDaysBetweenDates should return the correct number of days when begin date is after end date', () => {
    const begin = new Date('2022-01-10');
    const end = new Date('2022-01-01');
    const result = calculateDaysBetweenDates(begin, end);
    expect(result).toBe(9);
});