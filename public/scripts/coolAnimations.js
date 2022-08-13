const animateButton = document.getElementById("animate_button");
const animationDistance = IS_MOBILE ? 500 : 3000;

const coolAnimationTL = gsap.timeline({
  paused: true,
  yoyo: true,
  repeat: -1,
  repeatDelay: 0.2,
});

const animate = (event) => {
  if (isCubeMoving) return;

  if (!coolAnimationTL.paused()) {
    coolAnimationTL.seek(0);
    coolAnimationTL.pause();
    gsap.set("#cubic-selected-area", { overflow: "visible" });
    IsCubeAnimating = false;
  } else {
    coolAnimationTL.clear();
    coolAnimationTL.to(".cubic__mini", 1.5, {
      x: `+=random(-${animationDistance}, ${animationDistance})`,
      y: `+=random(-${animationDistance / 2}, ${animationDistance / 2})`,
      rotationX: `+=random(-360, 360)`,
      rotationZ: `+=random(-360, 360)`,
      stagger: 0.05,
    });
    gsap.set("#cubic-selected-area", { overflow: "hidden" });

    coolAnimationTL.play();

    IsCubeAnimating = true;
  }
};

animateButton.addEventListener("click", animate, false);
