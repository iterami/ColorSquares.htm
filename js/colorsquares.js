'use strict';

function create_squares(){
    square_count = parseInt(document.getElementById('square-count').value, 10);

    var colorsquares = [];
    var loop_counter = square_count;
    do{
        colorsquares.push('<div id=' + loop_counter + '></div>');
    }while(loop_counter--);

    document.getElementById('colorsquares').innerHTML = colorsquares.join('');
}

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
    if(update_counter > square_count / 2){
        update_counter = 1;
    }

    var loop_counter = square_count;
    do{
        document.getElementById(loop_counter).style.borderColor =
          loop_counter % update_counter === 0
            ? border_color
            : '#000';

        document.getElementById(square_count - loop_counter).style.background =
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
var square_count = 624;
var update_counter = 0;
var update_interval = 400;

window.onload = function(){
    document.getElementById('square-count').value = square_count;
    document.getElementById('update-interval').value = update_interval;

    create_squares();
    random_color();
    update();

    document.getElementById('random-color').onclick = random_color;
    document.getElementById('reset').onclick = reset;
    document.getElementById('square-count').oninput = create_squares;
    document.getElementById('update-interval').oninput = get_interval;
};
