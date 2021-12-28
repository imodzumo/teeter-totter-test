export function generateRandomObject(list){
    return list[Math.floor(Math.random() * list.length)];
}

export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Timer(fn, delay) {
    let timerId, start, remaining = delay;

    this.pause = function() {
        clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    let play = function() {
        start = new Date();
        timerId = setTimeout(function() {
            delay = (delay < 1000) ? delay : delay - 100
            remaining = delay;
            play();
            fn();
        }, remaining);
    };
    
    this.play = play;
    this.play();
}