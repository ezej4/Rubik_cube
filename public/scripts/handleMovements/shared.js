let $implicatedMiniCubes = [];
let proximityMoves = [];
let direction = "";
let move = null;
let isMovingNow = false;

const getMouseDirection = ({ originPosition, currentPosition }) => {
  const { pageX: xOrigin, pageY: yOrigin } = originPosition;
  const { pageX: xCurrent, pageY: yCurrent } = currentPosition;

  const xDisplacement = xOrigin - xCurrent;
  const yDisplacement = yOrigin - yCurrent;

  let direction = null;

  if (Math.abs(xDisplacement) > Math.abs(yDisplacement)) {
    if (xDisplacement < 0) {
      direction = "right";
    } else direction = "left";
  } else {
    if (yDisplacement < 0) {
      direction = "bottom";
    } else direction = "top";
  }

  if (Math.abs(xDisplacement) < 20 && Math.abs(yDisplacement) < 20) {
    return { direction: null, xDisplacement: null, yDisplacement: null };
  }

  return { direction, xDisplacement, yDisplacement };
};

const resetVariables = () => {
  if (IS_MOBILE) {
    originFingerPosition.isSetted = false;
  } else {
    originMousePosition.isSetted = false;
  }
  //movesElementsToAnotherParent($implicatedMiniCubes, $cubic)
  isMovingNow = false;
  $implicatedMiniCubes = [];
  move = null;
  direction = "";
  removeEvents();
};

const hasMinimunMoveMouse = (xDisplacement, yDisplacement, direction) => {
  const minimalMove = IS_MOBILE ? 20 : 40;

  if (["left", "right"].includes(direction)) {
    return Math.abs(xDisplacement) > minimalMove;
  }

  return Math.abs(yDisplacement) > minimalMove;
};

const hasInTheSamePosition = (event) => {
  const { changedTouches, pageX, pageY } = event;

  if (IS_MOBILE) {
    originFingerPosition.pageX === changedTouches[0].pageX && originFingerPosition.pageY === changedTouches[0].pageY;
  } else {
    originMousePosition.pageX === pageX && originMousePosition.pageY === pageY;
  }
};
