var recording = false;
var startRecording = () => {
  sensor.enabled = true
  recording=true;
}
var leftHitHandler = () => {
  //console.log("leftHitHandler");
  trackLeftHandler();
}
var rightHitHandler = () => {
 // console.log("right!");
  trackRightHandler();
}

var leftActual = false, rightActual = false;
function leftHandler() {
  //var audio = new Audio('camvas/don.wav');
  //audio.play();
  leftHitHandler();
}
function rightHandler() {
  
  //var audio = new Audio('camvas/ka.wav');
  //audio.play();
  rightHitHandler();
}
var setLeft = (newVal) => {
  if (sensor.latest.leftUp == newVal) {
    leftActual = newVal;
    if (newVal) {
      leftHandler();
      $(".feedback-left").addClass("feedback-active");
    } else {
      $(".feedback-left").removeClass("feedback-active");
    }
  } 
}
var setRight = (newVal) => {
  if (sensor.latest.rightUp == newVal) {
    rightActual = newVal;
    if (newVal) {
      rightHandler();
      $(".feedback-right").addClass("feedback-active");
    } else {
      $(".feedback-right").removeClass("feedback-active");
    }
  }
}

window.onload = function () {
  levels.loadSong()
  sensor.setup()
  sensor.callbacks.handleLeft = setLeft
  sensor.callbacks.handleRight = setRight
  sensor.callbacks.handleMedian = handleMedian

  for (songTitle in levels.tracks) {
    $('#song-select').append(`
      <option value="${songTitle}">${levels.tracks[songTitle].title}</option>
    `)
  }
  $('#song-select').change((val) => {
    console.log($('#song-select').children("option:selected")[0].value)
    trackSelected = $('#song-select').children("option:selected")[0].value
    loadSong()
    var levels = {
      tracks,
      track,
      loadSong
    }
  })

  $('.scoreboard').hide()
}

var prevMedian = 240;
var curMedian = 240;
function handleMedian(median) {
  curMedian = median;
  setTimeout(() => {
    prevMedian = median;
  }, 200);
}

var startTime;
function trackLeftHandler() {
  let curTime = (new Date()).getTime();
  let beatsSinceStart = (curTime - startTime) / 1000 / track.timePerBeat - 0.2 / track.timePerBeat;
  let possibleNotes = track.notes.filter(note => {
    if (note.played) return false;
    if (note.type == "hold") return false;
    if (note.side != "left") return false;
    if (Math.abs(note.unitStart / track.unitsPerBeat - beatsSinceStart) >= 1) return false;
    return true;
  });
  if (possibleNotes.length == 0) return;
  let notePlayed = possibleNotes[0];
  let error = Math.abs(notePlayed.unitStart / track.unitsPerBeat - beatsSinceStart);
  if (error < 0.25) handlePerfect(notePlayed);
  else if (error < 0.5) handleGreat(notePlayed);
  else if (error < 0.75) handleGood();
  else handleBad();
  notePlayed.played = 1;
  
}

function trackRightHandler() {
  let curTime = (new Date()).getTime();
  let beatsSinceStart = (curTime - startTime) / 1000 / track.timePerBeat - 0.2 / track.timePerBeat;
  let possibleNotes = track.notes.filter(note => {
    if (note.played) return false;
    if (note.type == "hold") return false;
    if (note.side != "right") return false;
    if (Math.abs(note.unitStart / track.unitsPerBeat - beatsSinceStart) >= 1) return false;
    return true;
  });
  if (possibleNotes.length == 0) return;
  let notePlayed = possibleNotes[0];
  let error = Math.abs(notePlayed.unitStart / track.unitsPerBeat - beatsSinceStart);
  if (error < 0.25) handlePerfect(notePlayed);
  else if (error < 0.5) handleGreat(notePlayed);
  else if (error < 0.75) handleGood();
  else handleBad();
  notePlayed.played = 1;
}

var ons = 0, combo = 0, maxcombo = 0;
var scores = {
  perfect: 0,
  great: 0,
  good: 0,
  bad: 0,
  miss: 0
}

function handlePerfect(note=null) {
  if (note) {
    note.ref.addClass('perfect-hit')
  }
  $("#judgement").html("PERFECT");
  $("#judgement").css("color", "gold");
  combo++;
  maxcombo = Math.max(maxcombo, combo);
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  scores.perfect++;
  updateScoreboard();
  setTimeout(removeInTime, 500);
}

function handleGreat(note=null) {
  if (note) {
    note.ref.addClass('great-hit')
  }
  $("#judgement").html("GREAT");
  $("#judgement").css("color", "green");
  combo++;
  maxcombo = Math.max(maxcombo, combo);
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  scores.great++;
  updateScoreboard();
  setTimeout(removeInTime, 500);
}

function handleGood(note=null) {
  if (note) {
    note.ref.addClass('good-hit')
  }
  $("#judgement").html("GOOD");
  $("#judgement").css("color", "skyblue");
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  scores.good++;
  updateScoreboard();
  setTimeout(removeInTime, 500);
}

function handleBad() {
  $("#judgement").html("BAD");
  $("#judgement").css("color", "pink");
  combo = 0;
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  scores.bad++;
  updateScoreboard();
  setTimeout(removeInTime, 500);
}

function handleMiss() {
  $("#judgement").html("MISS");
  $("#judgement").css("color", "red");
  combo = 0;
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  scores.miss++;
  updateScoreboard();
  setTimeout(removeInTime, 500);
}

