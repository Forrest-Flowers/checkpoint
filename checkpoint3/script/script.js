'use strict'
// Defines GPS and the the counter
var data = {
  totalCurrent: 0,
  totalGPS: 0
};

// Rate at which the current number changes in milliseconds (A tick)

setInterval(accumulate, 1000);

//Adds geckos at a rate determined by GPS

function accumulate() {
  data.totalCurrent += data.totalGPS;
  updateReport();
}

// Number of gains made per tick

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#gps").text((data.totalGPS / 2 ).toFixed(2));
}

//Gotta click geckos to get geckos

$("#gecko").click(function() {
  data.totalCurrent++;
  updateReport();
})

//Buy buttons and price raises.

$(".button").click(function() {
  var addVal = $(this).data("cost");
  if ($(this).data("cost") < data.totalCurrent) {
    data.totalCurrent -= parseFloat($(this).data("cost").toPrecision(2));
    data.totalGPS += parseFloat($(this).data("val"));
    $(this).children("span").html(parseInt($(this).children("span").html() * 1.2));
    $(this).data("cost", parseInt($(this).data("cost") * 1.2));
  }
  updateReport();
});
