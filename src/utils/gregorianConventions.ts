import {
  MILLISECONDS_PER_DAY,
  UNIX_EPOCH_JDN,
} from "../constants/timeConstants";
import DateTuple from "../types/DateTuple";

/**
 * Converts a Gregorian date to Julian Day Number.
 * @param {number} year - The Gregorian year.
 * @param {number} month - The Gregorian month (1-based).
 * @param {number} day - The Gregorian day of the month.
 * @returns {number} The Julian Day Number.
 */
export function gregorianToJulianDayNumber(
  year: number,
  month: number,
  day: number
): number {
  return (
    Math.floor(
      new Date(Date.UTC(year, month - 1, day)).getTime() / MILLISECONDS_PER_DAY
    ) + UNIX_EPOCH_JDN
  );
}

/**
 * Converts a Julian Day Number to a Gregorian date.
 * @param {number} jdn - The Julian Day Number.
 * @returns {object} The Gregorian date with properties year, month, and day.
 */
export function julianDayNumberToGregorian(jdn: number): DateTuple {
  const date = new Date((jdn - UNIX_EPOCH_JDN) * MILLISECONDS_PER_DAY);
  return [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()];
}
