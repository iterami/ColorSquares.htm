'use strict';

function create_squares(){
    let colorsquares = [];
    let loop_counter = core_storage_data['square-count'];
    do{
        colorsquares.push('<input class=gridbutton id=' + loop_counter + ' type=button>');
    }while(loop_counter--);

    document.getElementById('colorsquares').innerHTML = colorsquares.join('');

    random_color();
}

function random_color(){
    changed_color = '#' + core_random_hex();
    default_color = '#' + core_random_hex();
}

function reset(){
    update_counter = 0;

    core_interval_modify({
      'id': 'color-squares-interval',
      'interval': core_storage_data['interval'],
      'todo': update,
    });
}

function update(){
    update_counter += 1;
    if(update_counter > core_storage_data['square-count'] / 2){
        update_counter = 1;
    }

    let loop_counter = core_storage_data['square-count'];
    do{
        document.getElementById(core_storage_data['square-count'] - loop_counter).style.background =
          loop_counter % update_counter === 0
            ? default_color
            : changed_color;
    }while(loop_counter--);
}
