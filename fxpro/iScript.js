function detectAndRemove() {
    setTimeout(function () {
        if (document.getElementById('taboola-mobile-below-article-thumbnails') === null) {
            detectAndRemove();
        }
        else {
            document.getElementById('taboola-mobile-below-article-thumbnails').remove();
        }
    }, 420);
}

if(document.URL != "https://www.fxp.co.il/") {
    if (typeof injected == 'undefined') 
    {
        detectAndRemove();
        var writeRidden = document.createElement('script'); writeRidden.type = 'text/javascript'; writeRidden.innerHTML = 'var injected = true'; document.getElementsByTagName('head')[0].appendChild(writeRidden);
    }
}
