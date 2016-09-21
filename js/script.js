$(document).ready (function () {
  $('#options_modal').slideToggle(100);
  $('#options_button').click(function () {
    $('#options_modal').toggleClass("modal_background");
    $('#options_modal').slideToggle(500);
  });
  $(".iphone_modal_header_button").click(function () {
    $(this).toggleClass("bg-white");
  });
  $(".footer_icon").click(function () {
    $(this).toggleClass("bg-white");
  });
  $("#first_track").click(function (){
    $(this).addClass("text_grey");
  });
  $("#next_track").click(function (){
    $("#first_track").removeClass("text_grey");
$('.modal_background').hide();  });
  $(".airdrop").click(function (){
    $(".airdrop > .air_text").toggleClass("text_white");
    if ($(".airdrop > div .air_icon").attr("src").indexOf("airdrop_icon") === -1) {
      $(".airdrop > div .air_icon").attr("src", "./iphone-gallery/airdrop_icon.png");
    }
    else {
        $(".airdrop > div .air_icon").attr("src", "./iphone-gallery/noairdrop.png");
    }
  });
  $(".airplay").click(function (){
    $(".airplay > .air_text").toggleClass("text_white");
    if ($(".airplay > div .air_icon").attr("src").indexOf("airplay_icon") === -1) {
      $(".airplay > div .air_icon").attr("src", "./iphone-gallery/airplay_icon.png");
    }
    else {
        $(".airplay > div .air_icon").attr("src", "./iphone-gallery/noairplay.png");
    }
  });
  $("#options_close").click(function () {
    $('#options_modal').slideToggle(500, function () {
      $('#options_modal').toggleClass("modal_background");
    });
  });
  $("#msg_input").focusin(function(){
    $(".search_label").hide();
  });
  $("#msg_input").focusout(function(){
    $(".search_label").show();
  });
});
