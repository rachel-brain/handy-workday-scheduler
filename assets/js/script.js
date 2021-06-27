var today = moment();
var dateDisplayEl = $('#currentDay1');
var timeDisplayEl = $('#currentDay2');

function displayTime() {
    dateDisplayEl.text(today.format("dddd, MMMM Do YYYY"));
    var rightNow = moment().format("h:mm:ss a");
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

function init() {
    var savedSchedule = JSON.parse(localStorage.getItem("savedTimeTask"));
    if (savedSchedule !== null) {
        schedule = savedSchedule;
        console.log("saved: ", schedule);
    };
    // renderSchedule();
};

// TODO:
// On load, the user is presented with a daily planner with standard business hours for them to create a schedule
// On load, the current day & live time is displayed at the top of the calendar
// The scheduler has empty timeblocks for standard business hours
// Each timeblock is color-coded to indicate whether it is in the past, present or future
// When the user clicks into a timeblock, they can enter an event
// When the user clicks the save button for that timeblock, the event is saved in local storage
// When the user refreshes the page, the saved events persist
// Need to compare the time from moment.js with that time on the scheduler - convert the 8am/9am, etc to moment.js time?
// Remove console.logs


var customTimeEls = document.querySelector(".custom-time");
var displayEl = document.querySelector(".display-3");
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

    for (var i = 0; i < taskInputEls.length; i++) {
        var task = taskInputEls[i];

        var taskTime = element.dataset.time;
        task = document.querySelector("#task-input" + taskTime);

        console.log(task.value);

        var savedTimeTask = {
            time: taskTime,
            task: taskInput.value
        };

        function storeSchedule() {
            localStorage.setItem("savedTimeTask", JSON.stringify(savedTimeTask[i]));

        };
        storeSchedule();
        // renderSchedule();
    };

    saveBtnEls.forEach(function (element) {
        element.addEventListener("click", saveTask);
    });



    // *** Needs to persist 
    // function renderSchedule() {
    //     var lastSaved = JSON.parse(localStorage.getItem("savedTimeTask"));
    //     if (lastSaved !== null) {
    //         console.log("lastSaved: ", lastSaved);
    //     };
    // };






    // On page load

    // check the values from local storage ...
    // array of each input: 8, 9, 10, etc
    // remember first numbers will be empty??? 

    // element.innerText = message;



    // *** Time to match to moment.js
    function matchTime(event) {
        var hour = moment().format("hh");
        console.log(hour);

        // var customTime = Number(event.target.dataset);
        for (var i = 0; i < customTimeEls.length; i++) {
            // var customTime = customTimeEls[i];
            var customTime = Number(event.target.dataset);

            if (customTime === hour) {
                // display as .present
                taskInputEls[i].setAttribute("style", "background-color: var (--red); color: var(--white)");
            } else if (customTime < hour) {
                // display as .past
                taskInputEls[i].setAttribute("style", "background-color: var (--grey); color: var(--black)");
            } else {
                // display as .future
                taskInputEls[i].setAttribute("style", "background-color: var (--green); color: var(--black)");
            };
        };

        matchTime();

        init();



        // Small devices (landscape phones, 576px and up)
        // @media(min - width: 576 px) {};

        // Medium devices (tablets, 768px and up)
        // @media(min - width: 768 px) {};

        // Large devices (desktops, 992px and up)
        // @media(min - width: 992 px) {};

        // Extra large devices (large desktops, 1200px and up)
        // @media(min - width: 1200 px) {};