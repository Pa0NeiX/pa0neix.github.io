
window.onload = function () {
    if (!document.URL.match(/fxp.co.il/g))
        return;
    var scripts = document.querySelectorAll('script');
    for (var i = 0; i < scripts.length; i++) {
        if (!scripts[i].src)
            continue;
        if (scripts[i].src.match(/walla|ads|taboola/g))
            scripts[i].remove();
    }
}
