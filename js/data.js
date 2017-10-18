'use strict';

function create_squares(){
    var colorsquares = [];
    var loop_counter = core_storage_data['square-count'];
    do{
        colorsquares.push('<input class=gridbutton id=' + loop_counter + ' type=button>');
    }while(loop_counter--);

    document.getElementById('colorsquares').innerHTML = colorsquares.join('');

    random_color();
    update();
}

function random_color(){
    changed_color = '#' + core_random_hex();
    default_color = '#' + core_random_hex();
}

function update(){
    if(!core_menu_open){
        update_counter += 1;
        if(update_counter > core_storage_data['square-count'] / 2){
            update_counter = 1;
        }

        var loop_counter = core_storage_data['square-count'];
        do{
            document.getElementById(core_storage_data['square-count'] - loop_counter).style.background =
              loop_counter % update_counter === 0
                ? default_color
                : changed_color;
        }while(loop_counter--);
    }

    window.setTimeout(
      update,
      core_storage_data['frame-ms']
    );
}

var changed_color = '#000';
var default_color = '#000';
var update_counter = 0;
