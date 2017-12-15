function loadFile(path, then) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('get', path, true);
  xhttp.send();
  xhttp.addEventListener('change', function() {
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
}
