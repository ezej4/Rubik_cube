const originMousePosition = {
  pageX: 0,
  pageY: 0,
  isSetted: false,
};

const getRotations = ({ pageX, pageY }) => {
  const aceleration = 100;
  const results = { x: 0, y: 0, z: 0 };
  let xRotation = 0;
  let yRotation = 0;
  let zRotation = 0;

  if (!move) {
    return results;
  }

  if (move.rotation.x !== 0) {
    yRotation = ((originMousePosition.pageY - pageY) / $cubicPlain.offsetHeight) * aceleration;

    if (proximityMoves.invertedY) {
      yRotation = ((pageY - originMousePosition.pageY) / $cubicPlain.offsetHeight) * aceleration;
    }

    return { ...results, x: yRotation };
  } else if (move.rotation.y !== 0) {
    xRotation = ((pageX - originMousePosition.pageX) / $cubicPlain.offsetWidth) * aceleration;

    if (proximityMoves.invertedX) {
      xRotation = ((originMousePosition.pageX - pageX) / $cubicPlain.offsetHeight) * aceleration;
    }

    return { ...results, y: xRotation };
  } else if (move.rotation.z !== 0) {
    zRotation = ((originMousePosition.pageY - pageY) / $cubicPlain.offsetHeight) * aceleration;

    if (proximityMoves.invertedZ) {
      zRotation = ((pageY - originMousePosition.pageY) / $cubicPlain.offsetHeight) * aceleration;
    }
    return { ...results, z: zRotation };
  }
};

const setOriginPosition = (event) => {
  const { pageX, pageY } = event;
  originMousePosition.pageX = pageX;
  originMousePosition.pageY = pageY;
  originMousePosition.isSetted = true;
};

const registerEvents = () => {
  selectedArea.addEventListener("mousemove", mouseMoveHandler);
  selectedArea.addEventListener("mouseleave", mouseUpHandler);
  selectedArea.addEventListener("mouseup", mouseUpHandler);
};

const removeEvents = () => {
  selectedArea.removeEventListener("mousemove", mouseMoveHandler);
  selectedArea.removeEventListener("mouseleave", mouseUpHandler);
  selectedArea.removeEventListener("mouseup", mouseUpHandler);
};

const mouseDownHandler = (event) => {
  event.preventDefault();

  const { target } = event;

  if (isMovingNow || !target.classList.contains("cubic__face")) {
    resetVariables();
    return;
  }

  isMovingNow = true;
  const cubeId = target.parentElement.id;
  const face = getFace(target.classList);
  proximityMoves = getProximityMovements(cubeId, face);

  registerEvents();
};

const mouseMoveHandler = (event) => {
  const { pageX, pageY } = event;
  const currentPosition = { pageX, pageY };

  const originPosition = originMousePosition;

  if (hasInTheSamePosition(event)) return;

  if (!originMousePosition.isSetted) {
    setOriginPosition(event);
    return;
  }

  if (!move) {
    const { direction: detectedDirection } = getMouseDirection({
      originPosition,
      currentPosition,
    });

    if (!detectedDirection) return;

    direction = detectedDirection;

    if (!proximityMoves) {
      resetVariables();
      return;
    }

    const detectedMove = proximityMoves[direction];

    move = MOVES[detectedMove];

    $implicatedMiniCubes = move.implicatedMiniCubes.map(({ element }) => {
      const [firstIndex, secondIndex] = element;
      const miniCube = miniCubeModel[firstIndex][secondIndex];

      return document.getElementById(miniCube.name);
    });
    movesElementsToAnotherParent($implicatedMiniCubes, $cubicPlain);
    return;
  }

  const { x, y, z } = getRotations(currentPosition);

  gsap.to($cubicPlain, 0.3, {
    rotationY: y,
    rotationZ: z,
    rotationX: x,
    //ease: "Power1.easeOut",
  });
};

const mouseUpHandler = (event) => {
  selectedArea.removeEventListener("mousemove", mouseMoveHandler);

  const { changedTouches, pageX, pageY } = event;
  // get the current position of the mouse/finger
  const currentPosition = { pageX, pageY };
  // get the origin position of the mouse/finger
  const originPosition = originMousePosition;

  if (!originPosition || !move) {
    resetVariables();
    return;
  }

  // obtain the direction of the mouse/finger based on the user's movement
  const { xDisplacement, yDisplacement } = getMouseDirection({ originPosition, currentPosition });

  // if the user dont move enough, we reset the variables
  const isMouseMoveEnough = hasMinimunMoveMouse(xDisplacement, yDisplacement, direction);

  if (!isMouseMoveEnough) {
    gsap.to($cubicPlain, {
      duration: 0.3,
      rotationY: 0,
      rotationX: 0,
      rotationZ: 0,
      clearProps: "all",
      onComplete: () => {
        movesElementsToAnotherParent($implicatedMiniCubes, $cubic);
        resetVariables();
      },
    });

    return;
  }

  let moveToExec = "";

  switch (direction) {
    case "right": {
      moveToExec = xDisplacement < 0 ? move.name : move.inverse;
      break;
    }
    case "left": {
      moveToExec = xDisplacement > 0 ? move.name : move.inverse;
      break;
    }
    case "top": {
      moveToExec = yDisplacement > 0 ? move.name : move.inverse;
      break;
    }
    case "bottom": {
      moveToExec = yDisplacement < 0 ? move.name : move.inverse;
      break;
    }
  }

  const animationDuration = 0.3;

  moveCube(moveToExec, animationDuration);

  setTimeout(() => {
    resetVariables();
  }, animationDuration * 1000);
};

selectedArea.addEventListener("mousedown", mouseDownHandler);