function updateScoreboard() {
  var total = 0
  for (judgement of ['perfect', 'great', 'good', 'bad', 'miss']) {
    $(`#scoreboard-${judgement}`).text(`${scores[judgement]}`)
    total += scores[judgement]
  }
  var points = scores.perfect + scores.great * 0.6 + scores.good * 0.3 + scores.bad * 0.1
  console.log(maxcombo);
  var percent = 100 * points / total
  $(`#scoreboard-accuracy`).text(parseFloat(percent).toFixed(2)+"%");
  $("#max-combo").text(maxcombo.toString());

  var flavorText = ""
  if (percent < 50) {
    flavorText = "Try harder next time!"
  } else if (percent < 70) {
    flavorText = "Good job!"
  } else if (percent < 90) {
    flavorText = "Great work!"
  } else {
    flavorText = "AMAZING JOB!!!1!"
  }
  $("#score-flavor").text(flavorText);
}

function removeInTime() {
  ons -= 1;
  if (ons == 0) {
    $("#judgement").html("");
    $("#combo").html("");
  }
}

function endgame() {
  $('.scoreboard').addClass('endgame')
  $('#score-flavor').show()
}

function start() {
  $('.scoreboard').show()
  $('#score-flavor').hide()
  $('#song-select').hide()
  $('.startbutton').hide()
  startRecording();
  var audio = document.getElementById("audio");
  for (let i = 0; i < track.totalBeats - 1; i++) {
    $("table").append("<tr><td></td><td></td></tr>");
  }

  track.notes.forEach((note, noteIndex) => {
    if (note.type == "tap") {
      var distanceBottom = 15 * note.unitStart / track.unitsPerBeat;
      var distanceLeft = (note.side == "left") ? 50 : 350;
      $("table").append("<div id='note-" + `${noteIndex}`+ "' class='tap' style='bottom:"+distanceBottom.toString()+"vh;transform: translate("+distanceLeft.toString()+"px,10px);'></div>");
    } else if (note.type == "hold") {
      var distanceBottom = 15 * note.unitStart / track.unitsPerBeat;
      var distanceLeft = (note.side == "left") ? 50 : 350;
      var height = 15 * (note.duration / track.unitsPerBeat);
      $("table").append("<div id='note-" + `${noteIndex}`+ "' class='hold' style='bottom:"+distanceBottom.toString()+"vh;height:"+height.toString()+"vh; transform: translate("+distanceLeft.toString()+"px,0px);'></div>");
    } else if (note.type == "swipe") {
      var distanceBottom = 15 * note.unitStart / track.unitsPerBeat;
      if (note.side == "right") $("table").append("<div id='note-" + `${noteIndex}`+ "' class='swipe' style='bottom:"+distanceBottom.toString()+"vh;'><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i></div>");
      else $("table").append("<div id='note-" + `${noteIndex}`+ "' class='swipe' style='bottom:"+distanceBottom.toString()+"vh;'><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i></div>");
    }
    note.ref = $(`#note-${noteIndex}`)
  });
  audio.play();
  startTime = (new Date()).getTime() + track.offset * 1000;
  function isLeft() {
    if (sensor.latest.leftUp || leftActual) handlePerfect();
    else handleMiss();
  }
  function isRight() {
    if (sensor.latest.rightUp || rightActual) handlePerfect();
    else handleMiss();
  }
  function isSwipeLeft() {
    // console.log('left', curMedian, prevMedian, curMedian < prevMedian - 20, sensor.latest.medianXDelta)
    if (curMedian < prevMedian - 20 || sensor.latest.medianXDelta < -70) {
      handlePerfect();
      $(".feedback-swipe-left").addClass("feedback-active");
      setTimeout(() => {
        $(".feedback-swipe-left").removeClass("feedback-active");
      }, 700)
    }
    else handleMiss();
  }
  function isSwipeRight() {
    // console.log('right', curMedian, prevMedian, curMedian > prevMedian + 20, sensor.latest.medianXDelta)
    if (curMedian > prevMedian + 20 || sensor.latest.medianXDelta > 70) {
      handlePerfect();
      $(".feedback-swipe-right").addClass("feedback-active");
      setTimeout(() => {
        $(".feedback-swipe-right").removeClass("feedback-active");
      }, 700)
    }
    else handleMiss();
  }
  track.notes.forEach(note => {
    if (note.type == "hold") {
      for (let i = 0; i < note.duration; i++) {
        var units = note.unitStart + i;
        if (note.side == "left") setTimeout( () => {
          isLeft(note)
        }, (units / track.unitsPerBeat * track.timePerBeat + track.offset + 0.2) * 1000);
        else setTimeout(() => {
          isRight(note)
        }, (units / track.unitsPerBeat * track.timePerBeat + track.offset + 0.2) * 1000);
      }
    }
    else if (note.type == "swipe") {
      var timeAfter = (note.unitStart / track.unitsPerBeat * track.timePerBeat + track.offset + 0.2) * 1000;
      if (note.side == "left") setTimeout(isSwipeLeft, timeAfter);
      else setTimeout(isSwipeRight, timeAfter);
    }
    else {
      setTimeout(() => {
        if (!note.played) {
          handleMiss();
        }
      }, ((note.unitStart * track.unitsPerBeat + 1) * track.timePerBeat + track.offset + 0.3) * 1000);
    }
  });
  setTimeout(function() {
    $("table").animate({
      'bottom': 30-(track.totalBeats * 15).toString() + "vh"
    }, track.totalBeats * track.timePerBeat * 1000, "linear", null);
  }, track.offset * 1000);
  setTimeout(() => {
    endgame()
  }, track.totalBeats * track.timePerBeat * 1000 + track.offset * 1000);
};