var head = document.getElementsByTagName("head")[0];
var script = document.createElement("script");

script.type = "text/javascript";

if (IS_MOBILE) {
  script.src = "./scripts/handleMovements/mobile.js";
} else {
  script.src = "./scripts/handleMovements/desktop.js";
}

head.appendChild(script);
