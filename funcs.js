function xhr(ARG) {
  var xhttp = new XMLHttpRequest();
  if(ARG['type'])
    xhttp.responseType = ARG['type'];
  xhttp.addEventListener('readystatechange', function () {
  if(xhttp.status == 200 && xhttp.readyState == 4 && ARG['func'])
    ARG['func'](xhttp);
  });
  xhttp.open(ARG['method'], ARG['url'], ARG['async'] ? ARG['async'] : ARG['method'] == 'GET' ? true : false);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  if(ARG['payload']) {
    var data = '';
    Object.keys(ARG['payload']).forEach(function (e, i) {
      data += e + '=' + Object.values(ARG['payload'])[i] + (Object.keys(ARG['payload']).length - 1 == i ? '' : '&');
    });
  }
  xhttp.send(ARG['payload'] ? data: null);
}

function loadFile(path, then) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('get', path, true);
  xhttp.send();
  xhttp.addEventListener('readystatechange', function() {
    if(xhttp.readyState != 4 || xhttp.status != 200) return;
    then(xhttp.responseText.replace(/\[/g, '<').replace(/\]/g, '>'));
  });
}

function insertFile(file, intoElem) {
  var x = document.createElement('pre');
  intoElem.append(x);
  loadFile(file, function(e) {
    x.innerHTML = e;
  });
  return x;
}

(function() {
  var x = document.createComment(`
  .....
   /.////.
     ./////.       .................  ................  ...          ...
  .///../////.     ///////////////// .////////////////.  .//.      .//.
     .//...////.                 /// .//           .//.    .///..///.
      ./// ./////. ///////////////// .//           .//.      .////.
    .//...////..   ///               .//           .//.    .///..///.
  .///../////.     ///               .//           .//.  ///.      .///      .//
    ../////.       ...                ..            ..  ...          ...      ..
  .//////.
  ......

  / . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . /
  `);
  document.insertBefore(x, document.querySelector('html'));
})();
