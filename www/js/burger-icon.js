(function() {
  var element = document.querySelector(".burger__icon");
  element.addEventListener("click", function() {
    var value = element.getAttribute("data-burger-state");
    var state = (value === "on") ? "off" : "on";
    element.setAttribute("data-burger-state", state);
    element.setCurrentTime(0);

    var nav = document.querySelector(".navigation");
    if (state === "on")
      nav.style.display = "block";
    else
      nav.style.display = "none";

  });
}());