const getActualRotation = () => {
  const baseStyle = $cubic.style.transform;

  if (!baseStyle)
    return {
      x: 0,
      y: 0,
    };

  // grab all positive and negative numbers.
  const regex = /[-?\d|,|.\+]+/g;
  // grab all matches
  const values = baseStyle.match(regex);

  return {
    x: parseFloat(values[0]),
    y: parseFloat(values[1]),
  };
};

const rotate = (direction) => {
  if (!$cubic.classList.contains("cubic--auto-roting")) {
    $cubic.classList.add("cubic--auto-roting");
  }
  const { x: xRotation, y: yRotation } = getActualRotation();

  let rotationStyle;
  let newRotationY;
  let newRotationX;

  switch (direction) {
    case "left": {
      if (isCubeInvertedX) {
        rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation - 90}deg)`;
        newRotationY = cubePosition.y - 90;
      } else {
        newRotationY = cubePosition.y + 90;
        rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation + 90}deg)`;
      }

      if (newRotationY >= 360) {
        newRotationY = 0;
      }
      if (newRotationY < 0) {
        newRotationY = 270;
      }

      cubePosition = { ...cubePosition, y: newRotationY };
      isCubeInvertedY = cubePosition.y === 270;

      break;
    }
    case "right": {
      if (isCubeInvertedX) {
        rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation + 90}deg)`;
        newRotationY = cubePosition.y + 90;
      } else {
        newRotationY = cubePosition.y - 90;
        rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation - 90}deg)`;
      }

      if (newRotationY >= 360) {
        newRotationY = 0;
      }
      if (newRotationY < 0) {
        newRotationY = 270;
      }

      cubePosition = { ...cubePosition, y: newRotationY };
      isCubeInvertedY = cubePosition.y === 270;
      break;
    }
    case "top": {
      rotationStyle = `rotateX(${xRotation + 180}deg) rotateY(${yRotation}deg)`;
      newRotationX = cubePosition.x + 180 >= 360 ? cubePosition.x + 180 - 360 : cubePosition.x + 180;
      cubePosition = { ...cubePosition, x: newRotationX };
      isCubeInvertedX = cubePosition.x === 180;
      break;
    }
    default: {
      rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      break;
    }
  }


  $cubic.style.transform = rotationStyle;
};
