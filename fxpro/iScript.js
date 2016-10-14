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

function iDetectAndRemove(rem) {
    setTimeout(function () {
        if (rem === null) {
            iDetectAndRemove(rem);
        }
        else {
            rem.remove();
        }
    }, 420);
}

function alreadySent(id) {
    writeRidden = document.createElement('script'); writeRidden.type = 'text/javascript'; writeRidden.innerHTML = 'var ' + id + ' = true'; document.getElementsByTagName('head')[0].appendChild(writeRidden);
}

function adBlock() {
    if (typeof funcBlock == 'undefined') {
        iDetectAndRemove(document.getElementById('google_image_div'));

        var iLink = document.getElementsByTagName('a');
        for (var i = 0; i < iLink.length; i++) {
            if (iLink[i].target == '_parent' && iLink[i].href == "http://bit.ly/2dZ647j") {
                iDetectAndRemove(iLink[i]);
            }
            if (iLink[i].target == '_blank') {
                iDetectAndRemove(iLink[i]);
            }
        }

        var iFrames = document.getElementsByTagName('iframe');
        for (var i = 0; i < iFrames.length; i++) {
            //iFrames[i].remove();
            iDetectAndRemove(iFrames[i]);
        }
        alreadySent('funcBlock');
    }
}

function removeExtra() {
    if (document.URL == "https://www.fxp.co.il/") 
        return;

    if (typeof funcExtra == 'undefined') {
        iDetectAndRemove(document.getElementById('taboola-mobile-below-article-thumbnails'));
        alreadySent('funcExtra');
    }
}
