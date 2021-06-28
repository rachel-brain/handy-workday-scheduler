var today = moment();
var dateDisplayEl = $('#currentDay1');
var timeDisplayEl = $('#currentDay2');

function displayTime() {
    dateDisplayEl.text(today.format("dddd, MMMM Do YYYY"));
    var rightNow = moment().format("h:mm:ss a");
    timeDisplayEl.text(rightNow);
};

setInterval(displayTime, 1000);

// TODO:
// Remove console.logs
// Time match


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

function init() {
    // $("#task-input8").val(localStorage.getItem("savedTimeTask8"));

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

    console.log(savedSchedule8);
    console.log(savedSchedule17);

    if (savedSchedule8 !== null) {
        // document.getElementById("saved-input8").innerHTML = savedSchedule8.task8;
        // document.getElementById("saved-input8").textContent = savedSchedule8.task8;
        // document.getElementById("saved-input8").textContent = savedTimeTask8.task8;
        // document.getElementById("task-input8").textContent = savedTimeTask8.task8;
        // };
        // if (savedSchedule9 !== null) {
        //     document.getElementById("saved-input9").innerHTML = savedSchedule9.task9;
        // }
        // if (savedSchedule10 !== null) {
        //     document.getElementById("saved-input10").innerHTML = savedSchedule10.task10;
        // }
        // if (savedSchedule11 !== null) {
        //     document.getElementById("saved-input11").innerHTML = savedSchedule11.task11;
        // }
        // if (savedSchedule12 !== null) {
        //     document.getElementById("saved-input12").innerHTML = savedSchedule12.task12;
        // }
        // if (savedSchedule13 !== null) {
        //     document.getElementById("saved-input13").innerHTML = savedSchedule13.task13;
        // }
        // if (savedSchedule14 !== null) {
        //     document.getElementById("saved-input14").innerHTML = savedSchedule14.task14;
        // }
        // if (savedSchedule15 !== null) {
        //     document.getElementById("saved-input15").innerHTML = savedSchedule15.task15;
        // }
        // if (savedSchedule16 !== null) {
        //     document.getElementById("saved-input16").innerHTML = savedSchedule16.task16;
        // }
        // if (savedSchedule17 !== null) {
        //     document.getElementById("saved-input17").innerHTML = savedSchedule17.task17;
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

var taskInputEls = document.querySelectorAll(".custom-taskbar");
console.log(taskInputEls);

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
};

saveBtnEls.forEach(function (element) {
    element.addEventListener("click", saveTask);
});

// *** Needs to persist
// $("#task-input8").val(localStorage.getItem("savedTimeTask[0]"));
// $("#task-input9").val(localStorage.getItem("savedTimeTask[1]"));
// $("#task-input10").val(localStorage.getItem("savedTimeTask[2]"));
// $("#task-input11").val(localStorage.getItem("savedTimeTask[3]"));
// $("#task-input12").val(localStorage.getItem("savedTimeTask[4]"));
// $("#task-input13").val(localStorage.getItem("savedTimeTask[5]"));
// $("#task-input14").val(localStorage.getItem("savedTimeTask[6]"));
// $("#task-input15").val(localStorage.getItem("savedTimeTask[7]"));
// $("#task-input16").val(localStorage.getItem("savedTimeTask[8]"));
// $("#task-input17").val(localStorage.getItem("savedTimeTask[9]"));



// *** Schedule time to match to current hour (moment.js)
function matchTime() {
    var hour = moment().hours();
    console.log(hour);

    $(".save-button").each(function () {
        var customTime = parseInt($(this).attr("id"));
        console.log(hour, customTime)
        console.log(typeof (hour));
        console.log(typeof (customTime));

        if (customTime === hour) {
            // display as present
            $(".custom-taskbar").addClass("present");
            $(".custom-taskbar").removeClass("past");
            $(".custom-taskbar").removeClass("future");
        } else if (customTime < hour) {
            // display as past
            $(".custom-taskbar").removeClass("present");
            $(".custom-taskbar").addClass("past");
            $(".custom-taskbar").removeClass("future");
        } else {
            // display as future
            $(".custom-taskbar").removeClass("present");
            $(".custom-taskbar").removeClass("past");
            $(".custom-taskbar").addClass("future");
        };
    });
};

matchTime();

init();