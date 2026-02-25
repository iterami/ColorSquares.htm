'use strict';

function create_squares(){
    core_elements.colorsquares.style.lineHeight = '1px';

    let squares = '';
    for(let i = 0; i < core_storage_data.count; i++){
        squares += '<button class=gridbutton disabled id=' + i + '></button>';
    }
    core_elements.colorsquares.innerHTML = squares;

    for(const element in core_elements){
        if(!globalThis.isNaN(element)){
            delete core_elements[element];
        }
    }
    for(let i = 0; i < core_storage_data.count; i++){
        core_elements[i] = document.getElementById(i);
    }

    randomize();
}

function randomize(){
    for(let i = 0; i < core_storage_data.count; i++){
        const style = core_elements[i].style;
        style.height = core_storage_data.height;
        style.width = core_storage_data.width;
    }

    changed_color = '#' + core_random_hex();
    default_color = '#' + core_random_hex();

    reset();
}

function repo_init(){
    core_repo_init({
      'events': {
        'randomize': {
          'onclick': function(){
              randomize();
              core_escape();
          },
        },
        'remake': {
          'onclick': function(){
              create_squares();
              core_escape();
          },
        },
        'restart': {
          'onclick': function(){
              reset();
              core_escape();
          },
        },
      },
      'globals': {
        'changed_color': '#000',
        'default_color': '#000',
        'update_counter': 0,
      },
      'info': '<button class=medium id=restart type=button>Restart</button><button class=medium id=remake type=button>Remake</button><button class=medium id=randomize type=button>Randomize</button>',
      'storage': {
        'count': 624,
        'height': '25px',
        'interval': 1000,
        'width': '25px',
      },
      'storage_menu': '<table><tr><td><input class=mini id=height type=text><td>Button Height'
        + '<tr><td><input class=mini id=width type=text><td>Button Width'
        + '<tr><td><input class=mini id=interval min=1 step=any type=number><td>Interval'
        + '<tr><td><input class=mini id=count min=1 step=1 type=number><td>Square Count</table>',
      'title': 'ColorSquares.htm',
      'ui_elements': [
        'colorsquares',
      ],
    });

    create_squares();
}

function reset(){
    update_counter = 0;

    update();
    core_interval_modify({
      'id': 'interval',
      'interval': core_storage_data.interval,
      'todo': update,
    });
}

function update(){
    update_counter += 1;
    if(update_counter > core_storage_data.count / 2){
        update_counter = 1;
    }

    for(let i = 0; i < core_storage_data.count; i++){
        core_elements[i].style.backgroundColor =
          i % update_counter === 0
            ? default_color
            : changed_color;
    }
}
