$(document).ready(function() {
  $("#input").on("change", onChangeEvent);

  function onChangeEvent(event) {
    console.log("ON CHANGE EVENT");
    var value = event.target.value;

    fetchData(function(err, results) {
      if (err) {
        $("#error").html("Error fetching rates.");
        return;
      }
      console.log('err' + err);
      processResults(value, results);
    });
  }

  function fetchData(callBackFn) {
    $.ajax({
      url: "https://api.fixer.io/latest",
      type: "GET",
      dataType: "json",

      success: function(results) {
        console.log(results);
        callBackFn(null, results);
      },

      error: function(request) {
        callBackFn(request.responseText);
      }
    });
  }

  function processResults(value, data) {
    console.log(data);
    var usd = data.rates.USD;
    var newValue = value * usd;
    var container = $("#result");
    container.html("<p> " + value + " EUR = " + newValue + " USD</p>");
  }
});
