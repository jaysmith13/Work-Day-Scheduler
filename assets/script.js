//background
var bgCurrent = "bg-danger";
var bgAfter = "bg-success";
var bgBefore = "bg-secondary";

//date
var timeFormat = "dddd, MMMM Do, YYYY";
//time
var timeDay = moment(moment(), "MM/DD/YYYY");

//LocalStorage Array
var list = JSON.parse(localStorage.getItem('daySch')) || [];

function start(){
    displayTime();
    loadSchedule();
    checkingTimeDay();
}

var checkingTimeDay = function(){
    var hourOfDay =timeDay.format("H");
    for(var i = 9; i<18; i++){
        var index = '#t-'+ i;
        index =index.trim();
        var attr =$(index).attr('atr');
    }
}

