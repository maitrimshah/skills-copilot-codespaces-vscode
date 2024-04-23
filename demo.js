/**
 * Calculates the number of days between two dates.
 * @param {Date} begin - The starting date.
 * @param {Date} end - The ending date.
 * @returns {number} The number of days between the two dates.
 */
function calculateDaysBetweenDates(begin, end) { 
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const diffDays = Math.round(Math.abs((end - begin) / oneDay));
    return diffDays;
}
