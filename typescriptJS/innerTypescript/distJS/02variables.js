function let1() {
    for (var i_1 = 0; i_1 < 10; i_1++) {
        var test = i_1;
    }
}
let1();
function let2() {
    var a = 10;
    console.log('a: ', a);
}
let2();
function let3() {
    var _loop_1 = function (i_2) {
        setTimeout(function () {
            console.log('i: ', i_2);
        }, 1000);
    };
    for (var i_2 = 0; i_2 < 5; i_2++) {
        _loop_1(i_2);
    }
}
let3();
