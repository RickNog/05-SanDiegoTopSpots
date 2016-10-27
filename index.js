//jSon function that calls the topspots.json file.
$(function () {
    $.getJSON("topspots.json", function (data) {
        var tr;
        //This takes the list from the json file and place it to the table in HTML.
        for (var i = 0; i < data.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + data[i].name + "</td>");
            tr.append("<td>" + data[i].description + "</td>");
            //This creates the buttons and links of the locations
            tr.append('<td><a href="https://www.google.com/maps?q=' + data[i].location + '" class="btn btn-primary active" role="button">Open in Google Maps</a></td>');
            $('table').append(tr);
        }
    });
});



