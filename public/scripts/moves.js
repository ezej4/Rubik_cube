const filterAndOrderFaces = (baseArray, orderArray) => {
  const result = [];
  let counter = 0;
  while (result.length < orderArray.length) {
    const value = baseArray.find((element) => element.label == orderArray[counter]);
    result.push(value);
    counter++;
  }

  return result;
};

const implicatedFaceMovementMapper = (movement) => {
  switch (movement) {
    case "U":
    case "E":
    case "D!":
      return ["front", "right", "back", "left"];
    case "U!":
    case "E!":
    case "D":
      return ["left", "back", "right", "front"];
    case "R!":
    case "M":
    case "L":
      return ["left", "top", "right", "bottom"];
    case "R":
    case "M!":
    case "L!":
      return ["bottom", "right", "top", "left"];
    case "F!":
    case "S!":
    case "B":
      return ["front", "bottom", "back", "top"];
    case "F":
    case "S":
    case "B!":
      return ["top", "back", "bottom", "front"];

    default:
      return false;
  }
};

const rotateFaces = (miniCubeFaces, movement) => {
  const implicatedFaces = implicatedFaceMovementMapper(movement);
  const miniCubeFacesCopy = [...miniCubeFaces];

  const filteredArrayFaces = filterAndOrderFaces(miniCubeFacesCopy, implicatedFaces);
  const filteredArrayFacesCopy = [...filteredArrayFaces];

  filteredArrayFacesCopy.forEach((face, index) => {
    const amountOfFaces = filteredArrayFacesCopy.length;

    const isTheFirtsElement = index === 0;
    const nextFace = isTheFirtsElement ? filteredArrayFaces[amountOfFaces - 1] : filteredArrayFaces[index - 1];
    filteredArrayFacesCopy[index] = { ...face, value: nextFace.value, proximityMoves: nextFace.proximityMoves };
  });

  filteredArrayFacesCopy.forEach((face, index) => {
    const IndexFaceToBeReplaced = miniCubeFacesCopy.findIndex((originalFace) => originalFace.label === face.label);
    miniCubeFacesCopy[IndexFaceToBeReplaced] = { ...face };
  });

  return miniCubeFacesCopy;
};

const moveCube = (movement, animationDuration, isAutomatic = false, countMove = true) => {
  if (isCubeMoving) {
    return;
  }

  const affectedMiniCubes = MOVES[movement].implicatedMiniCubes || null;

  if (affectedMiniCubes) {
    // depth copy of the main model without references.
    let miniCubeModelCopy = miniCubeModel.map((arr) => arr.slice());

    affectedMiniCubes.forEach(({ element, to }) => {
      const [firstIndexElement, secondIndexElement] = element;
      const [firstIndexTo, secondIndexTo] = to;
      const originElement = { ...miniCubeModelCopy[firstIndexElement][secondIndexElement] };
      const destinationElement = miniCubeModel[firstIndexTo][secondIndexTo];

      originElement.position = destinationElement.position;
      originElement.faces = rotateFaces(originElement.faces, movement);
      originElement.hasToRePaint = true;

      miniCubeModel[firstIndexTo][secondIndexTo] = originElement;
    });

    ACTUAL_MOVEMENT = movement;
    if (countMove) {
      USER_MOVES.push({ ...MOVES[movement], isAuto: false });
    }

    if (isAutomatic) {
      COUNT_MOVES = 0;
    } else {
      COUNT_MOVES++;
    }
    rePaintCube(animationDuration);
  }
};

const rePaintCube = (animationDuration = 0.5) => {
  isCubeMoving = true;
  const unPaintedMiniCubes = miniCubeModel.flat().filter((miniCube) => miniCube.hasToRePaint);

  const $unPaintedMiniCubes = unPaintedMiniCubes.map((miniCube) => {
    return document.getElementById(miniCube.name);
  });

  movesElementsToAnotherParent($unPaintedMiniCubes, $cubicPlain);
  const nextCubeRotation = MOVES[ACTUAL_MOVEMENT].rotation;

  gsap.to($cubicPlain, {
    duration: animationDuration,
    rotationY: nextCubeRotation.y,
    rotationX: nextCubeRotation.x,
    rotationZ: nextCubeRotation.z,
    ease: "back.out(1.7)",
    clearProps: "all",
    onComplete: () => {
      updateCube(unPaintedMiniCubes);
      movesElementsToAnotherParent($unPaintedMiniCubes, $cubic);
      isCubeMoving = false;
    },
  });
  updateTimerMoves();
};
