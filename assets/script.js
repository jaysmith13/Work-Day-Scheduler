//date
var DateFormat = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(DateFormat);
//time
var TimeOfDay = moment(moment(), "MM/DD/YYYY");
// Storage for Rows
$("#hour9 .input").val(localStorage.getItem("hour9"));
$("#hour10 .input").val(localStorage.getItem("hour10"));
$("#hour11 .input").val(localStorage.getItem("hour11"));
$("#hour12 .input").val(localStorage.getItem("hour12"));
$("#hour13 .input").val(localStorage.getItem("hour13"));
$("#hour14 .input").val(localStorage.getItem("hour14"));
$("#hour15 .input").val(localStorage.getItem("hour15"));
$("#hour16 .input").val(localStorage.getItem("hour16"));
$("#hour17 .input").val(localStorage.getItem("hour17"));


//Start function
function start(){
    displayTimeofDay();
    loadSchedule();
    checkingCurrentDayTime();
}

// Save function
$(document).ready(function () { 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var Input = $(this).siblings(".textInput").val();
        var time = $(this).parent().attr("id");

// Save text locally
        localStorage.setItem(time, Input);
    })
   // Schdeuler functions
    function DayScheduler() {
        var timeNow = moment().hour();
        $(".time-block").each(function () {
            var RowTime = parseInt($(this).attr("id").split("hour")[1]);

            if (RowTime < timeNow) {
                $(this).removeClass("later");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (RowTime === timeNow) {
                $(this).removeClass("previous");
                $(this).removeClass("later");
                $(this).addClass("current");
            }
            else {
                $(this).removeClass("current");
                $(this).removeClass("previous");
                $(this).addClass("later");

            }
        })
    }

    
    
DayScheduler();
})