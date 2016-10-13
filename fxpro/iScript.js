if(document.URL != "https://www.fxp.co.il/") {
  if (typeof injected == 'undefined') {
    var taboola = document.getElementsByClassName('taboola-mobile-below-article-thumbnails');
    for(int i = 0; i < taboola.length; i++) {
     taboola[i].remove(); 
    }
    var writeRidden = document.createElement('script'); writeRidden.type = 'text/javascript'; writeRidden.innerHTML = 'var injected = true'; document.getElementsByTagName('head')[0].appendChild(writeRidden);
  }
}
