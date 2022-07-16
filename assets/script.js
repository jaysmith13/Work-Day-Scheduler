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

    if (parseInt(hourOfDay) === parseInt(schTime)){
        tempBg += bgCurrent;
    }
    else if (parseInt(schTime) < parseInt(hourOfDay)){
        tempBg += bgBefore;
    } else {
        tempBg += bgAfter;
    }

    var textInput = $('<textarea>')
    .addClass('form-control text-dark' + tempBg)
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger('focus');
});

var functionBlur =function (){
    var text = $('.form-control')
    .val()
    .trim();

 var eventP = $('<p>')
 .addClass('h-100 w-100 mt-4')
 .text(text);

 $('.form-control').replaceWith(eventP);
}

var loadSchedule = function(){
    if (list){
        for(var i = 9; i < 18; i++){
            var index = "#t-"+ i;
            index = index.trim();
            var attr = $(index).attr('atr');
            var elementP =$(index).children('.col-10').children('p');

            for(j=0; j<list.length; j++)
        {
            if(parseInt(list[j].hourSch) === parseInt(attr)){
                elementP.text(list[j].txtSch)
                }
            }
        }
    }
};

$('.btn').on('click', function(event){
    event.preventDefault();

    var schTime = $(this).attr('atr');
    var id = '#t-'+schTime;
    var mostParent = $(this).parents(id);
    var indexText = mostParent.children('.col-10').children('.form-control');

    if(inputText.val())
    {
        var objWorkSchedule ={
            txtSch: indputText.val().trim(),
            hourSch:schTime
        };

        list.push(objWorkSchedule);
        localStorage.setItem('daySch',JSON.stringify(list));
        functionBlur();

        loadSchedule();
}
else
{
    alert('You can not save and empty event');
}
});

start();