'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'random-color': {
          'onclick': function(){
              random_color();
              core_escape();
          },
        },
        'reset': {
          'onclick': function(){
              update_counter = 0;
              core_escape();
          },
        },
      },
      'globals': {
        'changed_color': '#000',
        'default_color': '#000',
        'update_counter': 0,
      },
      'info': '<input id=reset type=button value=Reset><input id=random-color type=button value="Random Color">',
      'storage': {
        'square-count': 624,
      },
      'storage-menu': '<table><tr><td><input id=square-count><td>Square Count</table>',
      'title': 'ColorSquares.htm',
    });

    create_squares();

    core_interval_modify({
      'todo': update,
    });
}
