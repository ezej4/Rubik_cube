const getFace = (classList) => {
  const formatedClassList = Array.from(classList);
  const filteredClassList = formatedClassList.filter((className) => {
    return className.includes("cubic__face--");
  });

  return filteredClassList[0].split("--")[1];
};

const getMiniCubeIndexsById = (id) => {
  if (!id) return;
  let result = null;

  // array.every only for break the loop
  miniCubeModel.every((miniCubeRow, indexRow) => {
    const indexMiniCube = miniCubeRow.findIndex((miniCube) => miniCube.name === id);
    // find index in this row
    if (indexMiniCube !== -1) {
      result = [indexRow, indexMiniCube];
      return false;
    }
    return true;
  });
  return result;
};

const movesElementsToAnotherParent = (elements, newParent) => {
  elements.forEach((element) => {
    newParent.appendChild(element);
  });
};

const getProximityMovements = (cubeId, face) => {
  if (!cubeId || !face) return;

  const cubeIndexs = getMiniCubeIndexsById(cubeId);
  const { x, y } = cubePosition;

  const movesForCubeRotation = MOUSE_MOVEMENTS.find((element) => {
    return element.xAngle === x && element.yAngle === y;
  });

  const miniCubeManualMovement = movesForCubeRotation.value.find((miniCube) => {
    return miniCube.miniCube[0] === cubeIndexs[0] && miniCube.miniCube[1] === cubeIndexs[1];
  });

  return miniCubeManualMovement.proximityMoves[face];
};

const setIntervalX = (callback, delay, repetitions, callbackFinish = () => {}) => {
  let x = 0;
  if (repetitions === 0) return;
  const intervalID = window.setInterval(function () {
    callback();
    if (x === repetitions) {
      window.clearInterval(intervalID);
      callbackFinish();
    }
    x++;
  }, delay);
};

const scrollDown = () => {
  const element = document.getElementById("about");
  element.scrollIntoView(({block: "start", behavior: "smooth"}));
};

const scollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
