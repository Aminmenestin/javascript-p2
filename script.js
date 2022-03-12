const test_wrapper = document.querySelector('.test-wrapper');
const test_area = document.querySelector('#test-area');
const theTimer = document.querySelector('.timer');
const origin_text = document.querySelector('#origin-text p').innerHTML;
const reset = document.querySelector('#reset');



var timer = [0, 0, 0, 0];
var interval;
var check_timer = false;


EventLoader();

function EventLoader() {
    test_wrapper.addEventListener('keypress', start);
    test_wrapper.addEventListener('keyup', check_word);
    reset.addEventListener('click', reset_all);
}

function start() {
    const entered_word = test_area.value.length;

    if (entered_word == 0 && check_timer == false) {
        check_timer = true;
        interval = setInterval(runTimer, 10);
    }
}

// Timer_calc


function leadingZero(time) {

    if (time <= 9) {
        time = "0" + time;
    }

    return time;
}


function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

    theTimer.innerHTML = currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}




function check_word() {
    let test_area_value = test_area.value;
    let origin_text_value = origin_text.substring(0, test_area_value.length);


    if (test_area_value == '') {
        test_wrapper.style.borderColor = 'yellow';
    }
    else {
        if (test_area_value == origin_text_value) {
            test_wrapper.style.borderColor = 'green';
        }
    }
    if (test_area_value != origin_text_value) {
        test_wrapper.style.borderColor = 'red';
    }
    if (test_area_value == origin_text) {
        test_wrapper.style.borderColor = 'green';
        clearInterval(interval);
        
    }

}



function reset_all() {
    clearInterval(interval);
    check_timer = false;

    test_area.value='';
    theTimer.innerHTML='00:00:00'
    test_wrapper.style.borderColor = 'gray';
}

