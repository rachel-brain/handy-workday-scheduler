# My handy workday Scheduler
BOOTCAMP - Week 5 assignment


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Instructions for use of the Scheduler

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Mock-Up
The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Description
My motivation for undertaking this project was to practise using both vanilla Javascript & jQuery in the building of a daily scheduler.  It also required the use of a third party API (moment.js) to determine if the time on the Scheduler was in the past, present or future.  Local storage was also needed to ensure the hourly entries persisted on refresh of the page.

## Installation
Open the (index.html) page in your prefered browser to see the handy workday Scheduler, ready to enter & save your hourly inputs.

## Tests
The main test run was to enter & save hourly tasks to ensure that all of the criteria were met; for example:
 * the tasks were saved to local storage
 * the tasks were retrieved from local storage on page load
 * the time on the Scheduler was compared to the current time & color coded correctly (grey/red/green)
 
 Unfortunately, at the time of publishing, the Scheduler was not working correctly for retrieval of inputs from local storage on page load.  Therefore, further debugging is required.  Also, DRY principles were not used in the writing of this code.  If I had more time, I would have replaced some of the vanilla Javascript with jQuery & simplified the code to loop through some of the multiple inpouts & take out the repeated code.


## URLs

* URL of the deployed application:

  https://rachel-brain.github.io/handy-workday-scheduler/

* URL of the GitHub repository:

  https://github.com/rachel-brain/handy-workday-scheduler


- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
