var cont = document.getElementById('cont');
var start = 1;
function loadmore() {
    for (var i = start; i < start + 25; i++) {
        var h4 = document.createElement('h4');
        h4.textContent = 'Masai School' + ' ' + i;
        cont.append(h4);
    }
    start = start + 25;
}
var throttleFunction = function(func, delay) {
    if (timerId) {
        return;
    }
    var timerId = setTimeout(function() {
        func();
        timerId = undefined;
    }, delay);
};

cont.addEventListener('scroll', function() {
    console.log(
        cont.scrollTop,
        cont.clientHeight,
        cont.scrollHeight,
        cont.getBoundingClientRect(),
        cont.getClientRects()
    );
    if (Math.ceil(cont.scrollTop) + cont.clientHeight >= cont.scrollHeight) {
        throttleFunction(loadmore, 500);
    }
});
window.addEventListener('load', function() {
    loadmore();
});
