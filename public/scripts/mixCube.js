const $mixCubegButton = document.getElementById("mix-button");

const getRandomMove = () => {
  const movesCopy = { ...MOVES };
  var result;
  var count = 0;
  for (var prop in movesCopy) if (Math.random() < 1 / ++count) result = prop;
  return result;
};

const handleMixCubeClick = () => {
  const amountOfMixins = 20;

  if (isCubeMoving || IsCubeAnimating) return;
  

  setIntervalX(
    () => {
      const aleatoryMove = getRandomMove();
      moveCube(aleatoryMove, 0.08, true);
      isCubeMoving = true;
    },
    100,
    amountOfMixins,
    () => {
      isCubeMoving = false;
    }
  );
};

$mixCubegButton.addEventListener("click", handleMixCubeClick, false);
