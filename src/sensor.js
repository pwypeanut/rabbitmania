var sensor = {
  camvas: null,
  canvas: null,
  ctx: null,
  enabled: false,
  barWidth: 5,
  latest: {
    leftUp: false,
    rightUp: false,
    medianX: 640/2,
    medianXDelta: 0,
    swipeLeft: false,
    swipeRight: false
  },
  setup: null,
  callbacks: {
    handleLeft: () => {},
    handleRight: () => {},
    handleMedian: () => {},
    handleSwipeLeft: () => {},
    handleSwipeRight: () => {}
  }
}

var stdev = (x) => {
  var sum = x.reduce((acc, xi) => {
    return acc + xi;
  }, 0)
  var sumSquares = x.reduce((acc, xi) => {
    return acc + xi * xi;
  }, 0)
  var size = x.length
  return Math.sqrt(sumSquares / size - sum * sum / (size * size))
}

var quantile = (x, cutoffs) => {
  x = x.sort((a, b) => (a - b));
  if (Array.isArray(cutoffs)) {
    return cutoffs.map((cutoff) => {
      return x[Math.floor(x.length * cutoff)]
    })
  } else {
    return x[Math.floor(x.length * cutoffs)]
  }
}

var drawSensor = (video, dt) => {
  var ctx = sensor.ctx;
  ctx.drawImage(video, 0, 0, 640, 480);

  // Get 'white' pixels
  var imageData = ctx.getImageData(0, 0, 640, 480);
  var whitePixels = []
  for (var y=0; y<480; y++) {
    for (var x=0; x<640; x++) {
      var idx = (y * 640 + x) * 4;
      // r * 2 + g + b > 750
      if (imageData.data[idx] * 2 + imageData.data[idx+1] + imageData.data[idx+2] > 750) {
        whitePixels.push([y, x])
      }
    }
  }

  if (!whitePixels.length) return

  // Filter off pixels lower than 1 stdev off median
  var yTreshold = whitePixels[Math.floor(whitePixels.length / 2)][0] + stdev(whitePixels.map((x) => x[0]))
  whitePixels = whitePixels.filter((x) => {
    return x[0] < yTreshold
  })

  // Color the rest red
  whitePixels.forEach((i) => {
    var idx = (i[0] * 640 + i[1]) * 4;
    imageData.data[idx] = 255;
    imageData.data[idx + 1] = imageData.data[idx + 2] = 0;
  })

  var medianXs = quantile(whitePixels.map((x) => x[1]), [0.2, 0.5, 0.8])

  var medianLeftX = medianXs[0]
  var medianX = medianXs[1]
  var medianRightX = medianXs[2]

  var leftWhitePixels = whitePixels.filter((x) => x[1] < medianLeftX);
  var centerWhitePixels = whitePixels.filter((x) => (x[1] < medianX + 20 && x[1] > medianX - 20));
  var rightWhitePixels = whitePixels.filter((x) => x[1] >= medianRightX);

  var leftTopY = quantile(leftWhitePixels.map((x) => x[0]), 0.05)
  var medianY = quantile(centerWhitePixels.map((x) => x[0]), 0.5)
  var rightTopY = quantile(rightWhitePixels.map((x) => x[0]), 0.05)

  // console.log(leftTopY, medianY, rightTopY)

  var heightTresholds = quantile(whitePixels.map((x) => x[0]), [0.5, 0.3])
  var heightTreshold = medianY - (heightTresholds[0] - heightTresholds[1]) * 1.5

  var barWidth = sensor.barWidth

  // for (var x=0; x<640; x++) {
  //   for (var y=medianY-barWidth; y<medianY+barWidth; y++) {
  //     var idx = (y * 640 + x) * 4;
  //     imageData.data[idx] = imageData.data[idx + 1] = imageData.data[idx + 2] = 0;
  //   }
  // }

  // for (var x=0; x<640; x++) {
  //   for (var y=heightTreshold-barWidth; y<heightTreshold+barWidth; y++) {
  //     var idx = (y * 640 + x) * 4;
  //     imageData.data[idx] = imageData.data[idx + 1] = imageData.data[idx + 2] = 0;
  //   }
  // }

  // for (var y=0; y<480; y++) {
  //   for (var x=medianX-barWidth; x<medianX+barWidth; x++) {
  //     var idx = (y * 640 + x) * 4;
  //     imageData.data[idx] = imageData.data[idx + 1] = imageData.data[idx + 2] = 0;
  //   }
  // }

  // for (var x=0; x<medianX; x++) {
  //   for (var y=leftTopY-barWidth; y<leftTopY+barWidth; y++) {
  //     var idx = (y * 640 + x) * 4;
  //     imageData.data[idx] = imageData.data[idx + 2] = 0;
  //     imageData.data[idx + 1] = 255;
  //   }
  // }

  // for (var x=medianX; x<640; x++) {
  //   for (var y=rightTopY-barWidth; y<rightTopY+barWidth; y++) {
  //     var idx = (y * 640 + x) * 4;
  //     imageData.data[idx] = imageData.data[idx + 2] = 0;
  //     imageData.data[idx + 1] = 255;
  //   }
  // }

  ctx.putImageData(imageData, 0, 0)

  ctx.fillStyle = "black"

  // Median X
  ctx.beginPath()
  ctx.rect(640 - medianX - barWidth, 0, barWidth * 2, 480)
  ctx.fill()

  // Median Y
  ctx.beginPath()
  ctx.rect(0, medianY - barWidth, 640, barWidth * 2)
  ctx.fill()

  // Goal Y
  ctx.beginPath()
  ctx.rect(0, heightTreshold - barWidth, 640, barWidth * 2)
  ctx.fill()

  ctx.fillStyle = "green"

  // Left Y
  ctx.beginPath()
  ctx.rect(640 - medianX, leftTopY - barWidth, medianX, barWidth * 2)
  ctx.fill()

  // Right Y
  ctx.beginPath()
  ctx.rect(0, rightTopY - barWidth, 640 - medianX, barWidth * 2)
  ctx.fill()

  if (!sensor.enabled) return

  var latest = sensor.latest

  var leftUp = (leftTopY < heightTreshold)
  var rightUp = (rightTopY < heightTreshold)
  var medianXDelta = latest.medianXDelta * 0.95
  medianXDelta += medianX - latest.medianX
  var swipeLeft = (medianXDelta < -70)
  var swipeRight = (medianXDelta > 70)

  // console.log(medianXDelta)

  if (leftUp && !latest.leftUp) {
    console.log("leftup");
    latest.leftUp = leftUp;
    setLeft(true);
  } else if (!leftUp && latest.leftUp) {
    latest.leftUp = leftUp;
    setTimeout(() => {
      console.log("leftdown");
      setLeft(false)
    }, 100);
  }
  latest.leftUp = leftUp;

  if (rightUp && !latest.rightUp) {
    latest.rightUp = rightUp;
    setRight(true);
  } else if (!rightUp && latest.rightUp) {
    latest.rightUp = rightUp;
    setTimeout(() => {
      setRight(false);
    }, 100);
  }
  latest.rightUp = rightUp;
  sensor.callbacks.handleMedian(medianX)

  sensor.latest = {
    leftUp,
    rightUp,
    medianX,
    medianXDelta,
    swipeLeft,
    swipeRight
  }
}

var setupSensor = () => {
  var canvas = document.getElementById("sensor-canvas")
  var ctx = canvas.getContext('2d');

  sensor.canvas = canvas;
  sensor.ctx = ctx;
  
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(-1, 1);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  var myCamvas = new camvas(ctx, drawSensor)
}

sensor.setup = setupSensor