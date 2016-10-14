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
    for (var i = 1; i < iDiv.length; i++) {
        if (iDiv[i].innerHTML.includes('i.imgur.com/WJYjoAb.jpg')) {
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

function resizeImages() {
    if (!document.URL.includes('https://www.fxp.co.il/showthread.php?t='))
        return;
    if (typeof funcImages != 'undefined')
        return;

    var iMages = document.getElementsByTagName('img');
    for (var i = 0; i < iMages.length; i++) {
        if (iMages[i].height > 1000) {
            iMages[i].style = 'height: 1000px; width: auto';
        }
    }
    alreadySent('funcImages');
}

function removeImgSpam()
{
    if (!document.URL.includes('https://www.fxp.co.il/showthread.php?t='))
        return;
    if (typeof funcImgSpam != 'undefined')
        return;

    var imgz = document.getElementsByTagName('img');
    var imgg = [];
    for (var i = 0; i < imgz.length; i++)
    {
        imgg[i] = 0;
        for (var k = 0; k < imgz.length; k++)
        {
            if ((imgz[i].src == imgz[k].src) && imgz[i] != imgz[k])
            {
                imgg[i]++;
                if (imgg[i] >= 3)
                    imgz[i].remove();
            }
        }
    }
    alreadySent('funcImgSpam');
}
