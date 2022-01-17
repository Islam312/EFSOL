var i = 1;
console.log('i', i);
function var1() {
    console.log('var i:', i);
    console.log('var test:', test);
    for (var i = 0; i < 10; i++) {
        var test = i;
    }
    console.log('var i:', i);
    console.log('var test:', test);
}
var1();
function var2() {
    var a = 10;
    var a = 20;
    console.log('a: ', a);
}
var2();
function var3() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log('i: ', i);
        }, 1000);
    }
}
var3();
