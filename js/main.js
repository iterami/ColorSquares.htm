'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'random-color': {
          'onclick': function(){
              core_escape();
              random_color();
          },
        },
        'recreate': {
          'onclick': function(){
              core_escape();
              create_squares();
          },
        },
        'reset': {
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
      'info': '<input id=reset type=button value=Reset><input id=recreate type=button value=Recreate><br><input id=random-color type=button value="Random Color">',
      'storage': {
        'interval': 50,
        'square-count': 624,
      },
      'storage-menu': '<table><tr><td><input id=interval><td>Interval'
        + '<tr><td><input id=square-count><td>Square Count</table>',
      'title': 'ColorSquares.htm',
    });

    create_squares();
    reset();
}
