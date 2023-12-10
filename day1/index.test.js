const { partOne, partTwo } = require('./index')

test('Day 1 | Part 1', () => {
    expect(partOne(```
    1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet
    ```)).toBe(142)
})

test('Day 1 | Part 2', () => {
    expect(partTwo(```
    two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen
    ```)).toBe(281)
})