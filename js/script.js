$(document).ready (function () {
  $('#options_modal').toggle();
  $('#bg_modal').toggle();
  $('#options_button').click(function () {
    $('#bg_modal').toggle();
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
    $('.modal_background').hide();
  });
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
    $('#options_modal').slideToggle(500);
    $('#bg_modal').toggle();
  });
  $("#msg_input").focusin(function(){
    $(".search_label").hide();
  });
  $("#msg_input").focusout(function(){
    $(".search_label").show();
  });
  $(document).keypress(function(e) {
    var chat = $(".chat_content > div");
    if(e.which === 13) {
      if ($('#imessage').val() !== "") {
        chat.append("<div id='new_container' class='chat_user_container2 arrow_box2'></div>");
        var chat_container = $("#new_container");
        chat_container.append("<div id='new_user' class='chat_user2'></div>");
        var chat_msg = $("#new_user");
        chat_msg.append("<p>" + $('#imessage').val() + "</p>");
        if (chat_msg.width() < 200) {
          chat_container.addClass('mini_box');
        }
        chat_container.removeAttr('id');
        chat_msg.removeAttr('id');
        $('#imessage').val("");
      }
    }
  });
  var time = new Date($.now());
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var day = new Array();
  day[1] = "Monday";
  day[2] = "Tuesday";
  day[3] = "Wednesday";
  day[4] = "Thursday";
  day[5] = "Friday";
  day[6] = "Saturday";
  day[7] = "Sunday";
  var current_month = month[time.getMonth()];
  var current_day = day[time.getDay()];
  var current_day2 = time.getDate();

  function updateTime() {
    time = new Date($.now());
    if (time.getMinutes() < 10) {
      $('#time').text(time.getHours() + ":0" + time.getMinutes());
      $('#time_app').text(time.getHours() + ":0" + time.getMinutes());
    }
    else {
      $('#time').text(time.getHours() + ":" + time.getMinutes());
      $('#time_app').text(time.getHours() + ":" + time.getMinutes());
    }
    $('#date').text(current_day + ", " + current_month + " " + current_day2);
    $('#Date_app').text(current_day2);
  }

  updateTime();
  setInterval(updateTime, 1000);
});
