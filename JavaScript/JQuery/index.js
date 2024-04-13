$("h1").css("color", "red");
$("button").css("background-color", "yellow");

$("button").click(function () {
  $("h1").css("color", "red");
  $(this).css("background-color", "purple");
});
$("h1").click(function () {
  $(this).css("color", "purple");
});
$("input").keydown(function (event) {
  $("h1").text(event.key);
});
$("body").keydown(function (event) {
  $("h1").text(event.key);
});
$("h1").on("mouseover", function () {
  $(this).css("color", "purple");
});
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({
    opacity: 0.5,
  });
});
