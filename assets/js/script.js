// Set live date timer
var today = moment();
var dateDisplayEl = $('#currentDay1');
var timeDisplayEl = $('#currentDay2');

function displayTime() {
    dateDisplayEl.text(today.format("dddd, MMMM Do YYYY"));
    var rightNow = moment().format("h:mm:ss a");
    timeDisplayEl.text(rightNow);
};

setInterval(displayTime, 1000);

// On page load, saved hourly tasks are retrieved from local storage
function init() {
    // Saved hourly tasks are rendered on Scheduler
    for (var i = 8; i < 19; i++) {
        document.getElementById("task-input-" + i).value = JSON.parse(localStorage.getItem(i));
    };
};

var saveBtnEls = document.querySelectorAll(".save-button");

// Save all hourly inputs individually
function saveTask(event) {
    event.preventDefault();

    // Save to local storage
    for (var i = 8; i < 19; i++) {
        localStorage.setItem(i, JSON.stringify(document.querySelector("#task-input-" + i).value));
    };
};

saveBtnEls.forEach(function (element) {
    element.addEventListener("click", saveTask);
});

// Schedule time to compare to current hour (moment.js)
function matchTime() {
    var hour = moment().hours();

    $(".save-button").each(function () {
        var customTime = parseInt($(this).attr("id"));
        var theTaskbar = $(this).closest(".time-block").find(".custom-taskbar");

        if (customTime === hour) {
            // display as present
            theTaskbar.addClass("present");
            theTaskbar.removeClass("past");
            theTaskbar.removeClass("future");
        } else if (customTime < hour) {
            // display as past
            theTaskbar.removeClass("present");
            theTaskbar.addClass("past");
            theTaskbar.removeClass("future");
        } else {
            // display as future
            theTaskbar.removeClass("present");
            theTaskbar.removeClass("past");
            theTaskbar.addClass("future");
        };
    });
};

matchTime();

init();