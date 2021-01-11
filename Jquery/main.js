$(document).ready(function(){
$('h3').css('margin-left','30px');
$('h3').css('max-width','300px');
$('h3').css('border','solid 3px red');


$('h3:odd').click(function(){
    $(this).css('color', 'red');
});
$('h3:odd').dblclick(function(){
    $(this).css('color', 'black');
});

$('h2').mouseenter(function(){
    $(this).attr("class", "yellow")
});
$('h2').mouseleave(function(){
    $(this).attr("class", "black")
});


let counter = 0;
$('button').click(function(){
    counter+= 1;
    $("h1").html('Счетчик ' + counter); 
});

$('#wrapped').click(function(){
    $(this).wrap('<div class="background" />'); 
});

$('#see').click(function(){
$('#slave').hide(2000);
});

$('#hide').click(function(){
    $('#slave').show(2000);
});

$('#hello').click(function(){
    $('#hello').prepend("Hello ");
    $('#world').prepend("Hello ");
});

$('#world').click(function(){
    $('#hello').append(" World");
    $('#world').append(" World");
});

$('#square').mousedown(function(){
    $('#square').css('background-color', 'red')
});

$('#square').mouseup(function(){
    $('#square').css('background-color', 'blue')
});




});



/*
Список команд
.ready()
.css()
.click()
.dbclick()
.attr()
.mouseetner()
.mouseleave()
.html()
.wrap()
.hide()
.show()
.append()
.prepend()
.mousedown()
.mouseup()
Всего - 15
*/