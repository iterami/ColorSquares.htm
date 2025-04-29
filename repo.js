'use strict';

function create_squares(){
    let squares = '';
    let loop_counter = Math.floor(core_storage_data['square-count']);
    do{
        squares += '<button class=gridbutton disabled id=' + loop_counter + '></button>';
    }while(loop_counter--);

    core_elements['colorsquares'].innerHTML = squares;
    core_elements['colorsquares'].style.lineHeight = '1px';

    for(const element in core_elements){
        if(!globalThis.isNaN(element)){
            delete core_elements[element];
        }
    }
    loop_counter = Math.floor(core_storage_data['square-count']);
    do{
        core_elements[loop_counter] = document.getElementById(loop_counter);
    }while(loop_counter--);

    randomize();
}

function randomize(){
    let loop_counter = Math.floor(core_storage_data['square-count']);
    do{
        const style = core_elements[loop_counter].style;
        style.height = core_storage_data['height'];
        style.width = core_storage_data['width'];
    }while(loop_counter--);

    changed_color = '#' + core_random_hex();
    default_color = '#' + core_random_hex();

    reset();
}

function repo_init(){
    core_repo_init({
      'events': {
        'randomize': {
          'onclick': function(){
              core_escape();
              randomize();
          },
        },
        'remake': {
          'onclick': function(){
              core_escape();
              create_squares();
          },
        },
        'restart': {
          'onclick': function(){
              core_escape();
              reset();
          },
        },
      },
      'globals': {
        'changed_color': '#000',
        'default_color': '#000',
        'update_counter': 0,
      },
      'info': '<button id=restart type=button>Restart</button><button id=remake type=button>Remake</button><button id=randomize type=button>Randomize</button>',
      'storage': {
        'height': '25px',
        'interval': 1000,
        'square-count': 624,
        'width': '25px',
      },
      'storage-menu': '<table><tr><td><input class=mini id=height type=text><td>Button Height'
        + '<tr><td><input class=mini id=width type=text><td>Button Width'
        + '<tr><td><input class=mini id=interval min=1 step=any type=number><td>Interval'
        + '<tr><td><input class=mini id=square-count min=1 step=1 type=number><td>Square Count</table>',
      'title': 'ColorSquares.htm',
      'ui-elements': [
        'colorsquares',
      ],
    });

    create_squares();
}

function reset(){
    update_counter = 0;

    update();
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

    let loop_counter = Math.floor(core_storage_data['square-count']);
    do{
        core_elements[Math.floor(core_storage_data['square-count']) - loop_counter].style.backgroundColor =
          loop_counter % update_counter === 0
            ? default_color
            : changed_color;
    }while(loop_counter--);
}
