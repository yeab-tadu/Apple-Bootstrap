$(function () {
  Footer();
  // $(window).on("resize", function () {
  //   Footer();
  // });
  $(window).on("resize", Footer);

  function Footer() {
    if ($(window).width() < 900) {
      $(".footer-heading")
        .off("click")
        .on("click", function () {
          $(this).toggleClass("active").next(".footer-links").slideToggle();
        });
    } else {
      $(".footer-heading").off("click");
      $(".footer-links").show();
      $(".footer-heading").removeClass("active");
    }
  }
});
