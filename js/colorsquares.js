'use strict';

function get_interval(){
    update_interval = document.getElementById('update-interval').value;
}

function random_color(){
    background_color = random_hex();
    border_color = random_hex();
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
      update,
      update_interval
    );
}

var background_color = '#0f0';
var border_color = '#fff';
var update_counter = 0;
var update_interval = 400;

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
    document.getElementById('update-interval').value = update_interval;
    document.getElementById('update-interval').oninput = get_interval;

    random_color();
    update();
};
