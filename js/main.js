'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'randomize': {
          'onclick': function(){
              core_escape();
              randomize();
          },
        },
        'recreate': {
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
      'info': '<input id=restart type=button value=Restart><input id=recreate type=button value=Recreate><br><input id=randomize type=button value="Randomize">',
      'reset': reset,
      'storage': {
        'height': '25px',
        'interval': 50,
        'square-count': 624,
        'width': '25px',
      },
      'storage-menu': '<table><tr><td><input id=height><td>Button Height'
        + '<tr><td><input id=width><td>Button Width'
        + '<tr><td><input id=interval min=1 type=number><td>Interval'
        + '<tr><td><input id=square-count min=1 type=number><td>Square Count</table>',
      'title': 'ColorSquares.htm',
    });

    create_squares();
    reset();
}
