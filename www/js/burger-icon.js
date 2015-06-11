(function() {
  var element = document.querySelector(".burger__icon");
  element.addEventListener("click", function() {
    var value = element.getAttribute("data-burger-state");
    element.setAttribute("data-burger-state", (value === "on") ? "off" : "on");
    element.setCurrentTime(0);
  });
}());