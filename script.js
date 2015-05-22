(function initiateWalk() {
  var img = document.getElementById("img");
  var div = document.getElementById("container");
  div.style.width = "800px";
  img.style.left = '0px';
  img.style.position = 'relative';

  function moveRight() {
    if (img.style.left === div.style.width) {
      img.className = "flip";
      walkLeft();
      return;
    }
    img.style.left = parseInt(img.style.left) + 1 + "px";
    var animate = setTimeout(moveRight, 8);
  }

  moveRight();

  function walkLeft() {
    if (img.style.left === "0px" && img.className === "flip") {
      img.className = "";
      moveRight();
      return;
    }
    img.style.left = parseInt(img.style.left) - 1 + 'px';
    var animate = setTimeout(walkLeft, 8);
  }
})();