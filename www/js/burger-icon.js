(function() {
  var element = document.querySelector(".burger__icon");
  element.addEventListener("click", function() {
    var value = element.getAttribute("data-burger-state");
    var state = (value === "on") ? "off" : "on";
    element.setAttribute("data-burger-state", state);
    element.setCurrentTime(0);

    $(".navigation").animate({opacity: 'toggle', height: 'toggle'}, 200);

  });
}());