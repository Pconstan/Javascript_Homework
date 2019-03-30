// from data.js
var tableData = data;

// YOUR CODE HERE!
var datetimes = [];
var cities = [];
var states = [];
var countries = [];
var shapes = [];
var durationsMins = [];
var comments_ = [];

var tbody = d3.select("tbody");

tableData.forEach((info) => {
    Object.entries(info).forEach(([key, value]) => {

        if (key === "datetime") {
            datetimes.push(value);
        }
        else if (key === "city") {
            cities.push(value);
        }
        else if (key === "state") {
            states.push(value);
        }
        else if (key === "country") {
            countries.push(value);
        }
        else if (key === "shape") {
            shapes.push(value);
        }
        else if (key === "durationMinutes") {
            durationsMins.push(value);
        }
        else if (key === "comments") {
            comments_.push(value);
        }
    });
});
    tableData.forEach(function(info) {
        console.log(info);
        var row = tbody.append("tr");
        Object.entries(info).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
});

//

var inputText = d3.select("#datetime")
var btn = d3.select("#filter-btn")

function displayData(data){ 
    tbody.text("")
    data.forEach(function(info){
    new_tr = tbody.append("tr")
    Object.entries(info).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    });
})};



// filter data with desired date
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var new_tbl = tableData.filter(info => info.datetime===inputText.property("value"))
    displayData(new_tbl);
}

// event listener to handle change and click
inputText.on("change", changeHandler);
btn.on("click", changeHandler);