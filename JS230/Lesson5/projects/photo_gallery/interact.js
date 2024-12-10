$(() => {
  let $slideShow = $('#slideshow');
  let $nav = $slideShow.find('ul');

  $nav.on('click', 'a', event => {
    event.preventDefault();

    let $li = $(event.currentTarget).closest("li");
    let idx = $li.index();

    $slideShow.find("figure").stop().filter(":visible").fadeOut(300);
    $slideShow.find("figure").eq(idx).delay(300).fadeIn(300);
    $nav.find(".active").removeClass("active");
    $li.addClass("active");

  });
});