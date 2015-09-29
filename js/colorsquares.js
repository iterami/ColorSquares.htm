'use strict';

function random_color(){
    background_color = random_hex();
    border_color = random_hex();
}

function random_hex(){
    var choices = '0123456789abcdef';
    return '#'
      + choices.charAt(Math.floor(Math.random() * 16))
      + choices.charAt(Math.floor(Math.random() * 16))
      + choices.charAt(Math.floor(Math.random() * 16));
}

function reset(){
    update_counter = 0;
}

function update(){
    update_counter += 1;

    if(update_counter > 312){
        update_counter = 1;
    }

    var loop_counter = 624;
    do{
        document.getElementById(loop_counter).style.borderColor =
          loop_counter % update_counter === 0
            ? border_color
            : '#000';

        document.getElementById(624 - loop_counter).style.background =
          loop_counter % update_counter === 0
            ? background_color
            : '#000';
    }while(loop_counter--);

    window.setTimeout(
      'update()',
      document.getElementById('update-interval').value
    );
}

var background_color = '#0f0';
var border_color = '#fff';
var update_counter = 0;

window.onload = function(){
    var colorsquares = '';

    var loop_counter = 624;
    do{
        colorsquares += '<div id=' + loop_counter + '></div>';
        if(loop_counter % 25 === 0){
            colorsquares += '<br>';
        }
    }while(loop_counter--);

    document.getElementById('colorsquares').innerHTML = colorsquares;

    random_color();
    update();
};
