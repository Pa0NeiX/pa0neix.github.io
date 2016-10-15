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

    var comments = document.getElementsByTagName('blockquote');
    for (var x = 0; x < comments.length; x++)
    {
        var imgz = comments[x].getElementsByTagName('img');
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
    }
    alreadySent('funcImgSpam');
}

function changeSubNick(code) {
    if (!document.URL.includes('https://www.fxp.co.il/showthread.php?t='))
        return;
    if (typeof funcSubNick != 'undefined')
        return;

    var nick;
    var x = document.getElementsByClassName('header-sticky-wrapper');
    for (var i = 0; i < x.length; i++) {
        if (x[i].innerHTML.includes("member.php?u=")) {
            nick = x[i].innerText;
            nick = nick.replace("שלום ", "");
            break;
        }
    }

    setInterval(function () {
        var comments = document.getElementsByClassName('xsaid');
        for (var i = 0; i < comments.length; i++) {
            if (comments[i].innerHTML.includes(nick)) {
                document.getElementsByClassName('user_title')[i].innerHTML = code;
            }
        }
    }, 420);
    alreadySent('funcSubNick');
}

function nightMode() {
    if (typeof funcNMode != 'undefined')
        return;

    alreadySent('funcNMode');
}
