const handleKeyDown = (event) => {
  const keyPressed = event.key;
  const animationVelocity = 0.2;
  const keyCases = {
    ArrowUp: () => rotate("top"),
    ArrowLeft: () => rotate("left"),
    ArrowRight: () => rotate("right"),
    u: () => moveCube("U", animationVelocity),
    U: () => moveCube("U!", animationVelocity),
    e: () => moveCube("E", animationVelocity),
    E: () => moveCube("E!", animationVelocity),
    d: () => moveCube("D", animationVelocity),
    D: () => moveCube("D!", animationVelocity),
    r: () => moveCube("R", animationVelocity),
    R: () => moveCube("R!", animationVelocity),
    m: () => moveCube("M", animationVelocity),
    M: () => moveCube("M!", animationVelocity),
    l: () => moveCube("L", animationVelocity),
    L: () => moveCube("L!", animationVelocity),
    f: () => moveCube("F", animationVelocity),
    F: () => moveCube("F!", animationVelocity),
    s: () => moveCube("S", animationVelocity),
    S: () => moveCube("S!", animationVelocity),
    b: () => moveCube("B", animationVelocity),
    B: () => moveCube("B!", animationVelocity),
    q: () => handleMixCubeClick(),
    w: () => restoreCube(),
    t: () => showTimer(),
    c: () => animate(),
  };

  const caseToExect = keyCases[keyPressed];
  if (caseToExect) {
    caseToExect();
  }
};

document.addEventListener("keydown", handleKeyDown);
