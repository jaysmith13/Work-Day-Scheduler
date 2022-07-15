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
//functions for color time blocks

var checkingTimeDay = function(){
    var hourOfDay =timeDay.format("H");
    for(var i = 9; i<18; i++){
        var index = '#t-'+ i;
        index =index.trim();
        var attr =$(index).attr('atr');

        if (parseInt(hourOfDay)=== parseInt(attr)){
            $(index).addClass(bgCurrent);
            $(index).children('.business-hour').addClass('text-dark bg-light m-0 p-0 w-100');
            if(list.length === 0){
                $(index).children('.col-10').children('p').text('Current Hour');
            }
        }
        else if(parseInt(attr) < parseInt (hourOfDay)){
            $(index).addClass(bgBefore);
            $(index).children('.business-hour').addClass('text-dark bg-light m-0 p-0 w-100');}
        else{
            $(index).addClass(bgAfter);
            $(index).children('.business-hour').addClass('text-dark bg-light m-0 p-0 w-100');}
        }
        }
//Function for date
var displayTime = function(){
    $('#currentDay').text(timeDay.format(timeFormat));
};
//event listeners
$('.col-10').on('click', 'p', function() {
    var text = $(this)
    .text()
    .trim();

    var hourOfDay =timeDay.format('H');
    var schTime = $(this).parent().parents().attr('atr');
    var id = "#t-"+schTime;
    var tempBg = " ";

    if 
})


