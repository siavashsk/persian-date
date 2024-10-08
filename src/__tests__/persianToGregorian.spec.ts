import persianToGregorian from "../utils/persianToGregorian";

describe("persianToGregorian", () => {
  it("should convert persian date to gregorian date", () => {
    expect(persianToGregorian(1403, 6, 12)).toEqual([2024, 9, 2]);
  });

  it("should throw error date with negative year", () => {
    expect(() => persianToGregorian(-1403, 6, 12)).toThrow(
      "Invalid Persian year -1403"
    );
  });

  it("should convert date in leap year", () => {
    expect(persianToGregorian(1402, 6, 12)).toEqual([2023, 9, 3]);
  });
});
