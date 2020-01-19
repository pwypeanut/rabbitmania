var recording = false;
var startRecording = () => {
  recording=true;
}
var leftHitHandler = () => {
  //console.log("left!");
  trackLeftHandler();
}
var rightHitHandler = () => {
 // console.log("right!");
  trackRightHandler();
}

var leftUp = false, rightUp = false;
var leftActual = false, rightActual = false;
function leftHandler() {
  
  var audio = new Audio('camvas/don.wav');
  //audio.play();
  leftHitHandler();
}
function rightHandler() {
  
  var audio = new Audio('camvas/ka.wav');
  //audio.play();
  rightHitHandler();
}
var setLeft = (newVal) => {
  if (leftUp == newVal) {
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
  if (rightUp == newVal) {
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
  var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
  var canvas = document.getElementsByTagName('canvas')[0]
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(-1, 1);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);
  var draw = function (video, dt) {
    ctx.drawImage(video, 0, 0, 640, 480);
    var imageData = ctx.getImageData(0, 0, 640, 480);
    var whitePixels = [];
    for (let i = 0; i < 480; i++) {
      for (let j = 0; j < 640; j++) {
        var startIdx = (i * 640 + j) * 4;
        var r = imageData.data[startIdx], g = imageData.data[startIdx + 1], b = imageData.data[startIdx + 2];
        if (r * 2  + g + b > 750) {
          // imageData.data[startIdx] = 255;
          //imageData.data[startIdx + 1] = 0;
          //imageData.data[startIdx + 2] = 0;
          whitePixels.push([i, j]);
        }
      }
    }
    if (whitePixels.length == 0) return;


    Array.prototype.stanDeviate = function () {
      var i, j, total = 0, mean = 0, diffSqredArr = [];
      for (i = 0; i < this.length; i += 1) {
        total += this[i];
      }
      mean = total / this.length;
      for (j = 0; j < this.length; j += 1) {
        diffSqredArr.push(Math.pow((this[j] - mean), 2));
      }
      return (Math.sqrt(diffSqredArr.reduce(function (firstEl, nextEl) {
        return firstEl + nextEl;
      }) / this.length));
    };
    var threshold = whitePixels[Math.floor(whitePixels.length / 2)][0] + whitePixels.map(arr => arr[0]).stanDeviate();
    whitePixels = whitePixels.filter(a => {
      return a[0] < threshold;
    });

    whitePixels.forEach((a) => {
      var startIdx = a[0] * 640 + a[1];
      startIdx *= 4;
      imageData.data[startIdx] = 255;
      imageData.data[startIdx + 1] = 0;
      imageData.data[startIdx + 2] = 0;
    });
    var hori = [];
    hori = whitePixels.map(arr => arr[1]);
    hori.sort((a, b) => (a - b))

    var vert = [];
    vert = whitePixels.map(arr => arr[0]);
    vert.sort((a, b) => (a - b));

    var medianX = hori[Math.floor(hori.length / 2)];

    handleMedian(medianX);

    var leftPixels = whitePixels.filter(a => (a[1] < hori[Math.floor(hori.length / 5)]));
    var rightPixels = whitePixels.filter(a => (a[1] >= hori[Math.floor(hori.length * 4 / 5)]));



    var leftCutY = leftPixels.map(a => a[0]).sort((a, b) => (a-b))[Math.floor(leftPixels.length / 100 * 5)];
    var rightCutY = rightPixels.map(a => a[0]).sort((a, b) => (a-b))[Math.floor(rightPixels.length / 100 * 5)];
    var centreLinePixels = whitePixels.filter(a => (Math.abs(a[1] - medianX) < 20));
    var cp = centreLinePixels.map(a => a[0]).sort((a, b) => (a-b));
    medianY = cp[Math.floor(cp.length * 7 / 10)];

    for (let i = 0; i < 480; i++) {
      for (let j = 0; j < 640; j++) {
        var startIdx = (i * 640 + j) * 4;
        var r = imageData.data[startIdx], g = imageData.data[startIdx + 1], b = imageData.data[startIdx + 2];
        if ((i >= medianY - 2 && i <= medianY + 2) ||
          (j >= medianX - 2 && j <= medianX + 2) || 
          (j < medianX && i >= leftCutY - 2 && i <= leftCutY + 2) ||
          (j >= medianX && i >= rightCutY - 2 && i <= rightCutY + 2)) {
          imageData.data[startIdx] = 0;
          imageData.data[startIdx + 1] = 0;
          imageData.data[startIdx + 2] = 0;
        }
      }
    }
    if (recording) {

      var stdDev = (vert[Math.floor(vert.length*5/10)] - vert[Math.floor(vert.length*3/10)]) * 2.5;
      var newLeftUp = false, newRightUp = false;
      if (leftCutY <= medianY - stdDev) newLeftUp = true;
      else newLeftUp = false;
      if (rightCutY <= medianY - stdDev) newRightUp = true;
      else newRightUp = false;
      
      let lh = false, rh = false;
      if (!leftUp && newLeftUp) {
        setTimeout(() => setLeft(true), 10);
      } 
      if (leftUp && !newLeftUp) {
        setTimeout(() => setLeft(false), 100)
      }
      if (!rightUp && newRightUp) {
        setTimeout(() => setRight(true), 10);
      }
      if (rightUp && !newRightUp) {
        setTimeout(() => setRight(false), 100);
      }

      leftUp = newLeftUp;
      rightUp = newRightUp;

      ctx.putImageData(imageData, 0, 0);
    }
  }
  var myCamvas = new camvas(ctx, draw)
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
  if (error < 0.25) handlePerfect();
  else if (error < 0.5) handleGreat();
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
  if (error < 0.25) handlePerfect();
  else if (error < 0.5) handleGreat();
  else if (error < 0.75) handleGood();
  else handleBad();
  notePlayed.played = 1;
}

var ons = 0, combo = 0;

function handlePerfect() {
  $("#judgement").html("PERFECT");
  $("#judgement").css("color", "gold");
  combo++;
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  setTimeout(removeInTime, 500);
}

function handleGreat() {
  $("#judgement").html("GREAT");
  $("#judgement").css("color", "green");
  combo++;
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  setTimeout(removeInTime, 500);
}

function handleGood() {
  $("#judgement").html("GOOD");
  $("#judgement").css("color", "skyblue");
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  setTimeout(removeInTime, 500);
}

function handleBad() {
  $("#judgement").html("BAD");
  $("#judgement").css("color", "pink");
  combo = 0;
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  setTimeout(removeInTime, 500);
}

function handleMiss() {
  $("#judgement").html("MISS");
  $("#judgement").css("color", "red");
  combo = 0;
  if (combo >= 3) $("#combo").html("COMBO "+combo.toString());
  else $("#combo").html("");
  ons += 1;
  setTimeout(removeInTime, 500);
}

function removeInTime() {
  ons -= 1;
  if (ons == 0) {
    $("#judgement").html("");
    $("#combo").html("");
  }
}

function start() {
  startRecording();
  var audio = document.getElementById("audio");
  for (let i = 0; i < track.totalBeats - 1; i++) {
    $("table").append("<tr><td></td><td></td></tr>");
  }

  track.notes.forEach(note => {
    if (note.type == "tap") {
      var distanceBottom = 15 * note.unitStart / track.unitsPerBeat;
      var distanceLeft = (note.side == "left") ? 50 : 350;
      $("table").append("<div class='tap' style='bottom:"+distanceBottom.toString()+"vh;transform: translate("+distanceLeft.toString()+"px,10px);'></div>");
    } else if (note.type == "hold") {
      var distanceBottom = 15 * note.unitStart / track.unitsPerBeat;
      var distanceLeft = (note.side == "left") ? 50 : 350;
      var height = 15 * (note.duration / track.unitsPerBeat);
      $("table").append("<div class='hold' style='bottom:"+distanceBottom.toString()+"vh;height:"+height.toString()+"vh; transform: translate("+distanceLeft.toString()+"px,0px);'></div>");
    } else if (note.type == "swipe") {
      var distanceBottom = 15 * note.unitStart / track.unitsPerBeat;
      if (note.side == "right") $("table").append("<div class='swipe' style='bottom:"+distanceBottom.toString()+"vh;'><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i><i class='arrow right'></i></div>");
      else $("table").append("<div class='swipe' style='bottom:"+distanceBottom.toString()+"vh;'><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i><i class='arrow left'></i></div>");
    }
  });
  audio.play();
  startTime = (new Date()).getTime() + track.offset * 1000;
  function isLeft() {
    if (leftUp || leftActual) handlePerfect();
    else handleMiss();
  }
  function isRight() {
    if (rightUp || rightActual) handlePerfect();
    else handleMiss();
  }
  function isSwipeLeft() {
    if (curMedian < prevMedian - 20) handlePerfect();
    else handleMiss();
  }
  function isSwipeRight() {
    if (curMedian > prevMedian + 20) handlePerfect();
    else handleMiss();
  }
  track.notes.forEach(note => {
    if (note.type == "hold") {
      for (let i = 0; i <= note.duration; i++) {
        var units = note.unitStart + i;
        if (note.side == "left") setTimeout(isLeft, (units / track.unitsPerBeat * track.timePerBeat + track.offset + 0.2) * 1000);
        else setTimeout(isRight, (units / track.unitsPerBeat * track.timePerBeat + track.offset + 0.2) * 1000);
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
};