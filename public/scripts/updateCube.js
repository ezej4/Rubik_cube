const updateCube = (miniCubesToUpdate) => {
  const getMiniCubeIndexsById = (id) => {
    if (!id) return;
    let result = null;

    // array every only for break the loop
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

  miniCubesToUpdate.forEach((miniCube) => {
    const { x: xTranf, y: yTranf, z: zTranf } = miniCube.position;
    miniCube.hasToRePaint = false;

    const $miniCubeElement = document.getElementById(miniCube.name);
    
    gsap.set(`#${miniCube.name}`, {
      x: xTranf,
      y: yTranf,
      z: zTranf,
    });

    // this option is valid to
    //const newTransformStyle = `translate3d(${xTranf}px,${yTranf}px,${zTranf}px)`;
    //  $miniCubeElement.style.transform = newTransformStyle; //

    while ($miniCubeElement.firstChild) $miniCubeElement.removeChild($miniCubeElement.firstChild);
    miniCube.faces.forEach((currentface, index) => {
      const face = document.createElement("div");
      face.className = `cubic__face cubic__face--${currentface.label}`;

      if (currentface.value) {
        const indexs = getMiniCubeIndexsById(miniCube.name);
        if (DEBUG_MODE) {
          face.innerHTML = indexs[0] + "-" + indexs[1] + " " + currentface.label;
        }
        face.classList.add(`cubic__face--${currentface.value}`);
        face.classList.add("cubic__face--colored");
      } else {
        face.classList.add("cubic__face--uncolored");
      }

      $miniCubeElement.appendChild(face);
    });
  });
};
