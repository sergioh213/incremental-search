(function(countries) {
  input = $("input");
  var index = 0;
  var matches = [];

  input.on("input", function(e) {
    //input.on....
    index = 0;
    var val = e.target.value; //inp.val(); another way with Jquery
    console.log(val);

    matches = [];
    for (var i = 0; i < countries.length; i++) {
      if (
        countries[i].toLowerCase().startsWith(val.toLowerCase()) &&
        val != ""
      ) {
        ///!countries[i].indexOf(val)
        console.log("val", val);
        matches.push(countries[i]);
        //var a, a.lenght, a.slice(0,4) --- matches= matches.slice(0,4)
      }
      if (matches.length >= 4) {
        break;
      }
    }
    var resultsContainer = $("#results");
    var resultsHtml = "";
    if (matches.length != 0) {
      for (var j = 0; j < matches.length; j++) {
        resultsHtml += // making the selected texts in bold
          "<div class='result'>" +
          "<strong>" +
          matches[j].substr(0, val.length) +
          "</strong>" +
          matches[j].substr(val.length) +
          "</div>";
      }
      resultsContainer.html(resultsHtml);
    } else {
      resultsContainer.html("<div class='result'>No Results</div>");
    }
    $("#results").slideDown();
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
})([
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Angola",
  "Anguilla",
  "Antigua",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire (Netherlands Antilles)",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Curacao (Netherlands Antilles)",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland (Republic of)",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kosrae Island",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia (FYROM)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Moldova",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Ponape",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Rota",
  "Russia",
  "Rwanda",
  "Saba (Netherlands Antilles)",
  "Saipan",
  "Samoa",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St. Barthelemy",
  "St. Croix",
  "St. Eustatius (Netherlands Antilles)",
  "St. John",
  "St. Kitts and Nevis",
  "St. Lucia",
  "St. Maarten (Netherlands Antilles)",
  "St. Thomas",
  "St. Vincent and the Grenadines",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tinian",
  "Togo",
  "Tonga",
  "Tortola",
  "Trinidad and Tobago",
  "Truk",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos",
  "Tuvalu",
  "US Virgin Islands",
  "Uganda",
  "Ukraine",
  "Union Island",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Gorda",
  "Wallis and Futuna",
  "Yap",
  "Yemen",
  "Zambia",
  "Zimbabwe"
]);

//blur, focus
//input(text field)
//edge case: if the value equals an empty string
//if the list of items has more than 4 results reduce it to 4. Alternatively in the loop break if the length of the matches array equals 4
//if the value of the input doesn't match any countries return 'no results'
//
