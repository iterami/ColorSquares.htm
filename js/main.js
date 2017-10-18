'use strict';

function repo_init(){
    core_repo_init({
      'info': '<input id=reset type=button value=Reset><input id=random-color type=button value="Random Color">',
      'info-events': {
        'random-color': {
          'todo': function(){
              random_color();
              core_escape();
          },
        },
        'reset': {
          'todo': function(){
              update_counter = 0;
              core_escape();
          },
        },
      },
      'storage': {
        'square-count': 624,
      },
      'storage-menu': '<table><tr><td><input id=square-count><td>Square Count</table>',
      'title': 'ColorSquares.htm',
    });

    create_squares();
}
