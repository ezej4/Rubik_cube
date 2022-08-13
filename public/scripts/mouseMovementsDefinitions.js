const buildMovementDefinition = (right, left, top, bottom, invertedY = false, invertedZ = false, invertedX) => {
  return {
    right,
    left,
    top,
    bottom,
    invertedY,
    invertedZ,
    invertedX,
  };
};

const MOUSE_MOVEMENTS = [
  {
    xAngle: 0,
    yAngle: 0,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          left: buildMovementDefinition("U", "U!", "R!", "R"),
          front: { right: "U", left: "U!", top: "F", bottom: "F!" },
          top: { right: "F!", left: "F", top: "R!", bottom: "R" },
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "S", bottom: "S!" },
          top: { right: "S!", left: "S", top: "R!", bottom: "R" },
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "B!", bottom: "B" },
          top: { right: "B", left: "B!", top: "R!", bottom: "R" },
        },
      },
      {
        miniCube: [0, 3],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "F", bottom: "F!" },
          left: { right: "E", left: "E!", top: "R!", bottom: "R" },
        },
      },
      {
        miniCube: [0, 4],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "S", bottom: "S!" },
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "B!", bottom: "B" },
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          front: { right: "D!", left: "D", top: "F", bottom: "F!" },
          left: { right: "D!", left: "D", top: "R!", bottom: "R" },
        },
      },
      {
        miniCube: [0, 7],
        proximityMoves: {
          front: { right: "D!", left: "D", top: "S", bottom: "S!" },
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          front: { right: "D!", left: "D", top: "B!", bottom: "B" },
        },
      },
      {
        miniCube: [1, 0],
        proximityMoves: {
          left: { right: "U", left: "U!", top: "M", bottom: "M!" },
          top: { right: "F!", left: "F", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [1, 1],
        proximityMoves: {
          top: { right: "S!", left: "S", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          top: { right: "B", left: "B!", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [1, 3],
        proximityMoves: {
          left: { right: "E", left: "E!", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [1, 6],
        proximityMoves: {
          left: { right: "D!", left: "D", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          left: { right: "U", left: "U!", top: "L", bottom: "L!" },
          top: { right: "F!", left: "F", top: "L", bottom: "L!" },
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          top: { right: "S!", left: "S", top: "L", bottom: "L!" },
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          top: { right: "B", left: "B!", top: "L", bottom: "L!" },
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          left: { right: "E", left: "E!", top: "L", bottom: "L!" },
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          left: { right: "D!", left: "D", top: "L", bottom: "L!" },
        },
      },
    ],
  },
  {
    xAngle: 0,
    yAngle: 270,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "F", bottom: "F!" },
          top: { right: "R!", left: "R", top: "F", bottom: "F!", invertedZ: true },
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "S", bottom: "S!" },
          top: { right: "R!", left: "R", top: "S", bottom: "S!", invertedZ: true },
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "B!", bottom: "B" },
          top: { right: "R!", left: "R", top: "B!", bottom: "B", invertedZ: true },
          right: { right: "U", left: "U!", top: "R", bottom: "R!", invertedZ: true },
        },
      },
      {
        miniCube: [0, 3],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "F", bottom: "F!" },
        },
      },
      {
        miniCube: [0, 4],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "S", bottom: "S!" },
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "B!", bottom: "B" },
          right: { right: "E", left: "E!", top: "R", bottom: "R!", invertedZ: true },
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          front: { right: "D!", left: "D", top: "F", bottom: "F!" },
          left: { right: "D!", left: "D", top: "R!", bottom: "R" },
        },
      },
      {
        miniCube: [0, 7],
        proximityMoves: {
          front: { right: "D!", left: "D", top: "S", bottom: "S!" },
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          front: { right: "D!", left: "D", top: "B!", bottom: "B" },
          right: { right: "D!", left: "D", top: "R", bottom: "R!", invertedZ: true },
        },
      },
      {
        miniCube: [1, 0],
        proximityMoves: {
          top: { right: "M", left: "M!", top: "F", bottom: "F!", invertedZ: true },
        },
      },
      {
        miniCube: [1, 1],
        proximityMoves: {
          top: { right: "M", left: "M!", top: "S", bottom: "S!", invertedZ: true },
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          top: { right: "M", left: "M!", top: "B!", bottom: "B", invertedZ: true },
          right: { right: "U", left: "U!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 8],
        proximityMoves: {
          right: { right: "D!", left: "D", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          top: { right: "L", left: "L!", top: "F", bottom: "F!", invertedZ: true },
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          top: { right: "M", left: "M!", top: "S", bottom: "S!", invertedZ: true },
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          top: { right: "L", left: "L!", top: "B!", bottom: "B", invertedZ: true },
          right: { right: "U", left: "U!", top: "L!", bottom: "L", invertedZ: true },
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "L!", bottom: "L", invertedZ: true },
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          right: { right: "D!", left: "D", top: "L!", bottom: "L", invertedZ: true },
        },
      },
    ],
  },
  {
    xAngle: 0,
    yAngle: 180,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          top: { right: "F", left: "F!", top: "R", bottom: "R!", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          top: { right: "S", left: "S!", top: "R", bottom: "R!", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "R", bottom: "R!", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "R", bottom: "R!", invertedZ: true },
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "R", bottom: "R!", invertedZ: true },
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          right: { right: "D!", left: "D", top: "R", bottom: "R!", invertedZ: true },
        },
      },
      {
        miniCube: [1, 0],
        proximityMoves: {
          top: buildMovementDefinition("F", "F!", "M!", "M", true, true),
        },
      },
      {
        miniCube: [1, 1],
        proximityMoves: {
          top: { right: "S", left: "S!", top: "M!", bottom: "M", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "R", bottom: "R!", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 8],
        proximityMoves: {
          right: { right: "D!", left: "D", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          top: { right: "F", left: "F!", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
          back: buildMovementDefinition("U", "U!", "F!", "F", true, true, false),
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          top: { right: "S", left: "S!", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
          back: { right: "U", left: "U!", top: "S!", bottom: "S", invertedY: true },
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "L!", bottom: "L", invertedZ: true },
          back: { right: "U", left: "U!", top: "B", bottom: "B!", invertedY: true },
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "F!", bottom: "F", invertedY: true },
        },
      },
      {
        miniCube: [2, 4],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "S!", bottom: "S", invertedY: true },
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "B", bottom: "B!", invertedY: true },
          right: buildMovementDefinition("E", "E!", "L!", "L", true, true, false),
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          back: { right: "D!", left: "D", top: "F!", bottom: "F", invertedY: true },
        },
      },
      {
        miniCube: [2, 7],
        proximityMoves: {
          back: { right: "D!", left: "D", top: "S!", bottom: "S", invertedY: true },
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          back: { right: "D!", left: "D", top: "B", bottom: "B!", invertedY: true },
          right: { right: "D!", left: "D", top: "L!", bottom: "L", invertedZ: true },
        },
      },
    ],
  },
  {
    xAngle: 0,
    yAngle: 90,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          top: buildMovementDefinition("R", "R!", "F!", "F", true),
          left: buildMovementDefinition("U", "U!", "R!", "R", true),
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          top: buildMovementDefinition("R", "R!", "S!", "S", true),
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          top: buildMovementDefinition("R", "R!", "B", "B!", true),
        },
      },
      {
        miniCube: [0, 3],
        proximityMoves: {
          left: { right: "E", left: "E!", top: "R!", bottom: "R" },
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          left: { right: "D!", left: "D", top: "R!", bottom: "R" },
        },
      },
      {
        miniCube: [1, 0],
        proximityMoves: {
          top: buildMovementDefinition("M!", "M", "F!", "F", true),
          left: buildMovementDefinition("U", "U!", "M", "M!"),
        },
      },
      {
        miniCube: [1, 1],
        proximityMoves: {
          top: buildMovementDefinition("M!", "M", "S!", "S", true),
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          top: buildMovementDefinition("M!", "M", "B", "B!", true),
        },
      },
      {
        miniCube: [1, 3],
        proximityMoves: {
          left: buildMovementDefinition("E", "E!", "M", "M!", true),
        },
      },
      {
        miniCube: [1, 6],
        proximityMoves: {
          left: buildMovementDefinition("D!", "D", "M", "M!", true),
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          top: buildMovementDefinition("L!", "L", "F!", "F", true),
          left: buildMovementDefinition("U", "U!", "L", "L!", true),
          back: buildMovementDefinition("U", "U!", "F!", "F", true),
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          top: buildMovementDefinition("L!", "L", "S!", "S", true),
          back: buildMovementDefinition("U", "U!", "S!", "S", true),
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          top: buildMovementDefinition("L!", "L", "B", "B!", true),
          back: buildMovementDefinition("U", "U!", "B", "B!", true),
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          left: buildMovementDefinition("E", "E!", "L", "L!", true),
          back: buildMovementDefinition("E", "E!", "F!", "F", true),
        },
      },
      {
        miniCube: [2, 4],
        proximityMoves: {
          back: buildMovementDefinition("E", "E!", "S!", "S", true),
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          back: buildMovementDefinition("E", "E!", "B", "B!", true),
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          back: buildMovementDefinition("D!", "D", "F!", "F", true),
          left: buildMovementDefinition("D!", "D", "L", "L!", true),
        },
      },
      {
        miniCube: [2, 7],
        proximityMoves: {
          back: buildMovementDefinition("D!", "D", "S!", "S", true),
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          back: buildMovementDefinition("D!", "D", "B", "B!", true),
        },
      },
    ],
  },
  {
    xAngle: 180,
    yAngle: 0,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          left: buildMovementDefinition("U!", "U", "R", "R!", false, true, true),
        },
      },
      {
        miniCube: [0, 3],
        proximityMoves: {
          left: buildMovementDefinition("E!", "E", "R", "R!", false, true, true),
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          left: buildMovementDefinition("D", "D!", "R", "R!", false, true, true),
          bottom: buildMovementDefinition("F!", "F", "R", "R!", false, true, true),
        },
      },
      {
        miniCube: [0, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("S!", "S", "R", "R!", false, true, true),
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          bottom: buildMovementDefinition("B", "B!", "R", "R!", false, true, true),
        },
      },
      {
        miniCube: [1, 0],
        proximityMoves: {
          left: buildMovementDefinition("U!", "U", "M!", "M", false, true, true),
        },
      },
      {
        miniCube: [1, 3],
        proximityMoves: {
          left: buildMovementDefinition("E!", "E", "M!", "M", false, true, true),
        },
      },
      {
        miniCube: [1, 6],
        proximityMoves: {
          left: buildMovementDefinition("D", "D!", "M!", "M", false, true, true),
          bottom: buildMovementDefinition("F!", "F", "M!", "M", false, true, true),
        },
      },
      {
        miniCube: [1, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("S!", "S", "M!", "M", false, true, true),
        },
      },
      {
        miniCube: [1, 8],
        proximityMoves: {
          bottom: buildMovementDefinition("B", "B!", "M!", "M", false, true, true),
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          left: buildMovementDefinition("U!", "U", "L!", "L", false, true, true),
          back: buildMovementDefinition("U!", "U", "F", "F!", false, false, true),
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          back: buildMovementDefinition("U!", "U", "S", "S!", false, false, true),
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          back: buildMovementDefinition("U!", "U", "B!", "B", false, false, true),
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          back: buildMovementDefinition("E!", "E", "F", "F!", false, false, true),
          left: buildMovementDefinition("E!", "E", "L!", "L", false, true, true),
        },
      },
      {
        miniCube: [2, 4],
        proximityMoves: {
          back: buildMovementDefinition("E!", "E", "S", "S!", false, false, true),
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          back: buildMovementDefinition("E!", "E", "B!", "B", false, false, true),
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          bottom: buildMovementDefinition("F!", "F", "L!", "L", false, true, false),
          back: buildMovementDefinition("D", "D!", "F", "F!", false, false, true),
          left: buildMovementDefinition("D", "D!", "L!", "L", false, true, true),
        },
      },
      {
        miniCube: [2, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("S!", "S", "L!", "L", false, true, true),
          back: buildMovementDefinition("D", "D!", "S", "S!", false, false, true),
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          bottom: buildMovementDefinition("B", "B!", "L!", "L", false, true, true),
          back: buildMovementDefinition("D", "D!", "B!", "B", false, false, true),
        },
      },
    ],
  },
  {
    xAngle: 180,
    yAngle: 90,
    value: [
      {
        miniCube: [0, 2],
        proximityMoves: {
          right: buildMovementDefinition("U!", "U", "R!", "R", false, false, true),
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          right: buildMovementDefinition("E!", "E", "R!", "R", false, false, true),
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          bottom: buildMovementDefinition("R", "R!", "F", "F!", false, false, true),
        },
      },
      {
        miniCube: [0, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("R", "R!", "S", "S!", false, false, true),
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          right: buildMovementDefinition("D", "D!", "R!", "R", false, false, true),
          bottom: buildMovementDefinition("R", "R!", "B!", "B", false, false, true),
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          right: buildMovementDefinition("U!", "U", "M", "M!", false, false, true),
        },
      },
      {
        miniCube: [1, 5],
        proximityMoves: {
          right: buildMovementDefinition("E!", "E", "M", "M!", false, false, true),
        },
      },
      {
        miniCube: [1, 6],
        proximityMoves: {
          bottom: buildMovementDefinition("M!", "M", "F", "F!", false, false, true),
        },
      },
      {
        miniCube: [1, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("M!", "M", "S", "S!", false, false, true),
        },
      },
      {
        miniCube: [1, 8],
        proximityMoves: {
          right: buildMovementDefinition("D", "D!", "M", "M!", false, false, true),
          bottom: buildMovementDefinition("M!", "M", "B!", "B", false, false, true),
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          back: buildMovementDefinition("U!", "U", "F", "F!", false, false, true),
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          back: buildMovementDefinition("U!", "U", "S", "S!", false, false, true),
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          right: buildMovementDefinition("U!", "U", "L", "L!", false, false, true),
          back: buildMovementDefinition("U!", "U", "B!", "B", false, false, true),
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          back: buildMovementDefinition("E!", "E", "F", "F!", false, false, true),
        },
      },
      {
        miniCube: [2, 4],
        proximityMoves: {
          back: buildMovementDefinition("E!", "E", "S", "S!", false, false, true),
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          back: buildMovementDefinition("E!", "E", "B!", "B", false, false, true),
          right: buildMovementDefinition("E!", "E", "L", "L!", false, false, true),
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          back: buildMovementDefinition("D", "D!", "F", "F!", false, false, true),
          bottom: buildMovementDefinition("L!", "L", "F", "F!", false, true, false),
        },
      },
      {
        miniCube: [2, 7],
        proximityMoves: {
          back: buildMovementDefinition("D", "D!", "S", "S!", false, false, true),
          bottom: buildMovementDefinition("L!", "L", "S", "S!", false, false, true),
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          back: buildMovementDefinition("D", "D!", "B!", "B", false, false, true),
          bottom: buildMovementDefinition("L!", "L", "B!", "B", false, false, true),
          right: buildMovementDefinition("D", "D!", "L", "L!", false, false, true),
        },
      },
      // here
    ],
  },
  {
    xAngle: 180,
    yAngle: 180,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          front: buildMovementDefinition("U!", "U", "F!", "F", true, false, true),
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          front: buildMovementDefinition("U!", "U", "S!", "S", true, false, true),
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          right: buildMovementDefinition("U!", "U", "R!", "R", false, false, true),
          front: buildMovementDefinition("U!", "U", "B", "B!", true, false, true),
        },
      },
      {
        miniCube: [0, 3],
        proximityMoves: {
          front: buildMovementDefinition("E!", "E", "F!", "F", true, false, true),
        },
      },
      {
        miniCube: [0, 4],
        proximityMoves: {
          front: buildMovementDefinition("E!", "E", "S!", "S", true, false, true),
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          front: buildMovementDefinition("E!", "E", "B", "B!", true, false, true),
          right: buildMovementDefinition("E!", "E", "R!", "R", false, false, true),
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          front: buildMovementDefinition("D", "D!", "F!", "F", true, false, true),
          bottom: buildMovementDefinition("F", "F!", "R!", "R", true, false, true),
        },
      },
      {
        miniCube: [0, 7],
        proximityMoves: {
          front: buildMovementDefinition("D", "D!", "S!", "S", true, false, true),
          bottom: buildMovementDefinition("S", "S!", "R!", "R", true, false, true),
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          front: buildMovementDefinition("D", "D!", "B", "B!", true, false, true),
          bottom: buildMovementDefinition("B!", "B", "R!", "R", true, false, true),
          right: buildMovementDefinition("D", "D!", "R!", "R", false, false, true),
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          right: buildMovementDefinition("U!", "U", "M", "M!", false, false, true),
        },
      },
      {
        miniCube: [1, 5],
        proximityMoves: {
          right: buildMovementDefinition("E!", "E", "M", "M!", false, false, true),
        },
      },
      {
        miniCube: [1, 6],
        proximityMoves: {
          bottom: buildMovementDefinition("F", "F!", "M", "M!", true, false, true),
        },
      },
      {
        miniCube: [1, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("S", "S!", "M", "M!", true, false, true),
        },
      },

      {
        miniCube: [1, 8],
        proximityMoves: {
          right: buildMovementDefinition("D", "D!", "M", "M!", false, false, true),
          bottom: buildMovementDefinition("B!", "B", "M", "M!", true, false, false),
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          right: buildMovementDefinition("U!", "U", "L", "L!", false, false, true),
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          right: buildMovementDefinition("E!", "E", "L", "L!", false, false, true),
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          bottom: buildMovementDefinition("F", "F!", "L", "L!", true, false, true),
        },
      },
      {
        miniCube: [2, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("S", "S!", "L", "L!", true, false, true),
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          right: buildMovementDefinition("D", "D!", "L", "L!", false, false, true),
          bottom: buildMovementDefinition("B!", "B", "L", "L!", true, false, true),
        },
      },
    ],
  },
  {
    xAngle: 180,
    yAngle: 270,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          front: buildMovementDefinition("U!", "U", "F!", "F", true, false, true),
          left: buildMovementDefinition("U!", "U", "R", "R!", false, true, true),
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          front: buildMovementDefinition("U!", "U", "S!", "S", true, false, true),
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          front: buildMovementDefinition("U!", "U", "B", "B!", true, false, true),
        },
      },
      {
        miniCube: [0, 3],
        proximityMoves: {
          front: buildMovementDefinition("E!", "E", "F!", "F", true, false, true),
          left: buildMovementDefinition("E!", "E", "R", "R!", false, true, true),
        },
      },
      {
        miniCube: [0, 4],
        proximityMoves: {
          front: buildMovementDefinition("E!", "E", "S!", "S", true, false, true),
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          front: buildMovementDefinition("E!", "E", "B", "B!", true, false, true),
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          front: buildMovementDefinition("D", "D!", "F!", "F", true, false, true),
          left: buildMovementDefinition("D", "D!", "R", "R!", false, true, true),
          bottom: buildMovementDefinition("R!", "R", "F!", "F", true, true, true),
        },
      },
      {
        miniCube: [0, 7],
        proximityMoves: {
          front: buildMovementDefinition("D", "D!", "S!", "S", true, false, true),
          bottom: buildMovementDefinition("R!", "R", "S!", "S", true, true, true),
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          front: buildMovementDefinition("D", "D!", "B", "B!", true, false, true),
          bottom: buildMovementDefinition("R!", "R", "B", "B!", true, true, true),
        },
      },
      {
        miniCube: [1, 0],
        proximityMoves: {
          left: buildMovementDefinition("U!", "U", "M!", "M", false, true, true),
        },
      },
      {
        miniCube: [1, 3],
        proximityMoves: {
          left: buildMovementDefinition("E!", "E", "M!", "M", false, true, true),
        },
      },
      {
        miniCube: [1, 6],
        proximityMoves: {
          left: buildMovementDefinition("D", "D!", "M!", "M", false, true, true),
          bottom: buildMovementDefinition("M", "M!", "F!", "F", true, true, true),
        },
      },
      {
        miniCube: [1, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("M", "M!", "S!", "S", true, true, true),
        },
      },
      {
        miniCube: [1, 8],
        proximityMoves: {
          bottom: buildMovementDefinition("M", "M!", "B", "B!", true, true, true),
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          left: buildMovementDefinition("U!", "U", "L!", "L", false, true, true),
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          left: buildMovementDefinition("E!", "E", "L!", "L", false, true, true),
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          left: buildMovementDefinition("D", "D!", "L!", "L", false, true, true),
          bottom: buildMovementDefinition("L", "L!", "F!", "F", true, true, true),
        },
      },
      {
        miniCube: [2, 7],
        proximityMoves: {
          bottom: buildMovementDefinition("L", "L!", "S!", "S", true, true, true),
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          bottom: buildMovementDefinition("L", "L!", "B", "B!", true, true, true),
        },
      },
    ],
  },
];
