var myDraggable = Draggable.create(".drag-me", {
  type: "x",
  bounds: ".container",
});

function checkOverlap() {
  var div1 = document.querySelector(".end");
  var div2 = document.querySelector(".drag-me");
  var rect1 = div1.getBoundingClientRect();
  var rect2 = div2.getBoundingClientRect();

  if (rect1.left < rect2.right) {
    document.querySelector(".boat1").style.opacity = 0;
    document.querySelector("i").style.opacity = 0;
    document.querySelector(".on-cir").style.backgroundColor = "#fff";
  } else {
    document.querySelector(".boat1").style.opacity = 1;
    document.querySelector("i").style.opacity = 1;
    document.querySelector(".on-cir").style.backgroundColor = "orange";
  }
}
window.addEventListener("mousemove", checkOverlap);
