function InjectSucc(ElementTag, first, second) {
    var iTemp = document.createElement(ElementTag);
    if (arguments.length == 2) {
        iTemp.innerHTML = first;
    }
    else if (arguments[0] == 'meta') {
        iTemp.name = first;
        iTemp.content = second;
    }
    else if (arguments[0] == 'link') {
        iTemp.rel = first;
        iTemp.href = second;
    }
    else { return; }
    document.getElementsByTagName('head')[0].appendChild(iTemp);
}
