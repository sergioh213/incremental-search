(function() {
  console.log("sanity");
  var input = $("input");
  var index = 0;
  var matches = [];

  input.on("input", function(e) {
    var val = e.target.value;
    console.log(val);
    if (xhr) {
      xhr.abort();
    }

    var xhr = $.ajax({
      url: "https://flame-egg.glitch.me/",
      data: {
        q: val
      },
      success: function(data) {
        matches = data
        console.log(data);
        console.log("success");
        var resultsContainer = $("#results");
        var resultsHtml = "";
        if (data.length != 0) {
          for (var i = 0; i < data.length; i++) {
            resultsHtml += // making the selected texts in bold
              "<div class='result'>" +
              "<strong>" +
              data[i].substr(0, val.length) +
              "</strong>" +
              data[i].substr(val.length) +
              "</div>";
            console.log(data[i]);
          }
          resultsContainer.html(resultsHtml);
        } else {
          resultsContainer.html("<div class='result'>No Results</div>");
        }
      $("#results").slideDown();
      }
    });
  });

  $("#results")
    .on("mouseenter", ".result", function(e) {
      index = 0;
      $(".highlight").removeClass("highlight");
      console.log("entering result");
      $(this).addClass("highlight");
    })
    .on("mouseleave", ".highlight", function(e) {
      console.log("leaving result");
      $(this).removeClass("highlight");
    });

  $("#results").on("mousedown", ".result", function(e) {
    var textClicked = $(this).text();
    input.val(textClicked);
    $("#results").slideUp();
  });

  $("#search").on("keydown", function(e) {
    if (e.keyCode == 40) {
      //down
      index++;
      if (index >= matches.length) {
        index = matches.length;
      }
      $(".result")
        .eq(index - 1)
        .addClass("highlight");
      if (index != 1) {
        $(".result")
          .eq(index - 2)
          .removeClass("highlight");
      }
      console.log("down");
      console.log("index", index);
    }
    if (e.keyCode == 38) {
      //up
      index--;
      if (index <= 0) {
        index = 0;
        $(".result")
          .eq(index)
          .removeClass("highlight");
      } else {
        $(".result")
          .eq(index - 1)
          .addClass("highlight");
        $(".result")
          .eq(index)
          .removeClass("highlight");
      }
      console.log("up");
      console.log("index", index);
    }

    if (e.keyCode == 13) {
      //enter
      textEnter = $(".result")
        .eq(index - 1)
        .text();
      input.val(textEnter);
      $("#results").slideUp();
      console.log("enter key");
      console.log(textEnter);
    }
  });

  input.blur(function(e) {
    console.log("clicking outside search");
    $("#results").slideUp();
  });

  input.focus(function() {
    console.log("focusing");
    input.trigger("input.aaa");
    $("#results").slideDown();
  });
}());
