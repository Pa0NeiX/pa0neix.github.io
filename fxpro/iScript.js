if(document.URL != "https://www.fxp.co.il/") {
  if (typeof injected == 'undefined') {
    alert('sup');
    var writeRidden = document.createElement('script'); writeRidden.type = 'text/javascript'; writeRidden.innerHTML = 'var injected = true'; document.getElementsByTagName('head')[0].appendChild(writeRidden);
  }
}
