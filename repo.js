'use strict';

function create_squares(){
    const colorsquares = [];
    let loop_counter = core_storage_data['square-count'];
    do{
        colorsquares.push('<button class=gridbutton disabled id=' + loop_counter + '></button>');
    }while(loop_counter--);

    document.getElementById('colorsquares').innerHTML = colorsquares.join('');

    randomize();
}

function randomize(){
    let loop_counter = core_storage_data['square-count'];
    do{
        const element = document.getElementById(loop_counter);

        element.style.height = core_storage_data['height'];
        element.style.width = core_storage_data['width'];
    }while(loop_counter--);

    changed_color = '#' + core_random_hex();
    default_color = '#' + core_random_hex();
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
          'onclick': core_repo_reset,
        },
      },
      'globals': {
        'changed_color': '#000',
        'default_color': '#000',
        'update_counter': 0,
      },
      'info': '<button id=restart type=button>Restart</button><button id=remake type=button>Remake</button><br><button id=randomize type=button>Randomize</button>',
      'reset': reset,
      'storage': {
        'height': '25px',
        'interval': 1000,
        'square-count': 624,
        'width': '25px',
      },
      'storage-menu': '<table><tr><td><input class=mini id=height type=text><td>Button Height'
        + '<tr><td><input class=mini id=width type=text><td>Button Width'
        + '<tr><td><input class=mini id=interval min=1 step=any type=number><td>Interval'
        + '<tr><td><input class=mini id=square-count min=1 step=any type=number><td>Square Count</table>',
      'title': 'ColorSquares.htm',
    });

    create_squares();
    reset();
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
        document.getElementById(core_storage_data['square-count'] - loop_counter).style.backgroundColor =
          loop_counter % update_counter === 0
            ? default_color
            : changed_color;
    }while(loop_counter--);
}
