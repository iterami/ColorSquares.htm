function init(){
    var colorsquares = '';

    var loop_counter = 624;
    do{
        colorsquares += '<div class=square id=' + loop_counter + '></div>';
        if(loop_counter % 25 == 0){
            colorsquares += '<br>';
        }
    }while(loop_counter--);

    document.getElementById('colorsquares').innerHTML = colorsquares;

    update();
}

function reset(){
    update_counter = 0;
}

function update(){
    update_counter += 1;

    if(update_counter > 312){
        update_counter = 1;
    }

    var loop_counter = 624;
    do{
        document.getElementById(loop_counter).style.borderColor =
          loop_counter % update_counter == 0
            ? '#fff'
            : '#000';

        document.getElementById(624 - loop_counter).style.background =
          loop_counter % update_counter == 0
            ? '#0f0'
            : '#000';
    }while(loop_counter--);

    setTimeout(
      'update()',
      document.getElementById('update-interval').value
    );
}

var update_counter = 0;

window.onload = init;
