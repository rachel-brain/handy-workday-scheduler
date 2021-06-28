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


var savedTimeTask8;
var savedTimeTask9;
var savedTimeTask10;
var savedTimeTask11;
var savedTimeTask12;
var savedTimeTask13;
var savedTimeTask14;
var savedTimeTask15;
var savedTimeTask16;
var savedTimeTask17;
var savedTimeTask18;

// On page load, saved hourly tasks are retrieved from local storage
function init() {
    var savedSchedule8 = JSON.parse(localStorage.getItem("savedTimeTask8"));
    var savedSchedule9 = JSON.parse(localStorage.getItem("savedTimeTask9"));
    var savedSchedule10 = JSON.parse(localStorage.getItem("savedTimeTask10"));
    var savedSchedule11 = JSON.parse(localStorage.getItem("savedTimeTask11"));
    var savedSchedule12 = JSON.parse(localStorage.getItem("savedTimeTask12"));
    var savedSchedule13 = JSON.parse(localStorage.getItem("savedTimeTask13"));
    var savedSchedule14 = JSON.parse(localStorage.getItem("savedTimeTask14"));
    var savedSchedule15 = JSON.parse(localStorage.getItem("savedTimeTask15"));
    var savedSchedule16 = JSON.parse(localStorage.getItem("savedTimeTask16"));
    var savedSchedule17 = JSON.parse(localStorage.getItem("savedTimeTask17"));
    var savedSchedule18 = JSON.parse(localStorage.getItem("savedTimeTask18"));

    // Saved hourly tasks are rendered on Scheduler
    if (savedSchedule8 !== null) {
        savedTimeTask8 = savedSchedule8;
        document.getElementById("task-input8").innerHTML = savedTimeTask8.task8;
        console.log(savedTimeTask8.task8);
    };
    if (savedSchedule9 !== null) {
        savedTimeTask9 = savedSchedule9;
        document.getElementById("task-input9").innerHTML = savedTimeTask9.task9;
        console.log(savedTimeTask9.task9);
    }
    if (savedSchedule10 !== null) {
        savedTimeTask10 = savedSchedule10;
        document.getElementById("task-input10").innerHTML = savedTimeTask10.task10;
        console.log(savedTimeTask10.task10);
    }
    if (savedSchedule11 !== null) {
        savedTimeTask11 = savedSchedule11;
        document.getElementById("task-input11").innerHTML = savedTimeTask11.task11;
        console.log(savedTimeTask11.task11);
    }
    if (savedSchedule12 !== null) {
        savedTimeTask12 = savedSchedule12;
        document.getElementById("task-input12").innerHTML = savedTimeTask12.task12;
        console.log(savedTimeTask12.task12);
    }
    if (savedSchedule13 !== null) {
        savedTimeTask13 = savedSchedule13;
        document.getElementById("task-input13").innerHTML = savedTimeTask13.task13;
        console.log(savedTimeTask13.task13);
    }
    if (savedSchedule14 !== null) {
        savedTimeTask14 = savedSchedule14;
        document.getElementById("task-input14").innerHTML = savedTimeTask14.task14;
        console.log(savedTimeTask14.task14);
    }
    if (savedSchedule15 !== null) {
        savedTimeTask15 = savedSchedule15;
        document.getElementById("task-input15").innerHTML = savedTimeTask15.task15;
        console.log(savedTimeTask15.task15);
    }
    if (savedSchedule16 !== null) {
        savedTimeTask16 = savedSchedule16;
        document.getElementById("task-input16").innerHTML = savedTimeTask16.task16;
        console.log(savedTimeTask16.task16);
    }
    if (savedSchedule17 !== null) {
        savedTimeTask17 = savedSchedule17;
        document.getElementById("task-input17").innerHTML = savedTimeTask17.task17;
        console.log(savedTimeTask17.task17);
    }
    if (savedSchedule18 !== null) {
        savedTimeTask18 = savedSchedule18;
        document.getElementById("task-input18").innerHTML = savedTimeTask18.task18;
        console.log(savedTimeTask18.task18);
    } else {
        return;
    };
};

var customTimeEls = document.querySelector(".custom-time");
var saveBtnEls = document.querySelectorAll(".save-button");

var taskInput8 = document.querySelector("#task-input8");
var taskInput9 = document.querySelector("#task-input9");
var taskInput10 = document.querySelector("#task-input10");
var taskInput11 = document.querySelector("#task-input11");
var taskInput12 = document.querySelector("#task-input12");
var taskInput13 = document.querySelector("#task-input13");
var taskInput14 = document.querySelector("#task-input14");
var taskInput15 = document.querySelector("#task-input15");
var taskInput16 = document.querySelector("#task-input16");
var taskInput17 = document.querySelector("#task-input17");
var taskInput18 = document.querySelector("#task-input18");

var taskInputEls = document.querySelectorAll(".custom-taskbar");
console.log(taskInputEls);

// Save all hourly inputs individually
function saveTask(event) {
    event.preventDefault();
    console.log(event);

    var element = event.target;
    console.log(element.dataset.time);

    savedTimeTask8 = {
        time: 8,
        task8: taskInput8.value
    };
    savedTimeTask9 = {
        time: 9,
        task9: taskInput9.value
    };
    savedTimeTask10 = {
        time: 10,
        task10: taskInput10.value
    };
    savedTimeTask11 = {
        time: 11,
        task11: taskInput11.value
    };
    savedTimeTask12 = {
        time: 12,
        task12: taskInput12.value
    };
    savedTimeTask13 = {
        time: 13,
        task13: taskInput13.value
    };
    savedTimeTask14 = {
        time: 14,
        task14: taskInput14.value
    };
    savedTimeTask15 = {
        time: 15,
        task15: taskInput15.value
    };
    savedTimeTask16 = {
        time: 16,
        task16: taskInput16.value
    };
    savedTimeTask17 = {
        time: 17,
        task17: taskInput17.value
    };
    savedTimeTask18 = {
        time: 18,
        task18: taskInput18.value
    };

    // Save to local storage
    localStorage.setItem("savedTimeTask8", JSON.stringify(savedTimeTask8));
    localStorage.setItem("savedTimeTask9", JSON.stringify(savedTimeTask9));
    localStorage.setItem("savedTimeTask10", JSON.stringify(savedTimeTask10));
    localStorage.setItem("savedTimeTask11", JSON.stringify(savedTimeTask11));
    localStorage.setItem("savedTimeTask12", JSON.stringify(savedTimeTask12));
    localStorage.setItem("savedTimeTask13", JSON.stringify(savedTimeTask13));
    localStorage.setItem("savedTimeTask14", JSON.stringify(savedTimeTask14));
    localStorage.setItem("savedTimeTask15", JSON.stringify(savedTimeTask15));
    localStorage.setItem("savedTimeTask16", JSON.stringify(savedTimeTask16));
    localStorage.setItem("savedTimeTask17", JSON.stringify(savedTimeTask17));
    localStorage.setItem("savedTimeTask18", JSON.stringify(savedTimeTask18));
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