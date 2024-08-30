type DateSegment =
  | "MM"
  | "YYYY"
  | "DD"
  | "dddd"
  | "MMM"
  | "MMMM"
  | "YY"
  | "D"
  | "ddd"
  | "Do"
  | "M"
  | "YYYY";

type TimeSegment = "HH" | "mm" | "ss" | "a" | "h";

type DateTimeSegment = DateSegment | TimeSegment;

export default DateTimeSegment;
