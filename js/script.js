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
        $('.chat_end').removeClass("chat_end");
        chat.append("<div id='new_container' class='chat_user_container2 bubble bubble--alt chat_end'></div>");
        var chat_container = $("#new_container");
        chat_container.append("<div id='new_user' class='chat_user2'></div>");
        var chat_msg = $("#new_user");
        chat_msg.append("<p>" + $('#imessage').val() + "</p>");
        chat_container.removeAttr('id');
        chat_msg.removeAttr('id');
        $('#imessage').val("");
        $(".chat_content").animate({ scrollTop: $(".chat_content").prop("scrollHeight")}, 1000);
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

  var battery = 100;
  if (battery < 20) {
    $('#battery_logo').addClass("fa-battery-empty");
    $('#battery_logo').removeClass("fa-battery-quarter");
  }
  else if (battery < 40) {
    $('#battery_logo').addClass("fa-battery-quarter");
    $('#battery_logo').removeClass("fa-battery-half");
  }
  else if (battery < 60) {
    $('#battery_logo').addClass("fa-battery-half");
    $('#battery_logo').removeClass("fa-battery-three-quarters");
  }
  else if (battery < 80) {
    $('#battery_logo').addClass("fa-battery-three-quarters");
    $('#battery_logo').removeClass("fa-battery-full");
  }
  else  if (battery <= 100){
    $('#battery_logo').addClass("fa-battery-full");
  }
  $('#battery').text(battery + "%");
  function updateBattery() {
    battery--;
    if (battery < 0) {
      battery = 0;
    }
    if (battery === 0) {
      $('body').html("");
      $('body').addClass("no_screen");
    }
    if (battery === 20) {
      $('#battery_logo').addClass("fa-battery-empty");
      $('#battery_logo').removeClass("fa-battery-quarter");
    }
    else if (battery === 40) {
      $('#battery_logo').addClass("fa-battery-quarter");
      $('#battery_logo').removeClass("fa-battery-half");
    }
    else if (battery === 60) {
      $('#battery_logo').addClass("fa-battery-half");
      $('#battery_logo').removeClass("fa-battery-three-quarters");
    }
    else if (battery === 80) {
      $('#battery_logo').addClass("fa-battery-three-quarters");
      $('#battery_logo').removeClass("fa-battery-full");
    }
    else if (battery === 100) {
      $('#battery_logo').addClass("fa-battery-full");
    }
    $('#battery').text(battery + "%");
  }

  updateTime();
  setInterval(updateTime, 1000);
  setInterval(updateBattery, 1000);
});
