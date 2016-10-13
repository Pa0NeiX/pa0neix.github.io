if(document.URL != "https://www.fxp.co.il/") {
    if (typeof injected == 'undefined') 
    {
        setInterval(function () {
            var taboola = document.getElementsByClassName('taboola-mobile-below-article-thumbnails');
            for (var i = 0; i < taboola.length; i++) {
                taboola[i].remove();
            }
        }, 5000);
        var writeRidden = document.createElement('script'); writeRidden.type = 'text/javascript'; writeRidden.innerHTML = 'var injected = true'; document.getElementsByTagName('head')[0].appendChild(writeRidden);
    }
}
