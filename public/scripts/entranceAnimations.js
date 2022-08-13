const isPageOnTheTop = !window.pageYOffset || window.pageYOffset < 200;

const entranceAnim = () => {
  isCubeMoving = true;

  const entranceAnimationTL = gsap.timeline({
    repeatDelay: 1,
  });

  entranceAnimationTL.eventCallback("onComplete", () => {
    gsap.set("body", { overflow: "visible" });
  });

  gsap.set("body", { overflow: "hidden" });

  const animationDistance = IS_MOBILE ? 3000 : 10000;

  entranceAnimationTL
    .from(".header__icon .face-front, .face-right, .face-top", 0.5, {
      fill: "transparent",
      opacity: 0,
      stagger: 0.05,
    })
    .from(
      ".header__title",
      0.5,
      {
        y: -100,
        ease: Power4.easeOuteaseOut,
      },
      "<"
    )
    .to(".cubic__mini", 0.1, {
      opacity: 1,
    })
    .from(
      ".section-cubic__main",
      3,
      {
        rotationY: 360 ,
        rotationX: 120 ,
        rotationZ: 120 ,
      },
      "<"
    )
    .from(
      ".cubic__mini",
      3,
      {
        rotationX: 360 * 5,
        rotationY: 360 * 5,
        rotationZ: 360 * 5,
        x: `random(-${animationDistance}, ${animationDistance})`,
        z: `random(-${animationDistance}, ${animationDistance})`,
        y: `random(-${animationDistance}, ${animationDistance})`,
        backgroundColor: "transparent",
        stagger: 0.02,
        ease: "back",
        onComplete: () => {
          isCubeMoving = false;
        },
      },
      0.9
    )
   

    .from(".action-bar", 0.5, {
      y: 1000,
      opacity: 0,
      overflox: "hidden",
    })

    .from(
      ".flows-buttons",
      0.5,
      {
        x: 1000,
        opacity: 0,
        overflox: "hidden",
      },
      "<"
    );
};

if (!DEBUG_MODE && isPageOnTheTop) {
  entranceAnim();
} else {
  gsap.set(".cubic__mini", {
    opacity: 1,
  });
}
