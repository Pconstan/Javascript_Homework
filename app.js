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