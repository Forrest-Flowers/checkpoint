'use strict'
$( document ).ready(function() {

var data = {
  totalCurrent: 0,
  totalGPS: 0
};

setInterval(accumulate, 1000);

function accumulate() {
  data.totalCurrent += data.totalGPS;
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#gps").text((data.totalGPS / 2 ).toFixed(2));
}


$("#gecko").click(function() {
  data.totalCurrent++;
  updateReport();
})

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
});
