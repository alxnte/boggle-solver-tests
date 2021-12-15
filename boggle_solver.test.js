const boggle_solver = require("/home/codio/workspace/Boggle_Testing/boggle_solver.js");

function lowercaseStringArray(stringArray){
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe("Boggle Solver tests suite:", () => {
  describe("Normal input", () => {
    test("2x2 case", () => {
      let grid = [
        ["B", "E"],
        ["A", "T"],
      ];
      let dictionary = ["BAT", "BEAT", "TEA", "AT"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["BAT", "BEAT", "TEA"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("3x3 case", () => {
      let grid = [
        ["B", "E", "D"],
        ["U", "K", "L"],
        ["O", "T", "I"],
      ];
      let dictionary = ["LIT", "OT", "LIKE", "BUT"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["LIT", "LIKE", "BUT"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("4x4 case", () => {
      let grid = [
        ["S", "L", "H", "P"],
        ["R", "I", "T", "D"],
        ["C", "A", "E", "Q"],
        ["O", "M", "J", "Y"],
      ];
      let dictionary = ["HIS", "COME", "RATE", "YET"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["YET", "COME"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("5x5 case", () => {
      let grid = [
        ["U", "V", "K", "X", "Y"],
        ["S", "T", "R", "E", "P"],
        ["W", "L", "A", "N", "H"],
        ["J", "I", "O", "G", "F"],
        ["M", "B", "C", "D", "Q"],
      ];
      let dictionary = ["LIAR", "DONE", "HEX", "GONE", "COLT", "LANE"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["DONE", "HEX", "GONE", "COLT"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });

  describe("Problem contraints", () => {
    // Cases such as Qu
    test("QU case", () => {
      const grid = [
        ["L", "B", "QU"],
        ["W", "A", "O"],
        ["K", "E", "S"],
      ];
      const dictionary = ["WAKE", "QUAKE", "LAB", "AS"];
      const expected = ["WAKE", "QUAKE", "LAB"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("Empty case", () => {
      const grid = [[""], [""]];
      const dictionary = [];
      const expected = [];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("NxM case", () => {
      let grid = [["A", "B"], ["C"]];
      let dictionary = ["AB", "ABC", "AC"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = [];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

  describe("Input edge cases", () => {
    // Example Test using Jess
    test("Dictionary is empty", () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      const grid = [
        ["Z", "Y", "X", "W"],
        ["V", "U", "T", "S"],
        ["R", "Q", "P", "O"],
        ["N", "M", "L", "K"],
      ];
      const dictionary = [];
      const expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});