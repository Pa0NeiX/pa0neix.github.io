function detectAndRemove(rem) {
    setTimeout(function () {
        if (document.getElementById(rem) === null) {
            detectAndRemove(rem);
        }
        else {
            document.getElementById(rem).remove();
        }
    }, 420);
}

function alreadySent(id) {
    writeRidden = document.createElement('script'); writeRidden.type = 'text/javascript'; writeRidden.innerHTML = 'var ' + id + ' = true'; document.getElementsByTagName('head')[0].appendChild(writeRidden);
}

function removeExtra() {
    if (document.URL == "https://www.fxp.co.il/") 
        return;

    if (typeof funcExtra == 'undefined') {
        ('taboola-mobile-below-article-thumbnails');

        for(var i = 0; i < document.getElementsByTagName('iframe').length; i++) { 
            document.getElementsByTagName('iframe')[i].remove(); 
        }
        alreadySent('funcExtra');
    }
}

function adBlock() {
    if (document.URL == "https://www.fxp.co.il/") 
        return;

    if (typeof funcBlock == 'undefined') {
        detectAndRemove('google_image_div');
        alreadySent('funcBlock');
    }
}
