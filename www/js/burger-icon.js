$(function() {
  var burger = $(".burger__icon");
  burger.click(function() {
    var state = burger.attr("data-burger-state");
    burger.attr("data-burger-state", (state === "on") ? "off" : "on");
    burger[0].setCurrentTime(0);
    $(".navigation").animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 200);
  });
});