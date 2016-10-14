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
    var writeRidden = document.createElement('script');
    writeRidden.type = 'text/javascript';
    writeRidden.innerHTML = 'var ' + id + ' = true';
    document.getElementsByTagName('head')[0].appendChild(writeRidden);
}

function adBlock() {
    if (typeof funcBlock != 'undefined')
        return;

    iDetectAndRemove(document.getElementById('google_image_div'));
    iDetectAndRemove(document.getElementById('newmav'));

    var iLink = document.getElementsByTagName('a');
    for (var i = 0; i < iLink.length; i++) {
        if (iLink[i].target == '_blank') {
            iDetectAndRemove(iLink[i]);
        }
    }

    var iDiv = document.getElementsByTagName('div');
    for(var i = 1; i < iDiv.length; i++) {
        if(iDiv[i].innerHTML.includes('i.imgur.com/WJYjoAb.jpg')) { 
           iDetectAndRemove(iDiv[i]);
        }
    }
    
    var iFrames = document.getElementsByTagName('iframe');
    for (var i = 0; i < iFrames.length; i++) {
        iDetectAndRemove(iFrames[i]);
    }
    alreadySent('funcBlock');
}

function removeExtra() {
    if (document.URL == 'https://www.fxp.co.il/') 
        return;
    if (typeof funcExtra != 'undefined') 
        return;

    if (document.URL.includes('https://www.fxp.co.il/showthread.php?t='))
        iDetectAndRemove(document.getElementById('taboola-mobile-below-article-thumbnails'));
    else
        iDetectAndRemove(document.getElementById('taboola-below-mobile-forum-thumbnails'));

    alreadySent('funcExtra');
}
